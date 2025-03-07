import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import PageTitle from '../../_components/shared/page-title'
import PageHeader from '../../_components/shared/page-header'
import CustomersForm from '../_components/customers-form'
import { Button } from '@/components/ui/button'
import { createCustomer } from '@/actions/customer-actions'

export const metadata = {
  title: 'StorefrontX - Customers - New',
}

export default async function Page() {
  return (
    <>
      <PageHeader>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/customers" className="text-xl">
            <MoveLeft size={24} color="#000000" />
          </Link>
          <PageTitle title="New customer" />
        </div>
      </PageHeader>

      <CustomersForm action={createCustomer}>
        <Button size="sm" type="submit">
          Save
        </Button>
      </CustomersForm>
    </>
  )
}
