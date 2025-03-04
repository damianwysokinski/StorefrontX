'use client'

import CartTable from './cart-table'
import CartSummary from './cart-summary'
import CartEmpty from './cart-empty'
import { useCartStore } from '@/stores/cart-store'

export default function Cart() {
  const { cartItems } = useCartStore((state) => state)

  if (!cartItems.length) return <CartEmpty />

  return (
    <>
      <div className="grid lg:grid-cols-[1fr_350px] gap-4 items-start">
        <CartTable />
        <CartSummary />
      </div>
    </>
  )
}
