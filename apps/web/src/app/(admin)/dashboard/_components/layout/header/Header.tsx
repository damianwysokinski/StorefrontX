import Link from 'next/link'
import HeaderMenuButton from './HeaderMenuButton'

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
      </div>
    </header>
  )
}
