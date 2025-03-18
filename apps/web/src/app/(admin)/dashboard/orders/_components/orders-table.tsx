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

export function OrdersTable<TData, TValue>({
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
        <>
          <div></div>
          <Input
            placeholder="Searching all orders"
            value={(table.getColumn('id')?.getFilterValue() as string) ?? ''}
            onChange={(e) =>
              table.getColumn('id')?.setFilterValue(e.target.value)
            }
            className="max-w-sm"
          />
        </>
      }
      columns={columns}
      table={table}
    />
  )
}
