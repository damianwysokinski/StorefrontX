'use server'

import { addCustomer } from '@/lib/customers'
import { redirect } from 'next/navigation'

export async function createCustomer(formData: FormData) {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string

  const { id } = await addCustomer({
    firstName,
    lastName,
    email,
  })

  redirect(`/dashboard/customers/${id}`)
}

export async function updateCustomer(customerId: string, formData: FormData) {}
