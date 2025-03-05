'use server'

import axios from 'axios'
import { Product } from '@/types/product'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function getProducts() {
  const { data } = await axios.get(`${API_BASE_URL}/products`)
  return data
}

export async function getActiveProducts(): Promise<Product[]> {
  const { data } = await axios.get(`${API_BASE_URL}/products/active`)
  return data
}

export async function getProductById(id: string): Promise<Product> {
  const { data } = await axios.get(`${API_BASE_URL}/products/${id}`)
  return data
}

export async function addProduct(product: Product): Promise<Product> {
  const { data } = await axios.post(`${API_BASE_URL}/products`, product)

  return data
}

export async function editProduct(
  id: string,
  product: Product,
): Promise<Product> {
  const { data } = await axios.patch(`${API_BASE_URL}/products/${id}`, product)
  return data
}

export async function deleteProduct(id: string): Promise<Product> {
  const { data } = await axios.delete(`${API_BASE_URL}/products/${id}`)
  return data
}
