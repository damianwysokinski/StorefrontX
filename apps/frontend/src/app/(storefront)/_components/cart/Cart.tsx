'use client'

import { useCartStore } from '@/providers/cart-store-provider'
import CartTable from './CartTable'
import CartSummary from './CartSummary'
import CartEmpty from './CartEmpty'

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
