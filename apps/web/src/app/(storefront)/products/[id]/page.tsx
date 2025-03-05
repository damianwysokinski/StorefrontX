import ProductGallery from '../../_components/products/product-gallery'
import Tabs from '../../_components/shared/tabs'
import ProductReviews from '../../_components/products/product-reviews'
import Section from '../../_components/shared/section'
import ProductActions from '../../_components/products/product-actions'
import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/api/products'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const productId = (await params).id
  const product = await getProductById(productId)
  const { images, title, category, description, price, status, reviews } =
    product

  const tabItems = [
    {
      label: 'Description',
      children: description,
    },
    {
      label: 'Reviews',
      children: <ProductReviews reviews={reviews} />,
    },
  ]

  if (!product || status === 'draft') notFound()

  return (
    <>
      <Section>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Browse Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {category && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/products?category=${category}`}>
                    {category}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <ProductGallery images={images} />
          </div>
          <div>
            <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
            <div className="my-4 text-3xl font-bold">${price}</div>

            <Separator />

            <ProductActions product={product} />
          </div>
        </div>
      </Section>

      <Section>
        <Tabs items={tabItems} />
      </Section>
    </>
  )
}
