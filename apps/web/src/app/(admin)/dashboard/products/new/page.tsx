import Link from 'next/link'
import ProductsForm from '../_components/products-form'
import { createProduct } from '@/actions/product-actions'
import { MoveLeft } from 'lucide-react'
import PageTitle from '../../_components/shared/page-title'
import PageHeader from '../../_components/shared/page-header'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'StorefrontX - Products - New',
}

export default async function Page() {
  return (
    <>
      <PageHeader>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/products" className="text-xl">
            <MoveLeft size={24} color="#000000" />
          </Link>
          <PageTitle title="Add product" />
        </div>
      </PageHeader>

      <ProductsForm action={createProduct}>
        <Button size="sm" type="submit">
          Save
        </Button>
      </ProductsForm>
    </>
  )
}
