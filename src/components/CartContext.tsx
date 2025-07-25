'use client';

import { createContext } from 'react';

interface CartProduct {
  src: string;
  name: string;
  quantity: number;
  price: string;
}

export const CartContext = createContext<{
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
} | null>(null);
