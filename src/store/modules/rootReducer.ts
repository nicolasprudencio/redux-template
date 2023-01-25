import { combineReducers } from 'redux'

import { cartReducer } from '../../features/cart/reducer'

export const rootReducer = combineReducers({
  cartReducer
})

export type RootState = ReturnType<typeof rootReducer>
