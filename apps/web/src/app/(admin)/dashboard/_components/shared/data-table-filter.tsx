import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface FilterItems {
  name: string
  value: string | null
}

interface DataTableFilterProps {
  filterItems: FilterItems[]
  handleClick: (itemName: string | null) => void
}

export default function DataTableFilter({
  filterItems,
  handleClick,
}: DataTableFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  function handleFilterClick(value: string | null) {
    setActiveFilter(value)
    handleClick(value)
  }

  return (
    <div className="space-x-1">
      {filterItems.map(({ name, value }, index) => (
        <Button
          key={index}
          variant="ghost"
          className={activeFilter === value ? 'bg-accent' : undefined}
          size="sm"
          onClick={() => handleFilterClick(value)}
        >
          {name}
        </Button>
      ))}
    </div>
  )
}
