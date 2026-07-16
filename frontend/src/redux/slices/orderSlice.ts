import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Order } from '../../api/order/order.types'
import { createOrder as createOrderApi } from '../../api/order/order'

interface OrderState {
  order: Order | null
  loading: boolean
  error: string | null
}

const initialeState: OrderState = {
  order: null,
  loading: false,
  error: null,
}

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData: any) => {
    const response = await createOrderApi(orderData)
    return response.order
  },
)

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.order = null
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(createOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false
        state.order = action.payload
      })

      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { clearOrder } = orderSlice.actions

export default orderSlice.reducer
