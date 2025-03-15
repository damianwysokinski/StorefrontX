import PageTitle from '../_components/shared/page-title'
import PageHeader from '../_components/shared/page-header'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getOrders } from '@/lib/api/orders'
import { OrdersTable } from './_components/orders-table'
import { ordersTableColumns } from '@/app/(admin)/dashboard/orders/_components/orders-table-columns'

export const metadata = {
  title: 'StorefrontX - Orders',
}

export default async function Page() {
  const orders = await getOrders()

  return (
    <>
      <PageHeader>
        <PageTitle title="Orders" />
        <Button size="sm" asChild>
          <Link href="/dashboard/orders/new">Create order</Link>
        </Button>
      </PageHeader>

      <OrdersTable columns={ordersTableColumns} data={orders} />
    </>
  )
}
