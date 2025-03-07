import PageTitle from '../_components/shared/page-title'
import PageHeader from '../_components/shared/page-header'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getCustomers } from '@/lib/api/customers'
import CustomersTable from './_components/customers-table'

export const metadata = {
  title: 'StorefrontX - Customers',
}

export default async function Page() {
  const customers = await getCustomers()

  return (
    <>
      <PageHeader>
        <PageTitle title="Customers" />
        <Button size="sm" asChild>
          <Link href="/dashboard/customers/new">Add customer</Link>
        </Button>
      </PageHeader>

      <CustomersTable customers={customers} />
    </>
  )
}
