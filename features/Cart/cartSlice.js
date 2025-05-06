import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      user: null,
      updated: new Date().toLocaleString(),
      total: 0,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const repeatedItem = state.value.items.find(
        (item) => item.id === action.payload.id
      )
      if (repeatedItem) {
        const updatedItems = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity
            return item
          }
          return item
        })
        const total = updatedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
        state.value = {
          ...state.value,
          items: updatedItems,
          total: total,
          updated: new Date().toLocaleString(),
        }
      } else {
        state.value.items = [...state.value.items, action.payload]
        const total = state.value.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
        state.value = {
          ...state.value,
          total: total,
          updated: new Date().toLocaleString(),
        }
      }
    },
    removeItem: () => {},
    clearCart: (state) => {
      state.value.items = []
      state.value.total = 0
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
