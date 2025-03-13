import Link from 'next/link'
import { LucideProps } from 'lucide-react'

interface SidebarMenuItemProps {
  Icon?: React.ComponentType<LucideProps>
  url: string
  label: string
  isActive: boolean
}

export default function SidebarMenuItem({
  Icon,
  url,
  label,
  isActive,
}: SidebarMenuItemProps) {
  return (
    <li>
      <Link
        href={`/dashboard/${url}`}
        className={`rounded-md hover:bg-stone-100 py-1.5 px-2 flex items-center gap-2 text-sm ${isActive && 'bg-stone-100'}`}
      >
        {Icon && <Icon size={16} />}
        {label}
      </Link>
    </li>
  )
}
