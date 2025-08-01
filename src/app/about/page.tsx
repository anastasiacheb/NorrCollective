import Link from 'next/link';
import Image from 'next/image';
import { PreFooter } from '@/components';

const IconLinks = [
  { href: '#', name: 'Instagram' },
  { href: '#', name: 'Pinterest' },
  { href: '#', name: 'Facebook' },
  { href: '#', name: 'Twitter' },
  { href: '#', name: 'Telegram' },
];

interface IconLinkRoundProps {
  href: string;
  name: string;
}

function IconLinkRoundItem({ href, name }: IconLinkRoundProps) {
  return (
    <Link
      href={href}
      aria-label={`${name} link`}
      className="flex-none border border-base-900 rounded-full flex items-center justify-center size-12">
      <img src={`/icons/${name}.svg`} alt={`${name} icon`} className="size-6" />
    </Link>
  );
}

interface AboutSectionProps {
  title: string;
  text: string;
  src: string;
  reverse?: boolean;
}

function AboutSection({ title, text, src, reverse }: AboutSectionProps) {
  return (
    <section className="border-r border-base-900 lg:grid lg:grid-cols-2 lg:h-[calc(100dvh-92px)]">
      <div
        className={`border-l border-b border-base-900 flex items-center justify-center overflow-clip lg:h-[calc(100dvh-92px)] ${reverse ? 'lg:order-1' : 'order-2'}`}>
        <Image
          src={`/images/${src}`}
          alt="chair"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto aspect-[375/420] object-cover md:aspect-[768/500] lg:aspect-auto lg:h-[calc(100dvh-92px)]"
        />
      </div>
      <div
        className={`border-l border-b border-base-900 py-10 px-4 md:p-20 relative ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="lg:sticky lg:top-43">
          <h2 className="text-[26px] font-medium mb-4 md:text-[38px]">{title}</h2>
          <p className="leading-snug">{text}</p>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <header className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-2 lg:h-[calc(100dvh-92px)]">
        <div className="border-l border-b border-base-900 py-10 px-4 md:p-20 lg:flex lg:items-center lg:justify-center lg:flex-col">
          <h1 className="font-semibold text-[34px] flex flex-col gap-6 md:text-[50px] items-center justify-center mb-6">
            <span>Our Story</span>
            <span>about</span>
            <span>Norr Collective</span>
          </h1>
          <p className="leading-snug text-center mb-16">
            Discover Uniquely Curated Furniture and Design Icons for Any Interior:{' '}
            <br className="hidden md:block lg:hidden 2xl:block" />
            Elevate Your Space with Our Carefully Selected Vintage Collection
          </p>
          <div className="flex gap-4 items-center justify-center md:gap-8">
            {IconLinks.map((icon, index) => (
              <IconLinkRoundItem key={index} {...icon} />
            ))}
          </div>
        </div>
        <div className="border-l border-b border-base-900 flex items-center justify-center overflow-clip">
          <Image
            src="/images/DSC_4376-1.jpg"
            alt="chair"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full aspect-[375/420] object-cover md:aspect-[768/500] lg:aspect-auto"
          />
        </div>
      </header>
      <section className="px-4 py-10 md:p-20 border-x border-b border-base-900 text-center">
        <h2 className="uppercase text-xs md:text-sm font-medium mb-6">OUR STORY</h2>
        <h3 className="text-[26px] font-medium mb-4 md:text-[38px]">A Shared Vision for Timeless Design</h3>
        <p className="leading-snug max-w-159.5 mx-auto">
          Norr Collective was born from a collective passion for design, form, and history. Since 2010, our team has
          been curating authentic 20th-century furniture with character — selecting pieces that embody thoughtful
          craftsmanship and enduring aesthetics. Our goal is to make iconic design accessible to those who value
          timeless beauty in everyday living.
        </p>
      </section>
      <AboutSection
        title="Expertly Curated Design"
        text="At Norr Collective, we take pride in our team of dedicated curators and design enthusiasts who carefully select each piece. Every item in our collection is chosen for its authenticity, character, and craftsmanship — we work closely with trusted dealers to ensure the highest quality of vintage furniture and timeless design objects from the 20th century."
        src="request-trade-img-optimized.png"
        reverse
      />
      <AboutSection
        title="Furniture, Decor & Atmosphere"
        text="Beyond iconic furniture, our collection also includes thoughtful interior pieces — lighting, art objects, and rare finds — designed to shape an atmosphere of calm, beauty, and individuality. We believe that finding meaningful design should be seamless, which is why we offer a smooth and inspiring online experience."
        src="DSC_1191.jpg"
      />
      <AboutSection
        title="Making Everyday Living Special"
        text="Our mission is simple: to bring timeless design into everyday life. We are committed to quality, aesthetics, and a curated approach that helps you create a home filled with intention. Thank you for choosing Norr Collective — we look forward to helping you shape spaces that feel truly yours."
        src="trade-program.webp"
        reverse
      />
      <PreFooter />
    </>
  );
}
