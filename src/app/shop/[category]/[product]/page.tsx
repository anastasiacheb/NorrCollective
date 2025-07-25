import { notFound } from 'next/navigation';
import { ProductLink, ProductPage } from '@/components';

function CreateSlug(string: string) {
  return string.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

interface Product {
  name: string;
  price: string;
  description: string;
  src: string[];
}

interface Category {
  category: string;
  href: string;
  src1: string;
  products: Product[];
}

export async function generateStaticParams() {
  const cats: Category[] = await fetch('http://192.168.0.40:3000/api/products').then((res) => res.json());

  return cats.flatMap((cat) =>
    cat.products.map((product) => ({
      category: cat.href.replace('/', ''),
      product: CreateSlug(product.name),
    })),
  );
}

export default async function Page({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category, product } = await params;
  const cats: Category[] = await fetch('http://192.168.0.40:3000/api/products').then((res) => res.json());
  const cat = cats.find((item) => item.href.replace('/', '') === category.toLowerCase());

  if (!cat) {
    notFound();
  }

  const prod = cat.products.find((item) => CreateSlug(item.name) === product);

  if (!prod) {
    notFound();
  }

  const otherProducts = cats.flatMap((item) => item.products).filter((item) => CreateSlug(item.name) !== product);
  const shuffledProducts = otherProducts.sort(() => 0.5 - Math.random());
  const suggestedProducts = shuffledProducts.slice(0, 4);
  return (
    <>
      <ProductPage prod={prod} cat={cat} />
      <section className="border-r border-base-900">
        <h2 className="px-4 py-10 md:p-20 border-l border-b border-base-900 text-[26px] font-medium text-center md:text-[38px]">
          You may also like…
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {suggestedProducts.map((prod, index) => {
            const catObj = cats.find((item) => item.products.find((q) => CreateSlug(q.name) === CreateSlug(prod.name)));
            const catHref = catObj ? catObj.href : '';
            return (
              <ProductLink key={index} {...prod} src={prod.src[0]} href={`/shop${catHref}/${CreateSlug(prod.name)}`} />
            );
          })}
        </div>
      </section>
    </>
  );
}
