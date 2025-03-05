'use server'

import axios from 'axios'
import { Order } from '@/types/order'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function getOrders() {
  const { data } = await axios.get(`${API_BASE_URL}/orders`)
  return data
}

export async function getOrderById(id: string): Promise<Order> {
  const { data } = await axios.get(`${API_BASE_URL}/orders/${id}`)
  return data
}
