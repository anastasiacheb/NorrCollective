'use client';
import { useContext, useState, useRef } from 'react';
import { CartContext } from '@/components/CartContext';
import Image from 'next/image';

interface CheckoutItemProps {
  src: string;
  name: string;
  quantity: number;
  price: number;
}

function CheckoutItem({ src, name, quantity, price }: CheckoutItemProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="border border-base-900 size-40 flex items-center justify-center overflow-clip flex-none">
        <Image
          src={`/images/${src}`}
          alt="chair"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover "
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium leading-snug capitalize">{name}</p>
          <p className="text-base">Quantity ({quantity})</p>
        </div>
        <p className="text-lg font-medium leading-snug">${price}</p>
      </div>
    </div>
  );
}

export default function Page() {
  const [infoIsOpen, setInfoIsOpen] = useState(true);
  const info = useRef(null);

  const cart = useContext(CartContext);
  if (!cart) return null;
  const { cartProducts } = cart;

  return (
    <section className="border-r border-base-900 lg:grid lg:grid-cols-2 mt-12.5 md:mt-14.5 lg:mt-23">
      <div className="bg-base-100 px-4 py-6 border-b border-l border-base-900 md:px-20 md:py-10 lg:order-2 lg:min-h-[calc(100dvh-92px)] flex flex-col">
        <div onClick={() => setInfoIsOpen(!infoIsOpen)} className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <img
              src="/icons/shopping_cart_FILL0_wght300_GRAD0_opsz24.svg"
              alt="cart icon"
              className="size-6 lg:hidden"
            />
            <p className="text-lg font-medium leading-snug lg:uppercase lg:text-sm lg:leading-tight">
              <span className="lg:hidden">Show </span> order summary
            </p>
            <img src="/icons/Cheveron25.svg" alt="cart icon" className="size-6 lg:hidden" />
          </button>
          <p className="text-lg font-medium leading-snug md:text-xl">
            ${cartProducts.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)}
          </p>
        </div>
        <div
          ref={info}
          style={
            infoIsOpen || window.innerWidth >= 1024
              ? { maxHeight: info.current?.scrollHeight + 'px' }
              : { maxHeight: '0px' }
          }
          className={`${infoIsOpen ? 'max-h-none' : 'max-h-0'} overflow-hidden transition-all ease-linear duration-300 lg:max-h-none flex flex-col gap-16 justify-between lg:flex-auto`}>
          <div className="pt-6 lg:pt-10 lg:h-full">
            <div>
              <div className="border-b border-base-300 pb-6 flex flex-col gap-6">
                {cartProducts.map((cartProd, index) => (
                  <CheckoutItem key={index} {...cartProd} price={Number(cartProd.price)} />
                ))}
              </div>
              <div className="py-6 border-b border-base-300">
                <p className="text-base pb-4">If you have our gift card, enter the code to get discounts</p>
                <form action="#" className="flex flex-col gap-4 md:grid md:grid-cols-2">
                  <input
                    type="tel"
                    name="giftcard"
                    id="giftcard"
                    placeholder="Gift card"
                    className="text-base-900 placeholder:text-base-500 text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:placeholder:text-base-300 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 flex items-center bg-base-0"
                  />
                  <button
                    type="submit"
                    className="bg-base-900 text-base-0 hover:bg-base-700 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center">
                    Apply
                  </button>
                </form>
              </div>
              <div className="py-6 border-b border-base-300">
                <div className="flex items-center justify-between">
                  <p className="text-base">Subtotal</p>
                  <p className="text-base">
                    ${cartProducts.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6">
                  <p className="text-base">Shipping</p>
                  <p className="text-base text-base-500">Calculated at next step</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full pt-6">
                <p className="text-lg font-medium">Total</p>
                <p className="text-lg font-medium md:font-xl">
                  ${cartProducts.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-1 lg:h-full justify-center">
            <p className="text-sm">Secure Checkout</p>
            <img src="/icons/lock_FILL0_wght300_GRAD0_opsz24.svg" alt="cart icon" className="size-6" />
          </div>
        </div>
      </div>
      <div className="lg:order-1 border-b border-r border-base-900 py-10 px-4 md:px-20"></div>
    </section>
  );
}
