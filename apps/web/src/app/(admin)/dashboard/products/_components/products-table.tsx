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
import DataTableFilter from '../../_components/shared/data-table-filter'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function ProductsTable<TData, TValue>({
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

  const filterByStatus = (status: string | null) => {
    setColumnFilters(() => (status ? [{ id: 'status', value: status }] : []))
  }

  return (
    <DataTable
      tableHeader={
        <>
          <DataTableFilter
            filterItems={[
              { name: 'All', value: null },
              { name: 'Draft', value: 'draft' },
              { name: 'Active', value: 'active' },
            ]}
            handleClick={filterByStatus}
          />

          <Input
            placeholder="Searching all products"
            value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
            onChange={(e) =>
              table.getColumn('title')?.setFilterValue(e.target.value)
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
