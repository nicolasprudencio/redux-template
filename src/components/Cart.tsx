import { useSelector } from 'react-redux'
import { CartItem } from '../features/cart/types'

import { StateProps } from '../store'

export function Cart() {
  const cart = useSelector<StateProps, CartItem[]>((state) => state.cart.items)

  //  const cart = useAppSelector((state) => state.cartReducer.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
