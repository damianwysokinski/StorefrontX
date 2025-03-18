'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from '@tanstack/react-table'

import { Input } from '@/components/ui/input'
import { useState } from 'react'
import DataTable from '../../_components/shared/data-table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function CustomersTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      columnFilters,
    },
  })

  return (
    <DataTable
      tableHeader={
        <Input
          placeholder="Search customers"
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(e) =>
            table.getColumn('email')?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />
      }
      columns={columns}
      table={table}
    />
  )
}
