import { getProducts } from '@/lib/products'
import ProductsTable from '../_components/products/ProductsTable'
import PageTitle from '../_components/shared/PageTitle'
import PageHeader from '../_components/shared/PageHeader'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'StorefrontX - Products',
}

export default async function Page() {
  const products = await getProducts()

  return (
    <>
      <PageHeader>
        <PageTitle title="Products" />
        <Button size="sm" asChild>
          <Link href="/dashboard/products/new">Add product</Link>
        </Button>
      </PageHeader>

      <ProductsTable products={products} />
    </>
  )
}
