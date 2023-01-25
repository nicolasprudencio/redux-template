import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from '../features/cart/reducer'
import { CartStateProps } from '../features/cart/types'

export interface StateProps {
  cartReducer: CartStateProps
}

export const store = configureStore({
  reducer: {
    cartReducer
  }
})

// não utiliza o root reducer
// export type rootReducer = ReturnType<typeof store.getState>
