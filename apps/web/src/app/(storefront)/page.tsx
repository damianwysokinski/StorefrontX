import { getProducts } from '@/lib/api/products'
import ProductsList from './_components/shared/product-list'
import Section from './_components/shared/section'

export default async function Page() {
  const products = await getProducts()

  return (
    <Section>
      <ProductsList title="Featured products" products={products} />
    </Section>
  )
}
