'use client';
import { useState } from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  tel?: boolean;
  card?: boolean;
  cvv?: boolean;
  date?: boolean;
}

export default function Input({ type, name, placeholder, required, tel, card, cvv, date }: InputProps) {
  const [value, setValue] = useState('');

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '');

    let cleanDigits = digits;
    if (digits.startsWith('46')) {
      cleanDigits = digits.slice(2);
    }

    const part1 = cleanDigits.slice(0, 2);
    const part2 = cleanDigits.slice(2, 5);
    const part3 = cleanDigits.slice(5, 7);
    const part4 = cleanDigits.slice(7, 9);

    let phone = '+ 46 ';

    if (part1) phone += ' ' + part1;
    if (part2) phone += ' ' + part2;
    if (part3) phone += ' ' + part3;
    if (part4) phone += ' ' + part4;

    return phone;
  }

  function formatCard(value: string) {
    const digits = value.replace(/\D/g, '');

    const part1 = digits.slice(0, 4);
    const part2 = digits.slice(4, 8);
    const part3 = digits.slice(8, 12);
    const part4 = digits.slice(12, 16);

    let card = '';

    if (part1) card += part1;
    if (part2) card += ' ' + part2;
    if (part3) card += ' ' + part3;
    if (part4) card += ' ' + part4;

    return card;
  }

  function formatCvv(value: string) {
    const digits = value.replace(/\D/g, '');

    let cvv = '';

    cvv = digits.slice(0, 3);

    return cvv;
  }

  function formatDate(value: string) {
    const digits = value.replace(/\D/g, '');

    const part1 = digits.slice(0, 2);
    const part2 = digits.slice(2, 4);

    let date = '';

    if (part1) date += part1;
    if (part2) date += ' / ' + part2;

    return date;
  }

  function handleFocus() {
    if (value.length === 0) {
      setValue('+ 46 ');
    }
  }

  function handleBlur() {
    if (value.length === 0 || value === '+ 46 ') {
      setValue('');
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let input = e.target.value;

    if (tel) {
      input = formatPhone(input);
    }
    if (card) {
      input = formatCard(input);
    }
    if (cvv) {
      input = formatCvv(input);
    }
    if (date) {
      input = formatDate(input);
    }

    setValue(input);
  }

  return (
    <input
      required={required}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onFocus={tel ? handleFocus : undefined}
      onBlur={tel ? handleBlur : undefined}
      className="text-base-900 placeholder:text-base-500 text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:placeholder:text-base-300 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 flex items-center bg-base-0"
    />
  );
}
