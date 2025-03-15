import { getProducts } from '@/lib/api/products'
import PageTitle from '../_components/shared/page-title'
import PageHeader from '../_components/shared/page-header'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductsTable } from './_components/products-table'
import { productsTableColumns } from './_components/products-table-columns'

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

      <ProductsTable columns={productsTableColumns} data={products} />
    </>
  )
}
