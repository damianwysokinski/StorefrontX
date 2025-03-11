import { Image } from './image'
import { Review } from './review'
import { OrderItem } from '@/types/order'

export interface Product {
  id: string
  title: string
  handle: string
  images?: Image[]
  description?: string
  category: string
  price: number
  quantity: number
  reviews?: Review[]
  orderItem?: OrderItem[]
  status: string
  createdAt?: string
  updatedAt?: string
}
