import { http, HttpResponse } from 'msw'
import { products } from '../fixtures/products'
import { Product } from '@/types/product'

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, () => {
    return HttpResponse.json(products)
  }),
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/:id`,
    ({ params }) => {
      console.log(`Captured a "GET /products/${params.id}" request`)

      const { id } = params
      const product = products.find((p) => p.id === id)

      if (!product) {
        return new HttpResponse(null, {
          status: 404,
          statusText: 'Product not found',
        })
      }

      return HttpResponse.json(product)
    },
  ),
  http.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
    async ({ request }) => {
      console.log(`Captured a "POST /products" request`)

      const newProduct = (await request.json()) as Product

      newProduct.id = Math.random().toString(36).substring(2, 15)

      products.push(newProduct)

      return HttpResponse.json(newProduct, { status: 201 })
    },
  ),
  http.put(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/:id`,
    async ({ request, params }) => {
      const { id } = params
      const nextPost = await request.json()
      console.log('Updating product "%s" with:', id, nextPost)
    },
  ),
  http.delete(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/:id`,
    ({ params }) => {
      const { id } = params
      console.log('Deleting product with ID "%s"', id)
    },
  ),
]
