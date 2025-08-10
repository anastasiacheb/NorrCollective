'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  appear?: boolean;
  scale?: boolean;
  className?: string;
}

export default function Animation({ children, appear, scale, className }: AnimationProps) {
  const initial = scale ? { scale: '120%' } : { y: '50px', opacity: 0 };
  const animateProps = scale ? { scale: '100%' } : { y: '0px', opacity: 100 };

  const animate = appear ? animateProps : undefined;
  const whileInView = appear ? undefined : animateProps;
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className={className}>
      {children}
    </motion.div>
  );
}
