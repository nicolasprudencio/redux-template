import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '../features/cart/cart-slice'
import { CartStateProps } from '../features/cart/types'
import { applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga'

export interface StateProps {
  cart: CartStateProps
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: middlewares
})

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga)

// não utiliza o root reducer
// export type rootReducer = ReturnType<typeof store.getState>
