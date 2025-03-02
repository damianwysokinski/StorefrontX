import Link from 'next/link'
import ProductForm from '../../_components/products/ProductForm'
import { createProduct } from '@/actions/products'
import { MoveLeft } from 'lucide-react'
import PageTitle from '../../_components/shared/PageTitle'
import { Button } from '../../_components/shared/Button'
import PageHeader from '../../_components/shared/PageHeader'

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

      <ProductForm action={createProduct}>
        <Button type="submit">Save</Button>
      </ProductForm>
    </>
  )
}
