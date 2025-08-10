import Image from 'next/image';
import Link from 'next/link';
import { Products } from '@/data';
import { Animation } from '@/components';

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
        <Animation scale className=" w-full h-full">
          <Image
            loading="eager"
            src={`/images/${src1}`}
            alt="chair"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto lg:h-full lg:w-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
          />
        </Animation>
      </Link>
    </div>
  );
}

export default function Categories() {
  return (
    <div className="lg:col-span-2">
      {Products.map((cat, index) => (
        <CategoryItem key={index} index={index} {...cat} />
      ))}
    </div>
  );
}
