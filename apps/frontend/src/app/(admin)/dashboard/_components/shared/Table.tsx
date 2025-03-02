interface TableProps {
  dataSource?: string[]
  columns: string[]
}

export default function Table({ columns }: TableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-4 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}
