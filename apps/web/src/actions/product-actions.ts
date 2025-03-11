'use server'

import { addProduct, deleteProduct, editProduct } from '@/lib/api/products'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Product } from '@/types/product'

function extractProductData(formData: FormData): Product {
  return {
    title: formData.get('title') as string,
    handle: formData.get('handle') as string,
    description: formData.get('description') as string,
    category: formData.get('category') as string,
    price: parseFloat(formData.get('price') as string),
    quantity: parseInt(formData.get('quantity') as string),
    status: formData.get('status') as string,
  }
}

export async function createProduct(formData: FormData) {
  const productData = extractProductData(formData)
  const { id } = await addProduct(productData)
  redirect(`/dashboard/products/${id}`)
}

export async function updateProduct(productId: string, formData: FormData) {
  const productData = extractProductData(formData)
  await editProduct(productId, productData)
  revalidatePath('/dashboard/products/[id]', 'page')
}

export async function removeProduct(productId: string) {
  await deleteProduct(productId)
  redirect('/dashboard/products')
}
