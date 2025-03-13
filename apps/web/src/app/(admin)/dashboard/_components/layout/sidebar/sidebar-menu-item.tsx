import Link from 'next/link'

interface SidebarMenuItemProps {
  icon?: React.ReactElement
  url: string
  label: string
  isActive: boolean
}

export default function SidebarMenuItem({
  icon,
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
        {icon} {label}
      </Link>
    </li>
  )
}
