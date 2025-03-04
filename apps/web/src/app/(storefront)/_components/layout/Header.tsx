import Link from 'next/link'
import HeaderCartLink from './HeaderCartLink'
import { User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="text-xl font-bold">
            StorefrontX
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl">
              <User size={24} />
            </Link>
            <HeaderCartLink />
          </div>
        </div>
      </nav>
    </header>
  )
}
