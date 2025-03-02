'use server'

import { generateSlug } from '@/lib/generate-slug'
import { addProduct, deleteProduct, editProduct } from '@/lib/products'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProduct(formData: FormData) {
  const available = formData.get('available') as string
  const title = formData.get('title') as string
  const slug = generateSlug(title)

  const rawFormData = {
    title,
    slug,
    description: formData.get('description') as string,
    category: formData.get('category') as string,
    price: parseFloat(formData.get('price') as string),
    quantity: 1,
    available: available === 'true' ? true : false,
  }

  const { id } = await addProduct(rawFormData)

  redirect(`/dashboard/products/${id}`)
}

export async function updateProduct(productId: string, formData: FormData) {
  const available = formData.get('available') as string
  const title = formData.get('title') as string
  const slug = generateSlug(title)

  const rawFormData = {
    title,
    slug,
    description: formData.get('description') as string,
    category: formData.get('category') as string,
    price: parseFloat(formData.get('price') as string),
    quantity: 1,
    available: available === 'true' ? true : false,
  }

  await editProduct(productId, rawFormData)

  revalidatePath('/dashboard/products/[id]', 'page')
}

export async function removeProduct(productId: string) {
  await deleteProduct(productId)

  redirect('/dashboard/products')
}
