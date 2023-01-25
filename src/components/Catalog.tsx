import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { addProductToCart } from '../features/cart/reducer'
import { ProductProps } from '../features/cart/types'
import { useDispatch } from 'react-redux'

export function Catalog() {
  const [catalog, setCatalog] = useState<ProductProps[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products')
      const products = await response.data
      setCatalog(products)
    }

    getProducts()
  }, [])

  const handleAddProductToCart = (product: ProductProps) => {
    dispatch(addProductToCart(product))
  }

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span>{' '}
          <button onClick={() => handleAddProductToCart(product)} type="button">
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}
