import { Product } from '@/types/product'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import ProductsFormActions from '@/app/(admin)/dashboard/products/_components/products-form-actions'

interface ProductFormProps {
  action: (formData: FormData) => void
  product?: Product
  editing?: boolean
}

export default function ProductsForm({
  action,
  product = {
    id: '',
    title: '',
    handle: '',
    category: '',
    price: 0.0,
    quantity: 0,
    status: 'draft',
  },
  editing,
}: ProductFormProps) {
  return (
    <>
      <form action={action}>
        <div className="mb-4 grid lg:grid-cols-[1fr_300px] gap-4 items-start">
          <div className="space-y-4">
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={product.title}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="handle">Slug</Label>
                  <Input
                    id="handle"
                    type="text"
                    name="handle"
                    defaultValue={product.handle}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    defaultValue={product.description}
                  />
                </div>
                <div>
                  <Label htmlFor="images">Media</Label>
                  <Input
                    id="images"
                    type="file"
                    name="images"
                    accept="image/png, image/jpeg"
                    multiple
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    type="text"
                    name="category"
                    defaultValue={product.category}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    name="price"
                    step="any"
                    defaultValue={product.price}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    name="quantity"
                    step="any"
                    defaultValue={product.quantity}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="space-y-4">
              <div>
                <Label>Status</Label>
                <Select name="status" defaultValue={product.status}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <ProductsFormActions id={product.id} editing={editing} />
      </form>
    </>
  )
}
