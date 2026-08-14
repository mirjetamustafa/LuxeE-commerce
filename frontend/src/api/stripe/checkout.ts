import { apiRequest } from '../Api'
import type { ShippingAddress } from '../order/order.types'

export const createCheckoutSession = (shippingAddress: ShippingAddress) =>
  apiRequest<
    { shippingAddress: ShippingAddress },
    { success: boolean; url: string }
  >({
    url: '/api/checkout/create-session',
    method: 'POST',
    data: {
      shippingAddress,
    },
  })
