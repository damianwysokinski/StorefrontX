'use client'

import { useState } from 'react'
import ButtonAddToCart from '../../_components/shared/button-add-to-cart'
import QuantityInput from '../../_components/shared/quantity-input'
import { Product } from '@/types/product'

interface ProductActionsProps {
  product: Product
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return

    setQuantity(newQuantity)
  }

  return (
    <div className="flex items-center gap-4">
      <QuantityInput
        id={product.id}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <ButtonAddToCart
        title="Add to cart"
        product={product}
        quantity={quantity}
      />
    </div>
  )
}
