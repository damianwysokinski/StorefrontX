'use client'

import { House, Package, Settings, Tags, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import SidebarMenuItem from './sidebar-menu-item'

export default function SidebarMenu() {
  const pathname = usePathname()
  const currentPath = pathname?.split('/')[2] || 'dashboard'

  const menuItems = [
    {
      key: 'dashboard',
      icon: House,
      url: '/',
      label: 'Overview',
    },
    {
      key: 'products',
      icon: Tags,
      url: 'products',
      label: 'Products',
    },
    {
      key: 'orders',
      icon: Package,
      url: 'orders',
      label: 'Orders',
    },
    {
      key: 'customers',
      icon: User,
      url: 'customers',
      label: 'Customers',
    },
    {
      key: 'settings',
      icon: Settings,
      url: 'settings',
      label: 'Settings',
    },
  ]

  return (
    <nav>
      <ul className="p-2 space-y-1">
        {menuItems.map(({ key, icon, url, label }) => {
          return (
            <SidebarMenuItem
              key={key}
              Icon={icon}
              url={url}
              label={label}
              isActive={currentPath === key}
            />
          )
        })}
      </ul>
    </nav>
  )
}
