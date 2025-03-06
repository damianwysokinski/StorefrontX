'use server'

import { Customer } from '@/types/customer'
import axiosClient from '@/lib/api/axiosClient'

export async function getCustomers() {
  const { data } = await axiosClient.get('/customers')
  return data
}

export async function getCustomerById(id: string): Promise<Customer> {
  const { data } = await axiosClient.get(`/customers/${id}`)
  return data
}

export async function addCustomer(customer: Customer): Promise<Customer> {
  const { data } = await axiosClient.post('/customers', customer)
  return data
}
