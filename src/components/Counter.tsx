'use client';
import { useState } from 'react';

export default function Counter() {
  const [counterValue, setCounterValue] = useState(1);

  function decreaseCounterValue() {
    if (counterValue > 1) {
      setCounterValue((prev) => prev - 1);
    } else {
      setCounterValue((prev) => prev);
    }
  }

  function increaseCounterValue() {
    if (counterValue < 5) {
      setCounterValue((prev) => prev + 1);
    } else {
      setCounterValue((prev) => prev);
    }
  }
  return (
    <div className="border-t border-r border-base-900 flex ">
      <button
        onClick={decreaseCounterValue}
        aria-label="decrease quantity"
        className="border-l border-b flex justify-center items-center size-11 flex-none">
        <img src="/icons/Vector1.svg" alt="minus" className="w-5 h-0.5" />
      </button>
      <p className="border-l border-b border-base-900 w-full md:w-16 flex justify-center items-center text-base">
        {counterValue}
      </p>
      <button
        onClick={increaseCounterValue}
        aria-label="increase quantity"
        className="border-l border-b flex justify-center items-center size-11 flex-none">
        <img src="/icons/Vector.svg" alt="minus" className="size-5" />
      </button>
    </div>
  );
}
