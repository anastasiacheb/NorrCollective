'use client';
import { useContext, useState, useRef, useLayoutEffect } from 'react';
import { CartContext } from '@/components/CartContext';
import { Button, Input, DatePicker, TimeSelect } from '@/components';
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
          <p className="text-lg font-medium leading-snug capitalize">{name.toLowerCase()}</p>
          <p className="text-base">Quantity ({quantity})</p>
        </div>
        <p className="text-lg font-medium leading-snug">${price}</p>
      </div>
    </div>
  );
}

interface BreadCrumpProps {
  text: string;
  step: number;
  activeStep: number;
}

function BreadCrump({ text, step, activeStep }: BreadCrumpProps) {
  return (
    <div className="flex gap-2 items-center">
      <p
        className={`text-xs font-medium uppercase md:text-sm transition-color ease-linear duration-200 ${activeStep === step ? 'text-base-900' : 'text-base-500'}`}>
        {text}
      </p>
      <svg
        className={`transition-color ease-linear duration-200 ${activeStep === step ? 'text-base-900' : 'text-base-500'}`}
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L1 0L5 4L6 5L5 6L1 10L0 9L4 5" fill="currentColor" />
      </svg>
    </div>
  );
}

interface CheckoutStepProps {
  step: number;
  title: string;
  beforeSlot?: React.ReactNode;
  afterSlot: React.ReactNode;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

function CheckoutStep({ step, title, beforeSlot, afterSlot, activeStep, setActiveStep }: CheckoutStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const [measuredHeight, setMeasuredHeight] = useState('0px');

  useLayoutEffect(() => {
    if (stepRef.current && activeStep === step) {
      setMeasuredHeight(`${stepRef.current.scrollHeight}px`);
    }
  }, [activeStep, step]);

  return (
    <div
      className={`pb-6 border-b transition-color ease-linear duration-200 ${activeStep > step ? 'border-base-900' : 'border-base-300'}`}>
      {beforeSlot && (
        <div
          ref={logRef}
          style={{ maxHeight: activeStep === step ? logRef.current?.scrollHeight + 'px' : '0px' }}
          className={`overflow-hidden transition-all ease-linear duration-300 ${activeStep === step ? 'max-h-none' : 'max-h-0'}`}>
          {beforeSlot}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <img
            src="/icons/check_FILL0_wght300_GRAD0_opsz24.svg"
            alt="check"
            className={`size-6 transition-color ease-linear duration-200 ${activeStep > step ? 'block' : 'hidden'}`}
          />
          <h2
            className={`text-lg font-medium leading-snug transition-color ease-linear duration-200 ${activeStep < step ? 'text-base-300' : 'text-base-900'}`}>
            <span>{step} </span>
            {title}
          </h2>
        </div>
        <button onClick={() => setActiveStep(step)}>
          <img
            src="/icons/edit_square.svg"
            alt="check"
            className={`size-6 transition-color ease-linear duration-200 ${activeStep > step ? 'block' : 'hidden'}`}
          />
        </button>
      </div>
      {afterSlot && (
        <div
          ref={stepRef}
          // style={{ maxHeight: activeStep === step ? stepRef.current?.scrollHeight + 'px' : '0px' }}
          style={{
            maxHeight: activeStep === step ? measuredHeight : '0px',
          }}
          className={`flex flex-col overflow-hidden transition-all ease-linear duration-300 ${activeStep === step ? 'max-h-none' : 'max-h-0'}`}>
          {afterSlot}
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const [infoIsOpen, setInfoIsOpen] = useState(true);
  const info = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(1);

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
            <p className="text-lg font-medium leading-snug lg:uppercase lg:text-sm lg:leading-tight lg:cursor-auto">
              <span className="lg:hidden">Show </span> order summary
            </p>
            <img src="/icons/Cheveron25.svg" alt="cart icon" className="size-6 lg:hidden" />
          </button>
          <p className={`${infoIsOpen && 'hidden'} text-lg font-medium leading-snug md:text-xl lg:hidden`}>
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
                    required
                    type="tel"
                    name="giftcard"
                    id="giftcard"
                    placeholder="Gift card"
                    className="text-base-900 placeholder:text-base-500 text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:placeholder:text-base-300 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 flex items-center bg-base-0"
                  />
                  <Button text="Apply" />
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
      <div className="lg:order-1 border-b border-l border-base-900 py-10 px-4 md:px-20 flex flex-col gap-8 md:gap-10 lg:sticky lg:top-23 self-start lg:h-[calc(100dvh-92px)]">
        <div className="flex gap-3">
          <BreadCrump step={1} text="Information" activeStep={activeStep} />
          <BreadCrump step={2} text="Shipping" activeStep={activeStep} />
          <BreadCrump step={3} text="Payment" activeStep={activeStep} />
        </div>
        <CheckoutStep
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          step={1}
          title="Contact information"
          beforeSlot={
            <div className="bg-base-300 px-4 py-6 md:p-10 text-base leading-snug mb-6">
              Already have an account? <button className="underline underline-offset-4">Log in</button> for faster
              checkout
            </div>
          }
          afterSlot={
            <>
              <div className="py-4 flex flex-col gap-3">
                <Input type="text" name="name" placeholder="Your Name" />
                <Input type="email" name="email" placeholder="Your Email" />
                <Input type="tel" name="phone" placeholder="Your Phone number *" />
              </div>
              <Button onClick={() => setActiveStep(activeStep + 1)} text="Continue to shipping" />
            </>
          }
        />
        <CheckoutStep
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          step={2}
          title="Shipping details"
          afterSlot={
            <>
              <div className="py-4 flex flex-col gap-3">
                <Input type="text" name="name2" placeholder="Recipient Name" />
                <Input type="tel" name="phone2" placeholder="Recipient Phone number *" />
                <DatePicker />
                <TimeSelect />
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
                  <Input type="text" name="street" placeholder="Street" />
                  <Input type="text" name="apartment" placeholder="Apartment Number" />
                </div>
              </div>
              <Button onClick={() => setActiveStep(activeStep + 1)} text="Continue to Payment" />
            </>
          }
        />
        <CheckoutStep
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          step={3}
          title="Payment"
          afterSlot={
            <>
              <div className="py-4 flex flex-col gap-3">
                <p className="font-medium text-base">Pay by card. Your payment is secure.</p>
                <Input type="tel" name="cardnum" placeholder="Card Number" />
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
                  <Input type="tel" name="carddate" placeholder="MM / YY" />
                  <Input type="tel" name="cardcvv" placeholder="CVV Code" />
                </div>
              </div>
              <Button text="make a purchase" />
              <div className="pt-4 flex flex-col gap-3">
                <p className="font-medium text-base">Or pay using:</p>
                <button className="bg-base-0 text-base-900 hover:bg-base-900 hover:text-base-0 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center gap-1">
                  <img src="/icons/Google.svg" alt="google icon" className="size-6" />
                  Google Pay
                </button>
                <button className="bg-base-0 text-base-900 hover:bg-base-900 hover:text-base-0 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center gap-1 group">
                  <div className="relative">
                    <img src="/icons/Apple.svg" alt="apple icon" className="size-6" />
                    <img
                      src="/icons/Apple2.svg"
                      alt="apple icon"
                      className="size-6 absolute top-0 opacity-0 group-hover:opacity-100 transition-all ease-linear"
                    />
                  </div>
                  Apple Pay
                </button>
              </div>
            </>
          }
        />
      </div>
    </section>
  );
}
