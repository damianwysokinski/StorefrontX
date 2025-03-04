import { Image } from './image'
import { Review } from './review'

export interface Product {
  id?: string
  title: string
  handle: string
  images?: Image[]
  description?: string
  category: string
  price: number
  quantity: number
  reviews?: Review[]
  status: string
  createdAt?: string
  updatedAt?: string
}
