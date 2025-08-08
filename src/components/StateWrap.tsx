'use client';
import { Nav, Modal, Cart } from '@/components';
import { useState, useEffect } from 'react';
import { CartContext } from '@/components/CartContext';

interface Props {
  children: React.ReactNode;
}

interface CartProduct {
  src: string;
  name: string;
  quantity: number;
  price: string;
}

export default function StateWrap({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <CartContext value={{ cartProducts, setCartProducts }}>
      <Nav setIsModalOpen={setIsModalOpen} setIsCartOpen={setIsCartOpen} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {children}
    </CartContext>
  );
}
