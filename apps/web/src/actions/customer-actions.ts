'use server'

import { addCustomer } from '@/lib/api/customers'
import { redirect } from 'next/navigation'
import { Customer } from '@/types/customer'

function extractCustomerData(formData: FormData): Customer {
  return {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
  }
}

export async function createCustomer(formData: FormData) {
  const customerData = extractCustomerData(formData)
  const { id } = await addCustomer(customerData)
  redirect(`/dashboard/customers/${id}`)
}

export async function updateCustomer(customerId: string, formData: FormData) {}
