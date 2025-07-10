import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Nav, Footer } from '@/components';

const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
});

export const metadata: Metadata = {
  title: 'Norr Collective | Timeless Scandinavian Furniture',
  description:
    'Explore curated Scandinavian and mid-century furniture pieces. Norr Collective brings timeless design, craftsmanship, and minimalist beauty into your home.',
  keywords:
    'scandinavian furniture, mid-century furniture, modern home decor, minimalist furniture, nordic interior, timeless design, curated furniture, design collective',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} antialiased leading-tight`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
