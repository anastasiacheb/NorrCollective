import Link from 'next/link';
import Image from 'next/image';

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

function IconLinkRoundItem({ href, name }: IconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={`${name} link`}
      className="flex-none border border-base-900 rounded-full flex items-center justify-center size-12">
      <img src={`/icons/${name}.svg`} alt={`${name} icon`} className="size-6" />
    </Link>
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
            src="/images/DSC_2876-scaled.jpg"
            alt="chair"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto aspect-[375/420] object-cover md:aspect-[768/500] lg:aspect-auto"
          />
        </div>
      </header>
    </>
  );
}
