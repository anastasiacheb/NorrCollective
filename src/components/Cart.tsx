'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/components/CartContext';

interface CartItemProps {
  src: string;
  name: string;
  quantity: number;
  price: number;
  onClick: () => void;
}

function CartItem({ src, name, quantity, price, onClick }: CartItemProps) {
  return (
    <div className="px-4 py-6 md:p-10 border-b border-base-900 flex flex-col gap-4 md:flex-row md:items-center">
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
      <div className="flex justify-between items-end md:items-center w-full">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium leading-snug capitalize">{name.toLowerCase()}</p>
          <p className="text-base">Quantity ({quantity})</p>
          <p className="text-lg font-medium leading-snug">${price}</p>
        </div>
        <button onClick={onClick} className="text-base-500 text-sm font-medium md:text-base">
          Remove
        </button>
      </div>
    </div>
  );
}

interface CartProps {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function Cart({ isCartOpen, setIsCartOpen }: CartProps) {
  const cart = useContext(CartContext);
  if (!cart) return null;
  const { cartProducts, setCartProducts } = cart;

  function handleRemove(name: string) {
    setCartProducts((prev) => prev.filter((item) => item.name !== name));
  }

  return (
    <div className="w-full h-full">
      <div
        onClick={() => {
          setIsCartOpen(false);
        }}
        className={`backdrop-blur-xs w-dvw h-full fixed top-0 ease-linear transition-opacity z-50 ${isCartOpen ? 'opacity-100 left-0' : 'opacity-0 -left-[150%]'}`}
        style={{
          transitionProperty: 'opacity, left',
          transitionDuration: '300ms, 0ms',
          transitionDelay: isCartOpen ? '0ms, 0ms' : '0ms, 300ms',
        }}></div>
      <div
        className={`bg-base-0 border border-base-900 flex flex-col fixed top-0 h-dvh w-full lg:w-1/2 z-50 ${isCartOpen ? 'right-0' : '-right-full'} transition-all ease-linear duration-300`}>
        <div className="px-6 py-3 border-b border-base-900 flex items-center justify-between md:px-10 md:py-4 lg:py-8.25">
          <p className="text-base font-medium leading-none md:leading-tight">Shopping Cart</p>
          <button
            onClick={() => {
              setIsCartOpen(false);
            }}>
            <img src="/icons/close_button.svg" alt="close" className="size-6" />
          </button>
        </div>
        <div className="overflow-y-auto mb-12 md:mb-14">
          {cartProducts.length > 0 ? (
            <>
              {cartProducts.map((cartProd, index) => (
                <CartItem
                  onClick={() => handleRemove(cartProd.name)}
                  key={index}
                  {...cartProd}
                  price={Number(cartProd.price)}
                />
              ))}
              <div className="px-4 py-6 md:p-10 border-b border-base-900 flex items-center justify-between">
                <p className="text-lg font-medium leading-snug">Subtotal</p>
                <p className="text-lg font-medium leading-snug md:text-xl">
                  ${cartProducts.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)}
                </p>
              </div>
            </>
          ) : (
            <div className="h-[calc(100vh-100px)] md:h-[calc(100vh-115px)] lg:h-[calc(100vh-150px)] flex items-center justify-center flex-col gap-2 overflow-hidden">
              <p className="text-lg font-medium leading-none md:leading-tight text-center ">Your Cart is empty</p>
              <Link
                onClick={() => {
                  setIsCartOpen(false);
                }}
                href="/shop"
                className="text-lg font-medium leading-none md:leading-tight border-b border-base-900">
                Shop Now
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/checkout"
          onClick={(e) => {
            if (cartProducts.length === 0) {
              e.preventDefault();
            } else {
              setIsCartOpen(false);
            }
          }}
          className={` transition-all ease-linear uppercase text-sm leading-none font-medium border  md:text-base h-12 md:h-14 flex items-center justify-center absolute bottom-0 w-full  ${cartProducts.length === 0 ? 'bg-base-300 border-base-300 text-base-500 cursor-not-allowed' : 'bg-base-900 text-base-0 hover:bg-base-700 hover:border-base-700 border-base-900'}`}>
          Check out
        </Link>
      </div>
    </div>
  );
}
