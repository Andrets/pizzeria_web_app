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
		changeQuantity: (state, action) => {
			state.cart[action.payload.index].quantity = action.payload.quantity
		},
	},
})

export const { addToCart, removeFromCart, clearCart, setCart, changeQuantity } = cartSlice.actions
export default cartSlice.reducer