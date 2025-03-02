'use client'

import { useCartStore } from '@/providers/cart-store-provider'
import { Badge } from 'antd'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function HeaderCartLink() {
  const { totalItems } = useCartStore((state) => state)

  return (
    <Link href="/cart" className="flex">
      <Badge count={totalItems} size="small" offset={[0, 20]}>
        <ShoppingBag size={24} />
      </Badge>
    </Link>
  )
}
