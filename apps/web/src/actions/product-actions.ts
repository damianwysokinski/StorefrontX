'use server'

import { addProduct, deleteProduct, editProduct } from '@/lib/products'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProduct(formData: FormData) {
  const title = formData.get('title') as string
  const handle = formData.get('handle') as string
  const description = formData.get('description') as string
  const category = formData.get('category') as string
  const price = parseFloat(formData.get('price') as string)
  const quantity = Number(parseFloat(formData.get('quantity') as string))
  const status = formData.get('status') as string

  const { id } = await addProduct({
    title,
    handle,
    description,
    category,
    price,
    quantity,
    status,
  })

  redirect(`/dashboard/products/${id}`)
}

export async function updateProduct(productId: string, formData: FormData) {
  const title = formData.get('title') as string
  const handle = formData.get('handle') as string
  const description = formData.get('description') as string
  const category = formData.get('category') as string
  const price = parseFloat(formData.get('price') as string)
  const quantity = Number(parseFloat(formData.get('quantity') as string))
  const status = formData.get('status') as string

  await editProduct(productId, {
    title,
    handle,
    description,
    category,
    price,
    quantity,
    status,
  })

  revalidatePath('/dashboard/products/[id]', 'page')
}

export async function removeProduct(productId: string) {
  await deleteProduct(productId)

  redirect('/dashboard/products')
}
