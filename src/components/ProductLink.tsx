import Link from 'next/link';
import Image from 'next/image';
import { Animation } from '@/components';

interface ProductLinkProps {
  name: string;
  price: string;
  src: string;
  href: string;
}
export default function ProductLink({ name, price, src, href }: ProductLinkProps) {
  return (
    <Link
      href={href}
      className="lg:h-[calc((100dvh-92px)/2)] border-l border-b border-base-900 group overflow-clip relative">
      <Animation scale className=" w-full h-full">
        <Image
          loading="eager"
          src={`/images/${src}`}
          alt="chair"
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-full aspect-square object-cover lg:aspect-auto group-hover:scale-110 transition-all ease-linear duration-200"
        />
      </Animation>
      <div className="absolute z-40 bottom-3 text-center flex flex-col gap-1 justify-center items-center md:bottom-6 w-full">
        <h2 className="text-base font-medium leading-none backdrop-blur-sm rounded-full">{name}</h2>
        <p className="text-base-500 text-sm font-medium backdrop-blur-sm rounded-full">price {price}$</p>
      </div>
    </Link>
  );
}
