import { createSlice } from '@reduxjs/toolkit'

export function cart() {
  return []
}

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState
})
