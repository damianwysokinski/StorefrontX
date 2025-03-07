'use client'

import { Product } from '@/types/product'
import CartTableItem from './cart-table-item'
import { useCartStore } from '@/stores/cart-store'

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
