'use client'

import { Product } from '@/types/product'
import { useCartStore } from '@/providers/cart-store-provider'
import CartTableItem from './CartTableItem'

export default function CartTable() {
  const { cartItems } = useCartStore((state) => state)

  return (
    <table>
      <thead className="border-b border-gray-200 text-left">
        <tr>
          <th className="py-2">Product</th>
          <th className="py-2"></th>
          <th className="py-2">Quantity</th>
          <th className="py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem: Product, index: number) => {
          return <CartTableItem key={index} {...cartItem} />
        })}
      </tbody>
    </table>
  )
}
