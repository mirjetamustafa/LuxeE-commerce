import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Product } from '../../api/products/product.types'
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from '../../api/wishlist/wishlist'

interface WishlistState {
  items: Product[]
  loading: boolean
  error: string | null
}

const initialState: WishlistState = {
  items: [],
  loading: false,
  error: null,
}

// get wishlist
export const fetchWishlist = createAsyncThunk(
  'wishlist/getWishlist',
  async () => {
    const response = await getWishlist()
    return response
  },
)

export const addProductToWishlist = createAsyncThunk(
  'wishlist/addProduct',
  async (productId: string) => {
    const response = await addToWishlist({ productId })
    return response
  },
)

export const removeProductToWishlist = createAsyncThunk(
  'wishlist/removeProduct',
  async (productId: string) => {
    const response = await removeFromWishlist(productId)
    return response
  },
)

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload.products
      })

      .addCase(addProductToWishlist.fulfilled, (state, action) => {
        state.items = action.payload.products
      })

      .addCase(removeProductToWishlist.fulfilled, (state, action) => {
        state.items = action.payload.products
      })

      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true
        },
      )

      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false
          state.error = action.error.message || 'Something went wrong'
        },
      )
  },
})

export default wishlistSlice.reducer
