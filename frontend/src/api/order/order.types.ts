import type { Product } from '../products/product.types'

export interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
}

export interface OrderItem {
  product: string | Product
  name: string
  quantity: number
  price: number
}

export type PaymentMethodTypes = 'Credit Card' | 'Cash on Delivery'

export type OrderStatus =
  | 'Pending'
  | 'Processing'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled'

export interface CreateOrderInput {
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethodTypes
  items: OrderItem[]
  totalPrice: number
}

export interface Customer {
  _id: string
  createdAt: string
}

export interface Order {
  _id: string
  orderNumber: string
  customer: Customer
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethodTypes
  items: OrderItem[]
  totalPrice: number
  status: OrderStatus
  trackingNumber?: string | null
  createdAt: string
  updatedAt: string
}

export interface CreateOrderResponse {
  success: boolean
  message: string
  order: Order
}

export interface GetOrdersResponse {
  success: boolean
  orders: Order[]
}
