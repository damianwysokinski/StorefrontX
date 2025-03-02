'use client'

import { useSidebarStore } from '@/stores/sidebar-store'
import { AlignJustify } from 'lucide-react'

export default function HeaderMenuButton() {
  const { handleMenuOpen } = useSidebarStore()

  return (
    <button onClick={handleMenuOpen} className="text-white md:hidden">
      <AlignJustify />
    </button>
  )
}
