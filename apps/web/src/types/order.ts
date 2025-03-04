import { Customer } from '@/types/customer'
import { Product } from '@/types/product'

export interface Order {
  id?: string
  customerId: string
  status: string
  total: number
  items: OrderItem[]
  createdAt?: string
  updatedAt?: string
  user: Customer
}

export interface OrderItem {
  id: string
  productId: string
  customerId: string
  quantity: number
  price: number
  order: Order
  product: Product
}

// enum OrderStatus {
//     PENDING= 'PENDING',
//     PROCESSING = 'PROCESSING',
//     SHIPPED = 'SHIPPED',
//     DELIVERED = 'DELIVERED',
//     CANCELLED = 'CANCELLED',
// }
