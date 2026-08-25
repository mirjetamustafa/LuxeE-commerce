import { apiRequest } from '../Api'
import type {
  CreateOrderInput,
  CreateOrderResponse,
  GetOrdersResponse,
  Order,
  OrderStatus,
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
  apiRequest<void, { success: boolean; order: Order }>({
    url: `/api/orders/${id}`,
    method: 'GET',
  })

export const getOrderByStripeSession = (sessionId: string) =>
  apiRequest<void, { success: boolean; order: Order }>({
    url: `/api/orders/stripe-session/${sessionId}`,
    method: 'GET',
  })

export const updateOrderStatus = (
  id: string,
  status: OrderStatus,
): Promise<{ order: Order }> => {
  return apiRequest<{ status: OrderStatus }, { order: Order }>({
    url: `/api/orders/${id}/status`,
    method: 'PATCH',
    data: {
      status,
    },
  })
}
