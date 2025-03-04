'use client'

import { House, Package, Tags, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarMenuItemProps {
  icon?: React.ReactElement
  url: string
  label: string
  isActive: boolean
}

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
  ]

  return (
    <nav>
      <ul className="p-2 space-y-1">
        {menuItems.map(({ key, icon, url, label }) => (
          <li key={key}>
            <SidebarMenuItem
              icon={icon}
              url={url}
              label={label}
              isActive={currentPath === key}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

function SidebarMenuItem({ icon, url, label, isActive }: SidebarMenuItemProps) {
  return (
    <Link
      href={`/dashboard/${url}`}
      className={`rounded-md hover:bg-stone-200 py-1.5 px-2 flex items-center gap-2 text-sm ${isActive ? 'bg-stone-200' : ''}`}
    >
      {icon} {label}
    </Link>
  )
}
