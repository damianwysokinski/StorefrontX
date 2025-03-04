'use server'

import { Customer } from '@/types/customer'
import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function getCustomers() {
  const { data } = await axios.get(`${API_BASE_URL}/customers`)
  return data
}

export async function getCustomerById(id: string): Promise<Customer> {
  const { data } = await axios.get(`${API_BASE_URL}/customers/${id}`)
  return data
}

export async function addCustomer(customer: Customer): Promise<Customer> {
  const { data } = await axios.post(`${API_BASE_URL}/customers`, customer)
  return data
}
