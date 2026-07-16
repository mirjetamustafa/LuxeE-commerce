import { apiRequest } from '../Api'
import type {
  CreateOrderInput,
  CreateOrderResponse,
  Order,
} from './order.types'

export const createOrder = (
  data: CreateOrderInput,
): Promise<CreateOrderResponse> => {
  return apiRequest<CreateOrderInput, CreateOrderResponse>({
    url: '/api/orders',
    method: 'POST',
    data,
  })
}

export const getMyOrders = (): Promise<Order[]> => {
  return apiRequest<void, Order[]>({
    url: '/api/orders/my-orders',
    method: 'GET',
  })
}

export const getOrderId = (id: string) =>
  apiRequest<void, Order>({
    url: `/api/orders/${id}`,
  })
