'use client'

import { useSidebarStore } from '@/stores/sidebar-store'
import SidebarMenu from './SidebarMenu'

export default function Sidebar() {
  const { isMenuOpen } = useSidebarStore()

  return (
    <aside
      className={`w-[250px] h-full bg-white z-99 max-md:absolute transition-transform md:translate-x-0 ${isMenuOpen ? '' : '-translate-x-full'}`}
    >
      <SidebarMenu />
    </aside>
  )
}
