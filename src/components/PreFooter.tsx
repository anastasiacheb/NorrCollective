import Link from 'next/link';

export default function PreFooter() {
  return (
    <section className="px-4 py-10 md:p-20 border-x border-b border-base-900">
      <h2 className="text-[34px] font-semibold md:text-[50px] text-center mb-4">Discover Our Iconic Pieces</h2>
      <p className="text-center leading-snug mb-14 text-lg">
        Explore our collection of carefully selected furniture and add timeless character{' '}
        <br className="hidden md:block" /> to your interior. Click the button below to start shopping.
      </p>
      <Link
        href="/shop"
        className="bg-base-900 text-base-0 hover:bg-base-700 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center max-w-67 mx-auto">
        shop now
      </Link>
    </section>
  );
}
