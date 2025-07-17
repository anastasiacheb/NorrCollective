import { notFound } from 'next/navigation';

function CreateSlug(string: string) {
  return string.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

interface Product {
  name: string;
  price: string;
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
  return (
    <div className="pt-100">
      <div>{prod.name}</div>
    </div>
  );
}
