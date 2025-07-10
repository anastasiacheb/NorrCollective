import Image from 'next/image';
import { Products } from '@/data';

type Product = {
  name: string;
  desctiption: string;
  href: string;
  category: string;
  src: string[];
  price: string;
};

const TestProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.desctiption}</p>
      <div className="flex">
        {product.src.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`${product.name} ${index + 1}`}
            style={{ width: '200px', marginBottom: '1rem' }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      {Products.map((item, index) => (
        <TestProductCard key={index} product={item} />
      ))}
    </div>
  );
}
