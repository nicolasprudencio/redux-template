import { combineReducers } from 'redux'

import { cartReducer } from '../../features/cart/cart-slice'

export const rootReducer = combineReducers({
  cartReducer
})
