import { createSlice } from '@reduxjs/toolkit'
import { CartStateProps } from './types'

const initialState: CartStateProps = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const product = action.payload

      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      )

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].quantity++
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              product,
              quantity: 1
            }
          ]
        }
      }
    }
  }
})

export const { addProductToCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer
