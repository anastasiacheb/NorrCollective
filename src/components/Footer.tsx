import Link from 'next/link';
import { IconLink, Button } from '@/components';
import { Products } from '@/data';

export default function Footer() {
  return (
    <footer className="border-l border-base-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="py-10 px-4 md:p-10 border-r border-b border-base-900 flex flex-col gap-4 md:gap-6">
        <p className="leading-snug">
          Stay inspired by timeless design — Norr Collective reminds you of seasonal collections, special drops &
          interior moments. <br />
          We’ll send a gentle nudge 7 days in advance. No spam. No sharing. Just design.
        </p>
        <form action="#" className="flex flex-col gap-4">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="text-base-900 placeholder:text-base-500 text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:placeholder:text-base-300 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 flex items-center"
          />
          <Button text="Remind" />
        </form>
      </div>
      <div className="py-10 px-4 md:p-10 border-r border-b border-base-900 flex flex-col gap-4 md:gap-6">
        <h2 className="text-base-500 font-medium text-lg md:text-xl">Contact Us</h2>
        <div className="flex flex-col gap-2">
          <h3 className="text-base-500 text-sm">Address</h3>
          <p className="text-sm font-medium md:text-base">Hälsingegatan 49, Stockholm</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base-500 text-sm">Phone</h3>
          <p className="text-sm font-medium md:text-base">+46 8 123 45 678</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base-500 text-sm">General Enquiry:</h3>
          <p className="text-sm font-medium md:text-base">hello@norrcollective.com</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-base-500 font-medium text-lg md:text-xl">Follow Us</h2>
          <IconLink />
        </div>
      </div>
      <div className="py-10 px-4 md:p-10 border-r border-b border-base-900 flex flex-col gap-4 md:gap-6">
        <h2 className="text-base-500 font-medium text-lg md:text-xl">Shop</h2>
        <div className="flex flex-col gap-2">
          {Products.map((cat, index) => (
            <Link
              key={index}
              href={`/shop${cat.href}`}
              className="text-sm font-medium md:text-base w-fit tracking-[2.5%] capitalize">
              {cat.category}
            </Link>
          ))}
        </div>
      </div>
      <div className="py-10 px-4 md:p-10 border-r border-b border-base-900 flex flex-col gap-4 md:gap-6">
        <h2 className="text-base-500 font-medium text-lg md:text-xl">About Us</h2>
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-sm font-medium md:text-base w-fit tracking-[2.5%]">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium md:text-base w-fit tracking-[2.5%]">
            Our story
          </Link>
          <Link href="#" className="text-sm font-medium md:text-base w-fit tracking-[2.5%]">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-2">
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
      </div>
    </footer>
  );
}
