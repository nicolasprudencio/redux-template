export interface ProductProps {
  id: number
  title: string
  price: number
}

export interface CartItem {
  product: ProductProps
  quantity: number
}

export interface CartStateProps {
  items: CartItem[]
}
