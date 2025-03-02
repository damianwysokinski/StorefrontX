'use client'

import { Tag } from 'antd'
import Link from 'next/link'
import { Product } from '@/types/product'

const STATUS_TAGS = {
  active: { color: 'green', label: 'Active' },
  draft: { color: 'blue', label: 'Draft' },
} as const

interface ProductsTableProps {
  products: Product[]
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3">
              Product
            </th>
            <th scope="col" className="px-4 py-3">
              Price
            </th>
            <th scope="col" className="px-4 py-3">
              Quantity
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, title, price, quantity, available }) => {
            const status = available ? STATUS_TAGS.active : STATUS_TAGS.draft

            return (
              <tr key={id} className="bg-white border-b border-gray-200">
                <th
                  scope="row"
                  className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  <Link href={`/dashboard/products/${id}`}>{title}</Link>
                </th>
                <td className="px-4 py-2">${price.toFixed(2)}</td>
                <td className="px-4 py-2">{quantity}</td>
                <td className="px-4 py-2">
                  <Tag color={status.color} style={{ borderRadius: '10px' }}>
                    {status.label}
                  </Tag>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
