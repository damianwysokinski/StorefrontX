import { getCustomerById } from '@/lib/api/customers'
import PageHeader from '../../_components/shared/page-header'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import PageTitle from '../../_components/shared/page-title'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const customerId = (await params).id
  const customer = await getCustomerById(customerId)
  const { email } = customer

  return {
    title: `StorefrontX - Customers - ${email}`,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const customerId = (await params).id
  const customer = await getCustomerById(customerId)
  const { email } = customer

  return (
    <>
      <PageHeader>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/customers" className="text-xl">
            <MoveLeft size={24} color="#000000" />
          </Link>
          <PageTitle title={email} />
        </div>
      </PageHeader>
    </>
  )
}
