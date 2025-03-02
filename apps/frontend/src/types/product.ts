import { Image } from './image'
import { Review } from './review'

export interface Product {
  id?: string
  title: string
  slug: string
  description?: string
  category: string
  price: number
  quantity: number
  images?: Image[]
  reviews?: Review[]
  available: boolean
  createdAt?: string
  updatedAt?: string
}

// export interface ProductCreate {
//   name: string
//   description: string
//   category: string
//   price: number
//   quantity: number
//   isActive: boolean
//   images?: Image[]
// }
