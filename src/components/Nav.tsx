'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IconLink } from '@/components';

type NavLinkProps =
  | { name: string; href: string; button?: false; className?: string }
  | { name: string; button: true; href?: undefined; className?: string };

function NavLink({ name, href, button, className }: NavLinkProps) {
  const style =
    'text-lg font-medium p-6 border-b border-base-900 w-full md:text-xl text-left lg:border-b-0 lg:border-r lg:text-center lg:py-8';
  const combStyle = `${style} ${className ?? ''}`;
  return button ? (
    <button className={`${combStyle}`}>{name}</button>
  ) : (
    <Link href={href} className={`${combStyle}`}>
      {name}
    </Link>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center border border-base-900 lg:grid lg:grid-cols-8 fixed top-0 w-full z-50 bg-base-0">
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={`backdrop-blur-xs w-dvw h-full fixed top-0 ease-linear transition-opacity ${isOpen ? 'opacity-100 left-0' : 'opacity-0 -left-[150%]'} lg:hidden`}
        style={{
          transitionProperty: 'opacity, left',
          transitionDuration: '300ms, 0ms',
          transitionDelay: isOpen ? '0ms, 0ms' : '0ms, 300ms',
        }}></div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        aria-label="open menu"
        className="p-3 md:p-4 lg:hidden border-r border-base-900">
        <img src="/icons/Menu.svg" alt="menu" className="size-6" />
      </button>
      <div
        className={`bg-base-0 border border-base-900 flex flex-col absolute top-0 w-full md:w-1/2 lg:flex-row lg:static lg:w-full lg:border-none lg:col-span-7 lg:grid lg:grid-cols-7 ${isOpen ? 'left-0' : '-left-full'} transition-all ease-linear duration-300`}>
        <div className="border-b border-base-900 lg:hidden">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            aria-label="close menu"
            className="px-3.5 py-2 md:py-3 md:px-4">
            <img src="/icons/close_button.svg" alt="close" className="size-8" />
          </button>
        </div>
        <NavLink name="Sign in" button className="lg:col-start-7 lg:border-l lg:-m-[0.5px]" />
        <NavLink href="/" name="Home" className="lg:hidden" />
        <NavLink href="/shop" name="Shop" className="lg:col-start-1 lg:row-start-1" />
        <NavLink href="/contact" name="Contact" className="lg:col-start-2 lg:row-start-1" />
        <NavLink href="/about" name="About us" className="lg:hidden" />
        <div className="p-6 border-base-900 border-b flex flex-col gap-4 lg:hidden">
          <Link href="#" className="text-sm font-medium md:text-base w-fit tracking-[2.5%]">
            Shipping & returns
          </Link>
          <Link href="#" className="text-sm font-medium md:text-base w-fit tracking-[2.5%]">
            Terms & conditions
          </Link>
          <Link href="#" className="text-sm font-medium md:text-base w-fit tracking-[2.5%]">
            Privacy policy
          </Link>
        </div>
        <IconLink center />
      </div>
      <button
        aria-label="open cart"
        className="p-3 md:p-4 border-l border-base-900 md:text-xl font-medium lg:py-8 lg:border-l-0 lg:col-start-8 bg-base-0">
        <span className="hidden lg:block">Cart</span>
        <img src="/icons/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg" alt="cart" className="size-6 lg:hidden" />
      </button>
    </nav>
  );
}
