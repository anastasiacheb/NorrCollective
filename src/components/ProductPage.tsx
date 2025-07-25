'use client';
import Link from 'next/link';
import { Slider, Counter, RadioButton } from '@/components';
import { useContext, useState } from 'react';
import { CartContext } from '@/components/CartContext';

interface Product {
  name: string;
  price: string;
  description: string;
  src: string[];
}

interface Category {
  category: string;
  href: string;
  src1: string;
  products: Product[];
}

interface Props {
  prod: Product;
  cat: Category;
}

export default function ProductPage({ prod, cat }: Props) {
  const [quantity, setQuantity] = useState(1);

  const cart = useContext(CartContext);
  if (!cart) return null;
  const { cartProducts, setCartProducts } = cart;

  function handleAdd() {
    if (cartProducts.find((item) => item.name === prod.name)) {
      alert('Already added to cart');
    } else {
      setCartProducts([...cartProducts, { src: prod.src[0], name: prod.name, quantity: quantity, price: prod.price }]);
    }
  }

  return (
    <section className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-2 lg:h-[calc(100dvh-92px)]">
      <Slider Images={prod.src} />
      <div className="border-l border-b border-base-900 px-4 py-10 md:p-10 flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <div className="uppercase text-xs md:text-sm font-medium">
            <Link href={`/shop${cat.href}`}>{cat.category}</Link> / <span className="text-base-500">{prod.name}</span>
          </div>
          <div>
            <h1 className="capitalize font-medium text-[26px] md:text-[38px] mb-4">
              {prod.name.toLowerCase()} - ${prod.price}
            </h1>
            <p className="leading-snug">{prod.description}</p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-4 md:items-center">
            <h2 className="font-medium text-lg leading-snug">Quantity</h2>
            <Counter quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-lg leading-snug">Purchase type</h2>
            <RadioButton />
          </div>
          <button
            onClick={handleAdd}
            className="bg-base-900 text-base-0 hover:bg-base-700 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center">
            Add to basket
          </button>
        </div>
      </div>
    </section>
  );
}
