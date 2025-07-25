'use client';
import { Nav, Modal, Cart } from '@/components';
import { useState } from 'react';
import { CartContext } from '@/components/CartContext';

interface Props {
  children: React.ReactNode;
}

export default function StateWrap({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([
    { src: 'DSC_2212.jpg', name: 'Sdfsdfdf', quantity: 1, price: '100' },
  ]);

  return (
    <CartContext value={{ cartProducts, setCartProducts }}>
      <Nav setIsModalOpen={setIsModalOpen} setIsCartOpen={setIsCartOpen} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {children}
    </CartContext>
  );
}
