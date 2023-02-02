import { AxiosResponse } from 'axios'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { api } from '../../services/api'
import { StateProps } from '../../store'
import { addProductToCartRequest, addProductToCartSuccess } from './cart-slice'

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface StockResponseProps {
  id: number
  quantity: number
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { id } = payload

  const currentQuantity: number = yield select((state: StateProps) => {
    return (
      state.cart.items.find((item) => item.product.id === id)?.quantity ?? 0
    )
  })
  const availableStockResponse: AxiosResponse<StockResponseProps> = yield call(
    api.get,
    `stock/${id}`
  )

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put({
      type: 'cart/addProductToCartSuccess'
    })
  } else {
    console.log('to aq', payload)
  }
}

export default all([
  takeLatest('cart/addProductToCartRequest', checkProductStock)
])

// takeLatest -> Caso o usuário não aguarde a aplicação atualizar, ele vai cancelar as requisições
// para a api anteriores e apenas utilizar a última

// takeLeading -> pega a primeira

// takeEvery -> pega todas
