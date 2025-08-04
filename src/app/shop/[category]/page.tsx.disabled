// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { ProductLink } from '@/components';

// function CreateSlug(string: string) {
//   return string.toLowerCase().replace(/[^a-z0-9]+/g, '-');
// }

// interface Product {
//   name: string;
//   price: string;
//   src: string[];
// }

// interface Category {
//   category: string;
//   href: string;
//   src2: string;
//   products: Product[];
// }

// export async function generateStaticParams() {
//   const cats: Category[] = await fetch('http://192.168.0.40:3001/api/products').then((res) => res.json());

//   return cats.map((cat) => ({
//     category: cat.href.replace('/', ''),
//   }));
// }

// export default async function Page({ params }: { params: Promise<{ category: string }> }) {
//   const { category } = await params;
//   const cats: Category[] = await fetch('http://192.168.0.40:3001/api/products').then((res) => res.json());
//   const cat = cats.find((item) => item.href.replace('/', '') === category.toLowerCase());

//   if (!cat) {
//     notFound();
//   }

//   return (
//     <>
//       <header className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-2">
//         <div className="border-l border-b border-base-900 flex items-center justify-center overflow-clip relative lg:sticky lg:top-23 lg:h-[calc(100dvh-92px)] self-start">
//           <Image
//             src={`/images/${cat.src2}`}
//             alt="chair"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-full aspect-[375/420] object-cover md:aspect-[768/500] lg:aspect-auto"
//           />
//           <div className="bg-base-900/50 w-full h-full absolute"></div>
//           <h1 className="text-base-0 text-[40px] font-semibold md:text-[67px] absolute capitalize">{cat.category}</h1>
//         </div>
//         <div className="grid grid-cols-2">
//           {cat.products.map((product, index) => (
//             <ProductLink
//               key={index}
//               {...product}
//               src={product.src[0]}
//               href={`/shop${cat.href}/${CreateSlug(product.name)}`}
//             />
//           ))}
//         </div>
//       </header>
//     </>
//   );
// }
