'use client';
import Image from 'next/image';

interface CartItemProps {
  src: string;
  name: string;
  quantity: number;
  price: string;
}

function CartItem({ src, name, quantity, price }: CartItemProps) {
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
          <p className="text-lg font-medium leading-snug capitalize">{name}</p>
          <p className="text-base">Quantity ({quantity})</p>
          <p className="text-lg font-medium leading-snug">${price}</p>
        </div>
        <button className="text-base-500 text-sm font-medium md:text-base">Remove</button>
      </div>
    </div>
  );
}

interface CartProps {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function Cart({ isCartOpen, setIsCartOpen }: CartProps) {
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
        <div className="overflow-y-auto mb-12 md:mb-14 scrollbar-thumb-base-900 scrollbar-thin scrollbar-w-3">
          <div>
            <div className="px-4 py-6 md:p-10 border-b border-base-900 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="border border-base-900 size-40 flex items-center justify-center overflow-clip flex-none">
                <Image
                  src={`/images/DSC_2212.jpg`}
                  alt="chair"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover "
                />
              </div>
              <div className="flex justify-between items-end md:items-center w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-medium leading-snug capitalize">sdfsdfdf</p>
                  <p className="text-base">Quantity (1)</p>
                  <p className="text-lg font-medium leading-snug">$100</p>
                </div>
                <button className="text-base-500 text-sm font-medium md:text-base">Remove</button>
              </div>
            </div>
          </div>
          <div className="px-4 py-6 md:p-10 border-b border-base-900 flex items-center justify-between">
            <p className="text-lg font-medium leading-snug">Subtotal</p>
            <p className="text-lg font-medium leading-snug">$100</p>
          </div>
        </div>
        <button className="bg-base-900 text-base-0 hover:bg-base-700 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center absolute bottom-0 w-full">
          Check out
        </button>
      </div>
    </div>
  );
}
