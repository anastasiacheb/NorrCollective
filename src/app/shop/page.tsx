import Image from 'next/image';
import { Categories } from '@/components';

export default function Page() {
  return (
    <>
      <header className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-4">
        <div className="border-l border-b border-base-900 flex items-center justify-center overflow-clip relative lg:sticky lg:top-23 lg:col-span-2 lg:h-[calc(100dvh-92px)]">
          <Image
            loading="eager"
            priority
            src="/images/DSC_1191.jpg"
            alt="chair"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full aspect-[375/420] object-cover md:aspect-[768/500] lg:aspect-auto"
          />
          <div className="bg-base-900/50 w-full h-full absolute"></div>
          <h1 className="text-base-0 text-[40px] font-semibold md:text-[67px] absolute">Shop</h1>
        </div>
        <Categories />
      </header>
    </>
  );
}
