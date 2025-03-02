import { getActiveProducts } from '@/lib/products'
import ProductsList from './_components/products/ProductsList'
import Section from './_components/shared/Section'

export default async function Page() {
  const products = await getActiveProducts()

  return (
    <Section>
      <ProductsList title="Featured products" products={products} />
    </Section>
  )
}
