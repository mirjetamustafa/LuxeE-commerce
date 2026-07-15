export interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  streetAddress: string
  city: string
  state: string
  ziCode: string
}

export interface OrderItem {
  product: string
  quantity: number
  price: number
}

export interface CreateOrderInput {
  shippingAddress: ShippingAddress
  paymentMethod: string
  items: OrderItem[]
  totalPrice: number
}

export type PaymentMethod = 'Credit Card' | 'Cash on Delivery'

export interface Order {
  _id: string
  customer: string
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethod
  items: OrderItem[]
  totalPrice: number
  status: string
  createdAt: string
  updatedAt: string
}

export interface CreateOrderResponse {
  success: boolean
  message: string
  order: Order
}
