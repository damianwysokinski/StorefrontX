import { getProducts } from '@/lib/products'
import ProductsList from './_components/products/product-list'
import Section from './_components/shared/section'

export default async function Page() {
  const products = await getProducts()

  return (
    <Section>
      <ProductsList title="Featured products" products={products} />
    </Section>
  )
}
