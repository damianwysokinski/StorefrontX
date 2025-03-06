'use server'

import { redirect } from 'next/navigation'

export async function logIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  redirect('/dashboard')
}
