import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	compounds: [],
	price: 0
}

export const pizzaDesignSlice = createSlice({
	name: 'pizzaDesign',
	initialState,
	reducers: {
		setCompounds: (state, action) => {
			state.compounds = action.payload
		},
		addCompounds: (state, action) => {
			state.compounds.push(action.payload)
		},
		setPrice: (state, action) => {
			state.price = action.payload
		},
		removeCompounds: (state, action) => {
			state.compounds = state.compounds.filter((item) => item.id !== action.payload)
		},
	}
})

export const { setCompounds, setPrice, addCompounds, removeCompounds } = pizzaDesignSlice.actions

export default pizzaDesignSlice.reducer