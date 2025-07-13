import products from '@/data/Products';

export async function GET() {
  return Response.json(products);
}
