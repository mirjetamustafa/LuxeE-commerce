import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  addToCart as addToCartApi,
  getCart as getCartApi,
  removeFromCart as removeFromCartApi,
  updateCartQuantity as updateCartQuantityApi,
  clearCart as clearCartApi,
} from '../../api/cart/cart'
import type { Cart } from '../../api/cart/cart.types'

interface CartState {
  cart: Cart | null
  loading: boolean
  error: string | null
  discountCode: string
  discount: number
}

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
  discountCode: '',
  discount: 0,
}

// get cart
export const fetchCart = createAsyncThunk('cart/getCart', async () => {
  const response = await getCartApi()
  return response
})

// add to cart
export const addProductToCart = createAsyncThunk(
  'cart/addToCart',
  async (data: { productId: string; quantity: number }) => {
    const response = await addToCartApi(data)
    return response
  },
)

// update quantity
export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ productId, quantity }: { productId: string; quantity: number }) => {
    const response = await updateCartQuantityApi(productId, quantity)
    return response
  },
)

// remove product cart
export const removeProductFromCart = createAsyncThunk(
  'cart/removeProduct',
  async (productId: string) => {
    const response = await removeFromCartApi(productId)
    return response
  },
)

// clear cart
export const clearUserCart = createAsyncThunk('cart/clearCart', async () => {
  await clearCartApi()
  return null
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCartState: (state) => {
      state.cart = null
    },
    setDiscount: (
      state,
      action: {
        payload: {
          code: string
          discount: number
        }
      },
    ) => {
      state.discountCode = action.payload.code
      state.discount = action.payload.discount
    },

    removeDiscount: (state) => {
      state.discountCode = ''
      state.discount = 0
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false
        state.cart = action.payload
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cart = action.payload
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.cart = action.payload
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.cart = action.payload
      })
      .addCase(clearUserCart.fulfilled, (state) => {
        if (state.cart) {
          state.cart.items = []
        }
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false
          state.error = action.error.message || 'Somethnig went wrong'
        },
      )
  },
})

export const { clearCartState, setDiscount, removeDiscount } = cartSlice.actions

export default cartSlice.reducer
