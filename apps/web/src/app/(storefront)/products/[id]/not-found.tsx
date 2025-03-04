import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-2 text-3xl">Product Not Found</h1>
      <Link href="/">Return Home</Link>
    </div>
  )
}
