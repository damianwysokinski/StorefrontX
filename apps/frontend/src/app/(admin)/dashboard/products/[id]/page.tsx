import { getProductById } from '@/lib/products'
import Link from 'next/link'
import ProductForm from '../../_components/products/ProductForm'
import { removeProduct, updateProduct } from '@/actions/products'
import { MoveLeft } from 'lucide-react'
import PageTitle from '../../_components/shared/PageTitle'
import { Button } from '../../_components/shared/Button'
import PageHeader from '../../_components/shared/PageHeader'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const productId = (await params).id
  const product = await getProductById(productId)
  const { id, title } = product

  return (
    <>
      <PageHeader>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/products" className="text-xl">
            <MoveLeft size={24} color="#000000" />
          </Link>
          <PageTitle title={title} />
        </div>

        <a
          href={`/products/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-3 py-1.5 text-sm bg-stone-300"
        >
          Preview
        </a>
      </PageHeader>

      <ProductForm
        action={updateProduct.bind(null, productId)}
        product={product}
      >
        <Button
          type="button"
          variant="danger"
          onClick={removeProduct.bind(null, productId)}
        >
          Delete product
        </Button>
        <Button type="submit">Save</Button>
      </ProductForm>
    </>
  )
}
