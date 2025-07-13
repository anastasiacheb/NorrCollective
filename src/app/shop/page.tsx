import Image from 'next/image';
import Link from 'next/link';

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
      <div className="absolute z-50 bottom-3 text-center flex flex-col gap-1 justify-center items-center md:bottom-6 w-full">
        <h2 className="text-base font-medium leading-none backdrop-blur-sm rounded-full">{name}</h2>
        <p className="text-base-500 text-sm font-medium backdrop-blur-sm rounded-full">price {price}</p>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <header className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-2 lg:h-[calc(100dvh-92px)]">
        <div className="border-l border-b border-base-900 flex items-center justify-center overflow-clip relative lg:sticky lg:top-23">
          <Image
            src="/images/DSC_2876-scaled.jpg"
            alt="chair"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full aspect-[375/420] object-cover md:aspect-[768/500] lg:aspect-auto"
          />
          <div className="bg-base-900/50 w-full h-full absolute"></div>
          <h1 className="text-base-0 text-[40px] font-semibold md:text-[67px] absolute">Sofas</h1>
        </div>
        <div className="grid grid-cols-2">
          <Link
            href="#"
            className="lg:h-[calc((100dvh-92px)/2)] border-l border-b border-base-900 group overflow-clip relative">
            <Image
              src="/images/DSC_2876-scaled.jpg"
              alt="chair"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full aspect-square object-cover lg:aspect-auto group-hover:scale-110 transition-all ease-linear duration-200"
            />
            <div className="absolute z-50 bottom-3 text-center flex flex-col gap-1 justify-center items-center md:bottom-6 w-full">
              <h2 className="text-base font-medium leading-none backdrop-blur-sm rounded-full">fkdsjf;s</h2>
              <p className="text-base-500 text-sm font-medium backdrop-blur-sm rounded-full">price 70$</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
