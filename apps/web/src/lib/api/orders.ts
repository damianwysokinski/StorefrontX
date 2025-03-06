'use server'

import { Order } from '@/types/order'
import axiosClient from '@/lib/api/axiosClient'

export async function getOrders() {
  const { data } = await axiosClient.get('/orders')
  return data
}

export async function getOrderById(id: string): Promise<Order> {
  const { data } = await axiosClient.get(`/orders/${id}`)
  return data
}
