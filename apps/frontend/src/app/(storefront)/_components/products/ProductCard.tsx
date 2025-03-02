import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import AddToCartButton from '../shared/AddToCartButton'

export default function ProductCard(product: Product) {
  const { id, images, title, price } = product

  return (
    <div>
      <Link href={`/products/${id}`}>
        <Image
          className="mb-2 object-cover w-full h-[268px] rounded-md"
          src={images?.[0]?.url ?? '/images/placeholder-image.jpg'}
          alt={title}
          width={200}
          height={200}
          priority
        />
        <div className="flex justify-between items-start gap-2">
          <h3>{title}</h3>
          <AddToCartButton product={product} quantity={1} />
        </div>
      </Link>
      <div>${price}</div>
    </div>
  )
}
