import { apiRequest } from '../Api'
import type {
  CreateOrderInput,
  CreateOrderResponse,
  GetOrdersResponse,
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

export const getMyOrders = (): Promise<GetOrdersResponse> => {
  return apiRequest<void, GetOrdersResponse>({
    url: '/api/orders/my-orders',
    method: 'GET',
  })
}

export const getAllOrders = (): Promise<GetOrdersResponse> => {
  return apiRequest<void, GetOrdersResponse>({
    url: '/api/orders/admin',
    method: 'GET',
  })
}

export const getOrderId = (id: string) =>
  apiRequest<void, Order>({
    url: `/api/orders/${id}`,
  })
