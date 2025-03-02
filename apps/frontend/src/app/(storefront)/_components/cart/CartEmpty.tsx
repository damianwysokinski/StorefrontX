import Link from 'next/link'

export default function CartEmpty() {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-2 text-3xl">Your cart is empty</h1>
      <Link href="/products">Continue shopping</Link>
    </div>
  )
}
