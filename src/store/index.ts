import { configureStore } from '@reduxjs/toolkit'
import { cart } from './modules/cart/reducer'

export const store = configureStore({
  reducer: {
    cart
  }
})

// não utiliza o root reducer
// export type rootReducer = ReturnType<typeof store.getState>

console.log(store.getState())
