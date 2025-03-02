import { Product } from '@/types/product'
import Card from '../shared/Card'
import Label from '../shared/Label'
import Input from '../shared/Input'
import Textarea from '../shared/Textarea'
import { generateSlug } from '@/lib/generate-slug'

interface ProductFormProps {
  action: (formData: FormData) => void
  product?: Product
  children: React.ReactNode
}

export default function ProductForm({
  action,
  product,
  children,
}: ProductFormProps) {
  return (
    <>
      <form action={action}>
        <div className="mb-4 grid lg:grid-cols-[1fr_300px] gap-4 items-start">
          <div className="space-y-4">
            <Card>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  defaultValue={product?.title}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  type="text"
                  name="slug"
                  defaultValue={product?.slug}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={product?.description}
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
                  defaultValue={product?.category}
                />
              </div>
            </Card>

            <Card>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                name="price"
                step="any"
                defaultValue={product?.price ?? 0.0}
                required
              />
            </Card>
          </div>

          <Card>
            <Label htmlFor="status">Status</Label>
            <select
              name="available"
              id="status"
              defaultValue={product?.available.toString()}
              className="p-2 border border-gray-300 rounded-lg w-full"
            >
              <option value="true">Active</option>
              <option value="false">Draft</option>
            </select>
          </Card>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="flex items-center justify-end gap-2">{children}</div>
      </form>
    </>
  )
}
