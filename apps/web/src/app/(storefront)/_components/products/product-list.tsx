import { Product } from '@/types/product'
import ProductCard from './product-card'

interface ProductsListProps {
  title?: string
  products: Product[]
}

export default function ProductsList({ title, products }: ProductsListProps) {
  return (
    <>
      {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product) => {
          if (product.status === 'draft') return

          return (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
