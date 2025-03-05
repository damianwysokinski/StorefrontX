'use server'

import { Session } from '@/types/session'
import { User } from '@/types/user'
import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function logInUser(user: User): Promise<Session> {
  const { data } = await axios.post(`${API_BASE_URL}/auth/login`, user)
  return data
}
