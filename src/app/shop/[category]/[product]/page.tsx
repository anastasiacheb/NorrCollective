import { notFound } from 'next/navigation';
import { Slider, Counter, RadioButton, ProductLink } from '@/components';
import Link from 'next/link';

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
  const cats: Category[] = await fetch('http://192.168.0.37:3000/api/products').then((res) => res.json());

  return cats.flatMap((cat) =>
    cat.products.map((product) => ({
      category: cat.href.replace('/', ''),
      product: CreateSlug(product.name),
    })),
  );
}

export default async function Page({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category, product } = await params;
  const cats: Category[] = await fetch('http://192.168.0.37:3000/api/products').then((res) => res.json());
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
      <section className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-2 lg:h-[calc(100dvh-92px)]">
        <Slider Images={prod.src} />
        <div className="border-l border-b border-base-900 px-4 py-10 md:p-10 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="uppercase text-xs md:text-sm font-medium">
              <Link href={`/shop${cat.href}`}>{cat.category}</Link> / <span className="text-base-500">{prod.name}</span>
            </div>
            <div>
              <h1 className="capitalize font-medium text-[26px] md:text-[38px] mb-4">
                {prod.name.toLowerCase()} - ${prod.price}
              </h1>
              <p className="leading-snug">{prod.description}</p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-4 md:items-center">
              <h2 className="font-medium text-lg leading-snug">Quantity</h2>
              <Counter />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-medium text-lg leading-snug">Purchase type</h2>
              <RadioButton />
            </div>
            <button className="bg-base-900 text-base-0 hover:bg-base-700 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center">
              Add to basket
            </button>
          </div>
        </div>
      </section>
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
