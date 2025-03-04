import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Product } from '@/types/product'
import Link from 'next/link'

interface ProductsTableProps {
  products: Product[]
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Card className="relative overflow-x-auto p-0">
      {products.length ? (
        <Table className="bg-white">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Inventory</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(
              ({ id, title, price, quantity, category, status }) => {
                return (
                  <TableRow key={id}>
                    <TableCell className="font-medium">
                      <Link href={`/dashboard/products/${id}`}>{title}</Link>
                    </TableCell>
                    <TableCell
                      className={`${quantity <= 0 ? 'text-red-900' : ''}`}
                    >
                      {quantity} in stock
                    </TableCell>
                    <TableCell>{category || 'Uncategorized'}</TableCell>
                    <TableCell>${price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={status === 'active' ? 'green' : 'default'}
                      >
                        {status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              },
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="h-48 grid text-center place-content-center place-items-center">
          <div className="mb-2 text-xl font-medium">Add your products</div>
          <Button size="sm" asChild>
            <Link href="/dashboard/products/new">Add product</Link>
          </Button>
        </div>
      )}
    </Card>
  )
}
