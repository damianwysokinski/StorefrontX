import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Customer } from "@/types/customer"
import Link from "next/link"

interface CustomersTableProps {
  customers: Customer[]
}

export default function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <Card className="relative overflow-x-auto p-0">
      {customers.length ? (
        <Table className="bg-white">
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Customer name</TableHead>
              <TableHead>Orders</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map(
              ({ id, firstName, lastName, email }) => {
                return (
                  <TableRow key={id}>
                    <TableCell className="font-medium">
                      <Link href={`/dashboard/customers/${id}`}>{email}</Link>
                    </TableCell>
                    <TableCell className="font-medium">
                      {firstName} {lastName}
                    </TableCell>
                    <TableCell className="font-medium">
                      0 orders
                    </TableCell>
                  </TableRow>
                )
              },
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="h-48 grid text-center place-content-center place-items-center">
        </div>
      )}
    </Card>
  )
}