import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

interface ProductLinkProps {
  name: string;
  price: string;
  src: string;
}
function ProductLink({ name, price, src }: ProductLinkProps) {
  return (
    <Link
      href="#"
      className="lg:h-[calc((100dvh-92px)/2)] border-l border-b border-base-900 group overflow-clip relative">
      <Image
        src={`/images/${src}`}
        alt="chair"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full aspect-square object-cover lg:aspect-auto group-hover:scale-110 transition-all ease-linear duration-200"
      />
      <div className="absolute z-40 bottom-3 text-center flex flex-col gap-1 justify-center items-center md:bottom-6 w-full">
        <h2 className="text-base font-medium leading-none backdrop-blur-sm rounded-full">{name}</h2>
        <p className="text-base-500 text-sm font-medium backdrop-blur-sm rounded-full">price {price}</p>
      </div>
    </Link>
  );
}

export async function generateStaticParams() {
  const cats: Category[] = await fetch('http://192.168.0.37:3000/api/products').then((res) => res.json());

  return cats.map((cat) => ({
    category: cat.href.replace('/', ''),
  }));
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cats: Category[] = await fetch('http://192.168.0.37:3000/api/products').then((res) => res.json());
  const cat = cats.find((item) => item.href.replace('/', '') === category.toLowerCase());

  if (!cat) {
    notFound();
  }

  return (
    <>
      <header className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-2">
        <div className="border-l border-b border-base-900 flex items-center justify-center overflow-clip relative lg:sticky lg:top-23 lg:h-[calc(100dvh-92px)] self-start">
          <Image
            src={`/images/${cat.src1}`}
            alt="chair"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full aspect-[375/420] object-cover md:aspect-[768/500] lg:aspect-auto"
          />
          <div className="bg-base-900/50 w-full h-full absolute"></div>
          <h1 className="text-base-0 text-[40px] font-semibold md:text-[67px] absolute capitalize">{cat.category}</h1>
        </div>
        <div className="grid grid-cols-2">
          {cat.products.map((product, index) => (
            <ProductLink key={index} {...product} src={product.src[0]} />
          ))}
        </div>
      </header>
    </>
  );
}
