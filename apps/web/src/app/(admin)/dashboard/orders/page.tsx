import PageTitle from '../_components/shared/PageTitle'
import PageHeader from '../_components/shared/PageHeader'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'StorefrontX - Orders',
}

export default async function Page() {
  return (
    <>
      <PageHeader>
        <PageTitle title="Orders" />
        <Button size="sm" asChild>
          <Link href="/dashboard/orders/new">Create order</Link>
        </Button>
      </PageHeader>
    </>
  )
}
