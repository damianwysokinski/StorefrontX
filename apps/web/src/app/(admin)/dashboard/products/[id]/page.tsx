import { getProductById } from '@/lib/products'
import Link from 'next/link'
import ProductForm from '../../_components/products/ProductForm'
import { removeProduct, updateProduct } from '@/actions/product-actions'
import { MoveLeft } from 'lucide-react'
import PageTitle from '../../_components/shared/PageTitle'
import PageHeader from '../../_components/shared/PageHeader'
import { Button } from '@/components/ui/button'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const productId = (await params).id
  const product = await getProductById(productId)
  const { title } = product

  return {
    title: `StorefrontX - Products - ${title}`,
  }
}

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

        <Button size="sm" variant="secondary" asChild>
          <a href={`/products/${id}`} target="_blank" rel="noreferrer">
            Preview
          </a>
        </Button>
      </PageHeader>

      <ProductForm
        action={updateProduct.bind(null, productId)}
        product={product}
      >
        <Button
          size="sm"
          type="button"
          variant="destructive"
          onClick={removeProduct.bind(null, productId)}
        >
          Delete product
        </Button>
        <Button size="sm" type="submit">
          Save
        </Button>
      </ProductForm>
    </>
  )
}
