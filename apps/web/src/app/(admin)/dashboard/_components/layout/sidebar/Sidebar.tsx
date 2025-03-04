'use client'

import { useSidebarStore } from '@/stores/sidebar-store'
import SidebarMenu from './sidebar-menu'

export default function Sidebar() {
  const { isMenuOpen } = useSidebarStore()

  return (
    <aside
      className={`w-[250px] h-[calc(100vh-60px)] bg-white border-r z-99 max-md:absolute transition-transform md:translate-x-0 ${isMenuOpen ? '' : '-translate-x-full'}`}
    >
      <SidebarMenu />
    </aside>
  )
}
