'use server'

import { Product } from '@/types/product'
import axiosClient from '@/lib/api/axiosClient'

export async function getProducts() {
  const { data } = await axiosClient.get('/products')
  return data
}

export async function getProductById(id: string): Promise<Product> {
  const { data } = await axiosClient.get(`/products/${id}`)
  return data
}

export async function addProduct(product: Product): Promise<Product> {
  const { data } = await axiosClient.post(`/products`, product)
  return data
}

export async function editProduct(
  id: string,
  product: Product,
): Promise<Product> {
  const { data } = await axiosClient.patch(`/products/${id}`, product)
  return data
}

export async function deleteProduct(id: string): Promise<Product> {
  const { data } = await axiosClient.delete(`/products/${id}`)
  return data
}
