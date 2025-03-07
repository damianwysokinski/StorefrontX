import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import { Order } from '@/types/order'
import { formatDate } from '@/lib/utils/format-date'
import { Button } from '@/components/ui/button'

interface OrdersTableProps {
  orders: Order[]
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <Card className="relative overflow-x-auto p-4">
      <Table className="bg-white overflow-x-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Items</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(({ id, items, total, status, user, createdAt }) => {
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">
                  <Link href={`/dashboard/orders/${id}`}>{id}</Link>
                </TableCell>
                <TableCell className="font-medium">
                  {createdAt && formatDate(createdAt)}
                </TableCell>
                <TableCell className="font-medium">{user.email}</TableCell>
                <TableCell className="font-medium">${total}</TableCell>
                <TableCell className="font-medium">{status}</TableCell>
                <TableCell className="font-medium">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}
