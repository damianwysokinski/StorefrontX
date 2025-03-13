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
      icon: <House size={16} />,
      url: '/',
      label: 'Overview',
    },
    {
      key: 'products',
      icon: <Tags size={16} />,
      url: 'products',
      label: 'Products',
    },
    {
      key: 'orders',
      icon: <Package size={16} />,
      url: 'orders',
      label: 'Orders',
    },
    {
      key: 'customers',
      icon: <User size={16} />,
      url: 'customers',
      label: 'Customers',
    },
    {
      key: 'settings',
      icon: <Settings size={16} />,
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
              icon={icon}
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
