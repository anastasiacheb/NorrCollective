'use client';
import Link from 'next/link';
import { Slider, Counter, RadioButton } from '@/components';
import { useContext, useEffect, useState } from 'react';
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
  const [toastIsVisible, setToastIsVisible] = useState(false);
  const [firstAdd, setFirstAdd] = useState(true);

  const cart = useContext(CartContext);

  useEffect(() => {
    if (toastIsVisible) {
      const timer = setTimeout(() => {
        setToastIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [toastIsVisible, setToastIsVisible]);

  if (!cart) return null;
  const { cartProducts, setCartProducts } = cart;

  function handleAdd() {
    setToastIsVisible(true);
    if (cartProducts.find((item) => item.name === prod.name)) {
      setFirstAdd(false);
    } else {
      setCartProducts([...cartProducts, { src: prod.src[0], name: prod.name, quantity: quantity, price: prod.price }]);
      setFirstAdd(true);
    }
  }

  return (
    <>
      <div
        className={`text-base-0 bg-base-900 flex p-4 gap-1 items-center w-fit fixed lg:absolute top-16 md:top-17 left-1/2 -translate-x-1/2 z-50 lg:right-10 lg:translate-0 lg:bottom-30 lg:top-auto lg:left-auto ${toastIsVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-linear`}>
        <img
          src={`/icons/${firstAdd ? 'Correct.svg' : 'error-warning.svg'}`}
          alt={`${firstAdd ? 'success' : 'error'} icon`}
          className="size-4"
        />
        <p className="whitespace-nowrap">{firstAdd ? 'Added to cart' : 'Already added to cart'}</p>
      </div>
      <section className="mt-12.5 md:mt-14.5 lg:mt-23 border-r border-base-900 lg:grid lg:grid-cols-2 lg:h-[calc(100svh-92px)]">
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
    </>
  );
}
