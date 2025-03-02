import { getProducts } from '@/lib/products'
import ProductsTable from '../_components/products/ProductsTable'
import PageTitle from '../_components/shared/PageTitle'
import { ButtonLink } from '../_components/shared/Button'
import PageHeader from '../_components/shared/PageHeader'

export default async function Page() {
  const products = await getProducts()

  return (
    <>
      <PageHeader>
        <PageTitle title="Products" />
        <ButtonLink href="/dashboard/products/new">Add product</ButtonLink>
      </PageHeader>

      <ProductsTable products={products} />
    </>
  )
}
