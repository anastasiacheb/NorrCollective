'use client';
import { Nav, Modal, Cart } from '@/components';
import { useState } from 'react';

export default function NavModalWrap() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Nav setIsModalOpen={setIsModalOpen} setIsCartOpen={setIsCartOpen} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}
