'use client';
import { useState } from 'react';

export default function RadioButton() {
  const [isSelected, setIsSelected] = useState('private');
  return (
    <>
      <label htmlFor="private" className="text-base leading-snug flex gap-3 items-center relative cursor-pointer">
        <input
          checked={isSelected === 'private'}
          onChange={() => setIsSelected('private')}
          type="radio"
          name="select"
          id="private"
          className="peer"
        />
        <span className="bg-base-300 rounded-full border border-base-900 size-6 flex items-center justify-center absolute"></span>
        <span className="bg-base-900 rounded-full size-3.5 transform transition-all scale-0 peer-checked:scale-100 absolute left-1.25 ease-linear duration-200"></span>
        <span className="ml-3">Private order</span>
      </label>
      <label htmlFor="curated" className="text-base leading-snug flex gap-3 items-center relative cursor-pointer">
        <input
          checked={isSelected === 'curated'}
          onChange={() => setIsSelected('curated')}
          type="radio"
          name="select"
          id="curated"
          className="peer"
        />
        <span className="bg-base-300 rounded-full border border-base-900 size-6 flex items-center justify-center absolute"></span>
        <span className="bg-base-900 rounded-full size-3.5 transform transition-all scale-0 peer-checked:scale-100 absolute left-1.25 ease-linear duration-200"></span>
        <span className="ml-3">Curated acquisition</span>
      </label>
    </>
  );
}
