import { all } from 'redux-saga/effects'

import cart from '../../features/cart/sagas'

// o Asterísco é uma declaração de função assíncrona
export default function* rootSaga(): Generator {
  // The yield is an await declaration to the wait the code to finish execution
  return yield all([cart])
}
