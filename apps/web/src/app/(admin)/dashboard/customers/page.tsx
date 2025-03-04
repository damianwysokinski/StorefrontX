import PageTitle from '../_components/shared/PageTitle'
import PageHeader from '../_components/shared/PageHeader'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'StorefrontX - Customers',
}

export default async function Page() {
  return (
    <>
      <PageHeader>
        <PageTitle title="Customers" />
        <Button size="sm" asChild>
          <Link href="/dashboard/customers/new">Add customer</Link>
        </Button>
      </PageHeader>
    </>
  )
}
