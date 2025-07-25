'use client';

interface CounterProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function Counter({ quantity, setQuantity }: CounterProps) {
  function decreaseCounterValue() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev);
    }
  }

  function increaseCounterValue() {
    if (quantity < 5) {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev);
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
        {quantity}
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
