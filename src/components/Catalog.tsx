import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { ProductProps } from '../features/cart/types'
import { CatalogItem } from './CatalogItem'

export function Catalog() {
  const [catalog, setCatalog] = useState<ProductProps[]>([])

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products')
      const products = await response.data
      setCatalog(products)
    }

    getProducts()
  }, [])

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}
