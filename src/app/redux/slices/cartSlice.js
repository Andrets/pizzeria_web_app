import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cart: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload)
		},
		removeFromCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload)
		},
		clearCart: (state) => {
			state.cart = []
		},
		setCart: (state, action) => {
			state.cart = action.payload
		},
	},
})

export const { addToCart, removeFromCart, clearCart, setCart } = cartSlice.actions
export default cartSlice.reducer