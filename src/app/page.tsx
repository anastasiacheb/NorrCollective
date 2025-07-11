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
          className="w-full h-auto lg:h-full lg:w-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
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
            <h1 className="text-[40px] pb-4 font-semibold md:text-[67px]">
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
      <section className="border-r border-b border-base-900 lg:grid lg:grid-cols-4">
        <div className="border-b border-base-900 lg:border-b-0 lg:col-span-2 border-l">
          <h2 className="font-semibold text-[34px] md:text-[50px] px-4 py-10 md:p-20  lg:sticky lg:self-start top-20">
            About us
          </h2>
        </div>
        <div className="px-4 py-10 md:p-20 border-l border-base-900 lg:col-span-2">
          <h3 className="uppercase font-medium text-xs mb-6 md:text-sm">our story</h3>
          <h4 className="text-[26px] font-medium pb-4 md:text-[38px]">Norr Collective</h4>
          <p className="leading-snug mb-16">
            We are a modern furniture studio specializing in curated collections of timeless design. Our pieces are
            handpicked with care — each item tells a story of thoughtful craftsmanship and aesthetic clarity. We work
            directly with trusted collectors and galleries across Europe to ensure authenticity and impeccable
            condition. In our collection, you’ll find iconic mid-century furniture, elegant lighting, refined decor
            objects, and rare design finds to elevate any space. Add character to your interior or surprise someone
            special with a meaningful design gift — available for same or next-day delivery. Bringing design into your
            life has never been easier.
          </p>
          <Link
            href="/about"
            className="bg-base-0 text-base-900 hover:bg-base-900 hover:text-base-0 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center w-full md:w-44">
            Learn more
          </Link>
        </div>
      </section>
      <section className="border-r border-b border-base-900 lg:grid lg:grid-cols-4">
        <div className="border-b border-base-900 lg:border-b-0 lg:col-span-2 border-l">
          <h2 className="font-semibold text-[34px] md:text-[50px] px-4 py-10 md:p-20  lg:sticky lg:self-start top-20">
            Why choose us ?
          </h2>
        </div>
        <div className="lg:col-span-2">
          <div className="px-4 py-10 md:p-20 border-l border-b border-base-900">
            <h4 className="text-[26px] font-medium pb-4 md:text-[38px]">Timeless pieces by curators</h4>
            <p className="leading-snug">
              At our furniture studio, design experts carefully select authentic and iconic items from the mid-20th
              century. Each piece is chosen for its elegance, craftsmanship, and ability to transform a space. We follow
              global design trends while honoring classic aesthetics — so your interior feels refined, lived-in, and
              timeless.
            </p>
          </div>
          <div className="px-4 py-10 md:p-20 border-l border-b border-base-900">
            <h4 className="text-[26px] font-medium pb-4 md:text-[38px]">On-time delivery</h4>
            <p className="leading-snug">
              Never miss a moment with our punctual and careful delivery service. All furniture is brought to you in
              perfect condition — no unnecessary packaging, no delays. Your chosen piece arrives ready to take its place
              in your home, exactly as intended.
            </p>
          </div>
          <div className="px-4 py-10 md:p-20 border-l border-b border-base-900">
            <h4 className="text-[26px] font-medium pb-4 md:text-[38px]">Safe payment</h4>
            <p className="leading-snug">
              We use secure, industry-standard technology to protect your payment and personal data. Ordering is smooth,
              encrypted, and safe — so you can focus on the beauty of great design without any hassle.
            </p>
          </div>
          <div className="px-4 py-10 md:p-20 border-l border-base-900 lg:col-span-2">
            <h4 className="text-[26px] font-medium pb-4 md:text-[38px]">Support at every step</h4>
            <p className="leading-snug">
              From selection to delivery, our team is here to assist you with every detail. Whether you’re furnishing a
              room or building a collection, we offer personal guidance to help you find pieces that reflect your style
              and fit your space — easily and confidently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
