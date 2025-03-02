import ProductGallery from '../../_components/products/ProductGallery'
import Breadcrumb from '../../_components/shared/Breadcrumb'
import Tabs from '../../_components/shared/Tabs'
import ProductReviews from '../../_components/products/ProductReviews'
import Section from '../../_components/shared/Section'
import { Divider, Rate } from 'antd'
import ProductActions from '../../_components/products/ProductActions'
import { notFound } from 'next/navigation'
import { calculateReviewsAverage } from '@/lib/calculate-reviews-average'
import { getProductById } from '@/lib/products'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const productId = (await params).id
  const product = await getProductById(productId)
  const { images, title, category, description, price, available, reviews } =
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

  if (!available) notFound()

  return (
    <>
      <Section>
        <Breadcrumb
          separator=">"
          items={[
            {
              title: category,
              href: `/products?category=${category}`,
            },
            {
              title: title,
            },
          ]}
        />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <ProductGallery images={images} />
          </div>
          <div>
            <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
            <Rate allowHalf disabled value={calculateReviewsAverage(reviews)} />
            <div className="my-4 text-3xl font-bold">${price}</div>

            <Divider />

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
