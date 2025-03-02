'use client'

import { useCartStore } from '@/providers/cart-store-provider'
import { Product } from '@/types/product'
import { ShoppingCart } from 'lucide-react'

interface AddToCartButtonProps {
  title?: string
  product: Product
  quantity: number
}

export default function AddToCartButton({
  title,
  product,
  quantity,
}: AddToCartButtonProps) {
  const { addToCart } = useCartStore((state) => state)

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product,
    quantity: number,
  ) => {
    e.preventDefault()

    try {
      addToCart(product, quantity)
    } catch (err) {
      console.error('Error adding product to cart:', err)
    }
  }

  return (
    <button
      className="cursor-pointer inline-flex items-center gap-2 font-medium bg-black hover:opacity-90 text-white px-2.5 h-[36px] rounded-md"
      onClick={(e) => handleAddToCart(e, product, quantity)}
    >
      <ShoppingCart size={16} />
      {title}
    </button>
  )
}
