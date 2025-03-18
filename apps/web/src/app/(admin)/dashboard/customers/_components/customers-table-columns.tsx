'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Customer } from '@/types/customer'
import { Order } from '@/types/order'
import Link from 'next/link'

export const customersTableColumns: ColumnDef<Customer>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => {
      const id: string = row.original.id!
      const email: string = row.getValue('email')
      return <Link href={`/dashboard/customers/${id}`}>{email}</Link>
    },
  },
  {
    accessorKey: 'customerName',
    header: 'Customer name',
    cell: ({ row }) => {
      const { firstName, lastName } = row.original
      return (
        <div>
          {firstName} {lastName}
        </div>
      )
    },
  },
  {
    accessorKey: 'orders',
    header: 'Orders',
    cell: ({ row }) => {
      const orders: Order[] = row.getValue('orders')
      return (
        <div>
          {orders.length} {orders.length === 1 ? 'order' : 'orders'}
        </div>
      )
    },
  },
]
