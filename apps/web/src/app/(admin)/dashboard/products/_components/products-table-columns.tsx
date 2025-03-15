'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Product } from '@/types/product'
import { formatCurrency } from '@/lib/utils/format-currency'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'

export const productsTableColumns: ColumnDef<Product>[] = [
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
    accessorKey: 'title',
    header: 'Product',
    cell: ({ row }) => {
      const id: string = row.original.id!
      const title: string = row.getValue('title')
      return <Link href={`/dashboard/products/${id}`}>{title}</Link>
    },
  },
  {
    accessorKey: 'quantity',
    header: 'Inventory',
    cell: ({ row }) => {
      const quantity = parseInt(row.getValue('quantity'))
      return (
        <div className={`${quantity <= 0 ? 'text-red-900' : ''}`}>
          {quantity} in stock
        </div>
      )
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => {
      const category: string = row.getValue('category') || 'Uncategorized'
      return <div>{category}</div>
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'))
      const formatted = formatCurrency(amount)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: string = row.getValue('status')

      return (
        <Badge variant={status === 'active' ? 'green' : 'default'}>
          {status}
        </Badge>
      )
    },
  },
]
