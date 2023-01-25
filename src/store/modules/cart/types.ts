export interface ProductProps {
  id: number
  title: string
  price: number
}

interface CartItem {
  product: ProductProps
  quantity: number
}

export interface CartStateProps {
  items: CartItem[]
}
