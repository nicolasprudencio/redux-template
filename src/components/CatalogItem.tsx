import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCartRequest } from '../features/cart/cart-slice'
import { ProductProps } from '../features/cart/types'

interface CatalogItemProps {
  product: ProductProps
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>{' '}
      <button onClick={() => handleAddProductToCart()} type="button">
        Comprar
      </button>
    </article>
  )
}
