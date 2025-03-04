import Link from 'next/link'
import HeaderMenuButton from './header-menu-button'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="p-4 bg-stone-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HeaderMenuButton />
          <Link href="/dashboard">
            <span className="text-white font-bold text-lg">StorefrontX</span>
          </Link>
        </div>

        <Button size="sm" variant="outline" asChild>
          <a href="/" target="_blank" rel="noreferrer">
            View Shop
          </a>
        </Button>
      </div>
    </header>
  )
}
