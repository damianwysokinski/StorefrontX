'use client'

import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function HeaderCartLink() {
  return (
    <Link href="/cart" className="flex">
      <ShoppingBag size={24} />
    </Link>
  )
}
