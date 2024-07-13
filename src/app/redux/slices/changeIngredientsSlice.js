import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	ingredients: [],
	compounds: [],
	price: 0
}

export const changeIngredientsSlice = createSlice({
	name: 'changeIngredients',
	initialState,
	reducers: {
		setIngredients: (state, action) => {
			state.ingredients = action.payload
		},
		setCompounds: (state, action) => {
			state.compounds = action.payload
		},
		setPrice: (state, action) => {
			state.price = action.payload
		},
		removeCompounds: (state, action) => {
			state.compounds = state.compounds.filter((item) => item.id !== action.payload)
		},
		addCompounds: (state, action) => {
			state.compounds.push(action.payload)
		},
		removeIngredients: (state, action) => {
			state.ingredients = state.ingredients.map((item) =>
				item.id === action.payload ? { ...item, isAdded: false } : item
			);
		},
		addIngredients: (state, action) => {
			state.ingredients = state.ingredients.map((item) =>
				item.id === action.payload.id ? { ...item, isAdded: true } : item
			);
		}
	}
})

export const { setIngredients, setCompounds, setPrice, addIngredients, removeIngredients, addCompounds, removeCompounds } = changeIngredientsSlice.actions

export default changeIngredientsSlice.reducer