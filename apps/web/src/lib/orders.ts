'use server'

import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function getOrders() {
  const { data } = await axios.get(`${API_BASE_URL}/orders`)
  return data
}
