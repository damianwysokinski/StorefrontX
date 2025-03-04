import { Order } from '@/types/order'

export interface Customer {
  id?: string
  firstName?: string
  lastName?: string
  email: string
  orders?: Order[]
  createdAt?: string
  updatedAt?: string
}
