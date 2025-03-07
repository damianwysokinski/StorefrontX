import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import QuantityInput from '../../_components/shared/quantity-input'
import { Trash } from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import { Button } from '@/components/ui/button'

export default function CartTableItem({
  id,
  title,
  images,
  price,
  quantity,
}: Product) {
  const { removeCartItem, updateCartItemQuantity } = useCartStore(
    (state) => state,
  )

  const handleQuantityChange = (newQuantity: number, id: string) => {
    if (newQuantity < 1) {
      removeCartItem(id)
    } else {
      updateCartItemQuantity(newQuantity, id)
    }
  }

  if (!id) return

  return (
    <tr className="border-b border-gray-200">
      <td className="py-4">
        <Image
          src={images?.[0]?.src ?? '/images/placeholder-image.jpg'}
          alt=""
          width={100}
          height={100}
          className="rounded-md"
        />
      </td>
      <td>
        <Link href={`/products/${id}`}>{title}</Link>
      </td>
      <td>
        <QuantityInput
          id={id}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
        <Button
          variant="outline"
          onClick={() => removeCartItem(id)}
          className="ml-2"
        >
          <Trash size={16} />
        </Button>
      </td>
      <td>${(price * quantity).toFixed(2)}</td>
    </tr>
  )
}
