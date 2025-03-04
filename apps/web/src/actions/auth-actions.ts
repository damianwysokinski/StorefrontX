'use server'

import { logInUser } from '@/lib/auth'
import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function logIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { user, accessToken, refreshToken } = await logInUser({
    email,
    password,
  })

  await createSession({
    user: {
      email: user.email,
    },
    accessToken,
    refreshToken,
  })

  redirect('/dashboard')
}
