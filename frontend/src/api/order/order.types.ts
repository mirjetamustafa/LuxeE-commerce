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
  product: string
  name: string
  quantity: number
  price: number
}

export interface CreateOrderInput {
  orderNumber: string
  shippingAddress: ShippingAddress
  paymentMethod: string
  items: OrderItem[]
  totalPrice: number
}

export type PaymentMethodTypes = 'Credit Card' | 'Cash on Delivery'

export interface Order {
  _id: string
  orderNumber: string
  customer: string
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethodTypes
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
