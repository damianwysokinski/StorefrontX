'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { formatDate } from '@/lib/utils/format-date'
import { Order, OrderItem } from '@/types/order'
import { Customer } from '@/types/customer'
import { formatCurrency } from '@/lib/utils/format-currency'

export const ordersTableColumns: ColumnDef<Order>[] = [
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
    accessorKey: 'id',
    header: 'Order',
    cell: ({ row }) => {
      const id: string = row.getValue('id')
      return <Link href={`/dashboard/orders/${id}`}>{id}</Link>
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
    cell: ({ row }) => {
      const createdAt: string = row.getValue('createdAt')
      return <div>{formatDate(createdAt)}</div>
    },
  },
  {
    accessorKey: 'user',
    header: 'Customer',
    cell: ({ row }) => {
      const user: Customer = row.getValue('user')
      return <div>{user.email}</div>
    },
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row }) => {
      const total: number = row.getValue('total')
      return <div>{formatCurrency(total)}</div>
    },
  },
  {
    accessorKey: 'items',
    header: 'Items',
    cell: ({ row }) => {
      const items: OrderItem[] = row.getValue('items')

      return (
        <div>
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: string = row.getValue('status')
      return <div>{status}</div>
    },
  },
]
