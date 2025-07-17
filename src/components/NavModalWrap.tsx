'use client';
import { Nav, Modal } from '@/components';
import { useState } from 'react';

export default function NavModalWrap() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Nav setIsModalOpen={setIsModalOpen} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
