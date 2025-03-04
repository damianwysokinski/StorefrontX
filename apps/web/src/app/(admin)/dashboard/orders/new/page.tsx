import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import PageTitle from '../../_components/shared/page-title'
import PageHeader from '../../_components/shared/page-header'

export const metadata = {
  title: 'StorefrontX - Orders - New',
}

export default async function Page() {
  return (
    <>
      <PageHeader>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/orders" className="text-xl">
            <MoveLeft size={24} color="#000000" />
          </Link>
          <PageTitle title="Create order" />
        </div>
      </PageHeader>
    </>
  )
}
