import { Button } from '@/components/ui/button'
import { removeProduct } from '@/actions/product-actions'

interface ProductsFormActionsProps {
  id: string
  editing?: boolean
}

export default function ProductsFormActions({
  id,
  editing,
}: ProductsFormActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      {editing && (
        <Button
          size="sm"
          type="button"
          variant="destructive"
          onClick={removeProduct.bind(null, id)}
        >
          Delete product
        </Button>
      )}
      <Button size="sm" type="submit">
        Save
      </Button>
    </div>
  )
}
