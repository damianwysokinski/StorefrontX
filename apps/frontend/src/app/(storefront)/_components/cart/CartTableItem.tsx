import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import { useCartStore } from '@/providers/cart-store-provider'
import QuantityInput from '../shared/QuantityInput'
import { Trash } from 'lucide-react'

export default function CartTableItem({
  id,
  name,
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

  return (
    <tr className="border-b border-gray-200">
      <td className="py-4">
        <Image
          src={images?.[0]?.url ?? '/images/placeholder-image.jpg'}
          alt=""
          width={100}
          height={100}
          className="rounded-md"
        />
      </td>
      <td>
        <Link href={`/products/${id}`}>{name}</Link>
      </td>
      <td>
        <QuantityInput
          id={id}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
        <Button type="text" onClick={() => removeCartItem(id)} className="ml-2">
          <Trash size={16} />
        </Button>
      </td>
      <td>${(price * quantity).toFixed(2)}</td>
    </tr>
  )
}
