import { getProducts } from '@/lib/api/products'
import Section from '../_components/shared/section'
import ProductsList from '../_components/shared/product-list'

export default async function Page() {
  const products = await getProducts()

  return (
    <>
      <Section>
        <h1 className="text-2xl font-bold">Products</h1>
      </Section>
      <Section>
        <ProductsList products={products} />
      </Section>
    </>
  )
}
