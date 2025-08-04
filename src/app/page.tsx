import Image from 'next/image';
import Link from 'next/link';
import { IconLink, PreFooter, Categories, Button } from '@/components';

interface ChooseItemProps {
  title: string;
  text: string;
  last?: boolean;
}

function ChooseItem({ title, text, last }: ChooseItemProps) {
  return (
    <div className={`px-4 py-10 md:p-20 border-l ${!last && 'border-b'}  border-base-900`}>
      <h4 className="text-[26px] font-medium pb-4 md:text-[38px]">{title}</h4>
      <p className="leading-snug">{text}</p>
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
                src="/images/DSC_2877-scaled.jpg"
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
        <Categories />
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
          <h2 className="font-semibold text-[34px] md:text-[50px] px-4 py-10 md:p-20 lg:sticky lg:self-start top-20 whitespace-nowrap">
            Why choose us ?
          </h2>
        </div>
        <div className="lg:col-span-2">
          <ChooseItem
            title="Timeless pieces by curators"
            text="At our furniture studio, design experts carefully select authentic and iconic items from the mid-20th
              century. Each piece is chosen for its elegance, craftsmanship, and ability to transform a space. We follow
              global design trends while honoring classic aesthetics — so your interior feels refined, lived-in, and
              timeless."
          />
          <ChooseItem
            title="On-time delivery"
            text="Never miss a moment with our punctual and careful delivery service. All furniture is brought to you in
              perfect condition — no unnecessary packaging, no delays. Your chosen piece arrives ready to take its place
              in your home, exactly as intended.
            "
          />
          <ChooseItem
            title="Safe payment"
            text="We use secure, industry-standard technology to protect your payment and personal data. Ordering is smooth,
              encrypted, and safe — so you can focus on the beauty of great design without any hassle.
            "
          />
          <ChooseItem
            last
            title="Support at every step"
            text="From selection to delivery, our team is here to assist you with every detail. Whether you’re furnishing a
              room or building a collection, we offer personal guidance to help you find pieces that reflect your style
              and fit your space — easily and confidently.
            "
          />
        </div>
      </section>
      <section
        id="contact"
        className="border-r border-base-900 lg:grid lg:grid-cols-2 lg:h-[calc(100dvh-92px)] scroll-mt-12.5 md:scroll-mt-14.5 lg:scroll-mt-23">
        <div className="border-b border-base-900 lg:order-2 grid grid-cols-2">
          <div className="border-b border-l border-base-900 col-span-2 overflow-clip lg:h-[calc(100dvh-92px-79px)] flex items-center justify-center">
            <Image
              src="/images/request-trade-img-optimized.png"
              alt="chair"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover aspect-[375/420] md:aspect-[768/500] lg:aspect-auto"
            />
          </div>
          <div className="p-4 pb-2 border-l font-medium text-[26px] col-span-2 md:col-span-1 md:px-10 md:py-4 md:text-[38px] md:text-center border-base-900">
            Follow us
          </div>
          <div className="p-4 pt-2 col-span-2 md:col-span-1 border-l md:border-base-900 md:flex md:p-0 md:justify-center md:items-center">
            <IconLink />
          </div>
        </div>
        <div className="border-l border-b border-base-900 md:grid md:grid-cols-2 lg:grid-rows-2 lg:h-[calc(100dvh-90px)]">
          <div className="py-10 px-4 md:p-20 border-b border-base-900 md:col-span-2">
            <h2 className="font-semibold text-[34px] md:text-[50px] mb-6 ">To Contact Us</h2>
            <p className="text-lg leading-snug font-medium mb-4">We will call you back</p>
            <form action="#" className="flex flex-col gap-4 md:grid md:grid-cols-2">
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+46 8 XXX XX XXX"
                className="text-base-900 placeholder:text-base-500 text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:placeholder:text-base-300 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 flex items-center"
              />
              <Button text="book a call" />
            </form>
          </div>
          <div className="border-base-900 md:border-r md:-mr-[0.5px]">
            <h3 className="p-4 font-medium text-[26px] md:text-[38px] border-b border-base-900 md:text-center">
              Phone
            </h3>
            <div className="px-4 py-10 flex flex-col gap-4 border-base-900 border-b md:border-0 lg:justify-center md:items-center lg:h-[calc(100%-80px)]">
              <div className="flex gap-0.5 items-center">
                <img src="/icons/call.svg" alt="icon" className="size-6" />
                <p className="font-semibold">+46 8 123 45 678</p>
              </div>
              <div className="flex gap-0.5 items-center">
                <img src="/icons/call.svg" alt="icon" className="size-6" />
                <p className="font-semibold">+46 8 876 54 321</p>
              </div>
            </div>
          </div>
          <div className="border-base-900  md:-mr-[0.5px]">
            <h3 className="p-4 font-medium text-[26px] md:text-[38px] border-b border-base-900 md:text-center">
              Address
            </h3>
            <div className="px-4 py-10 flex flex-col gap-4 border-base-900 md:border-0 lg:justify-center md:items-center lg:h-[calc(100%-80px)]">
              <p className="uppercase text-xs md:text-sm">opening hours: 8 to 11 p.m.</p>
              <div className="flex gap-0.5 items-center">
                <img src="/icons/pin_drop.svg" alt="icon" className="size-6" />
                <p className="font-semibold">Hälsingegatan 49, Stockholm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreFooter />
    </>
  );
}
