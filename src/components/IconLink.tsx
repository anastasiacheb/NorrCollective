import Link from 'next/link';

const IconLinks = [
  { href: '#', name: 'Instagram' },
  { href: '#', name: 'Pinterest' },
  { href: '#', name: 'Facebook' },
  { href: '#', name: 'Twitter' },
  { href: '#', name: 'Telegram' },
];

interface IconLinkProps {
  href: string;
  name: string;
}

function IconLinkItem({ href, name }: IconLinkProps) {
  return (
    <Link href={href} aria-label={`${name} link`} className="flex-none">
      <img src={`/icons/${name}.svg`} alt={`${name} icon`} className="size-6" />
    </Link>
  );
}

export default function IconLink({ center }: { center?: boolean }) {
  return (
    <div className={`flex ${center ? 'justify-between p-6 lg:hidden gap-2' : 'gap-8 lg:gap-5 xl:gap-8'}  `}>
      {IconLinks.map((icon, index) => (
        <IconLinkItem key={index} {...icon} />
      ))}
    </div>
  );
}
