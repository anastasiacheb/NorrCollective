'use client';
import Link from 'next/link';
import { Button } from '@/components';
import { RemoveScroll } from 'react-remove-scroll';

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export default function Modal({ isModalOpen, setIsModalOpen }: ModalProps) {
  if (!isModalOpen) return null;

  return (
    <RemoveScroll>
      <div
        onClick={() => {
          setIsModalOpen(false);
        }}
        className={`backdrop-blur-xs w-dvw h-full fixed top-0 ease-linear transition-opacity z-50 ${isModalOpen ? 'opacity-100 left-0' : 'opacity-0 -left-[150%]'}`}
        style={{
          transitionProperty: 'opacity, left',
          transitionDuration: '300ms, 0ms',
          transitionDelay: isModalOpen ? '0ms, 0ms' : '0ms, 300ms',
        }}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-base-0 px-4 py-10 md:p-20 border border-base-900 h-dvh lg:h-[calc(100dvh-92px)] absolute top-0 lg:top-23 lg:max-w-180 w-full lg:left-1/2 lg:-translate-x-1/2 flex flex-col justify-between">
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            aria-label="close modal"
            className="absolute top-3 right-3 md:top-4 md:right-4">
            <img src="/icons/close_button.svg" alt="close icon" className="size-8" />
          </button>
          <div>
            <h2 className="text-[34px] font-medium md:text-[50px] mb-6">
              Greetings! <br className="md:hidden" />
              Welcome to curated design space.
            </h2>
            <p className="text-base font-medium mb-3">Use your mobile number to sign up or log in</p>
            <form action="#" className="flex flex-col gap-4 mb-6">
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+46 8 XXX XX XXX"
                className="text-base-900 placeholder:text-base-500 text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:placeholder:text-base-300 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 flex items-center"
              />
              <Button text="continue" />
            </form>
            <div className="relative mb-6">
              <span
                className="block w-full 
            h-1 absolute left-0 top-1/2 border-t border-base-300 z-0"></span>
              <p className="text-base-300 text-base font-medium text-center px-3 w-fit bg-base-0 z-50 mx-auto relative">
                or
              </p>
            </div>
            <p className="text-base font-medium mb-3">Instantly login or sign up via Google</p>
            <div className="flex flex-col gap-4 ">
              <button className="bg-base-0 text-base-900 hover:bg-base-900 hover:text-base-0 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center gap-1">
                <img src="/icons/Google.svg" alt="google icon" className="size-6" />
                continue with google
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
                continue with apple
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row justify-center items-center">
            <Link href="#" className="font-medium text-sm underline underline-offset-3">
              Privacy Policy
            </Link>
            <span className="w-0.5 h-5 border-l border-base-900 hidden md:block"></span>
            <Link href="#" className="font-medium text-sm underline underline-offset-3">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
}
