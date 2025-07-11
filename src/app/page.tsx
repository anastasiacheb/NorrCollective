import Image from 'next/image';
import Link from 'next/link';
import { Products } from '@/data';

// type Product = {
//   name: string;
//   desctiption: string;
//   href: string;
//   category: string;
//   src: string[];
//   price: string;
// };

// const TestProductCard = ({ product }: { product: Product }) => {
//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{product.desctiption}</p>
//       <div className="flex">
//         {product.src.map((img, index) => (
//           <img
//             key={index}
//             src={`/images/${img}`}
//             alt={`${product.name} ${index + 1}`}
//             style={{ width: '200px', marginBottom: '1rem' }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

interface CategoryItemProps {
  category: string;
  src1: string;
  href: string;
  index: number;
}

function CategoryItem({ category, src1, href, index }: CategoryItemProps) {
  return (
    <div className={`grid grid-cols-2 h-[50vw] lg:h-[calc((100dvh-92px)/2)]`}>
      <Link
        href={`/shop${href}`}
        className={`p-3 md:p-6 border-l border-b border-base-900 flex items-center justify-center relative group h-[50vw] lg:h-[calc((100vh-92px)/2)] ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <h2 className="font-medium text-[26px] md:text-[38px] capitalize">{category}</h2>
        <div className="flex gap-1 absolute bottom-3 md:bottom-6 items-center group border-b border-transparent group-hover:border-base-900 transition-all ease-linear duration-150">
          <p className="font-semibold text-sm md:text-base group-hover:text-base-500 group-active:text-base-900 transition-colors ease-linear duration-150">
            Shop now
          </p>
          <img src="/icons/arrow-right.svg" alt="arrow right" className="size-6" />
        </div>
      </Link>
      <Link
        href={`/shop${href}`}
        className={`h-[50vw] lg:h-[calc((100dvh-92px)/2)] border-l border-b border-base-900 group overflow-clip flex items-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
        <Image
          src={`/images/${src1}`}
          alt="chair"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover group-hover:scale-110 transition-all ease-linear duration-200"
        />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-r border-base-900 lg:grid lg:grid-cols-4 mt-12.5 md:mt-14.5 lg:mt-23">
        <div className="px-4 py-10 md:p-20 border-l border-b border-base-900 flex flex-col gap-6 md:gap-14 lg:h-[calc(100dvh-92px)] lg:justify-between lg:gap-6 lg:sticky lg:top-23 lg:self-start lg:col-span-2">
          <div>
            <h1 className="font-medium text-[40px] pb-4 md:font-semibold md:text-[67px]">
              Norr <br /> Collective
            </h1>
            <p className="text-base md:text-lg">
              Discover Iconic Design Pieces and Timeless Furniture for Any Interior: Bring Character Home with Our
              <span className="font-semibold"> Curated Collection</span>
            </p>
          </div>
          <div className="pt-4 border-t border-base-900 grid grid-cols-2 md:pt-6">
            <div className="pr-4 border-r border-base-900 md:pr-6">
              <Image
                src="/images/DSC_3649-scaled.jpg"
                alt="chair"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto aspect-[155/180] object-cover md:aspect-[280/256] lg:aspect-auto 2xl:aspect-square"
              />
            </div>
            <p className="text-sm md:text-base pl-4 md:pl-6 flex items-end">
              Experience the beauty of thoughtful design with our modern furniture collection. Shop online and bring
              home iconic pieces, carefully selected for timeless interiors.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          {' '}
          {Products.map((cat, index) => (
            <CategoryItem key={index} index={index} {...cat} />
          ))}
        </div>
      </header>
    </>
  );
}
