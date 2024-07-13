import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categories: [],
	activeCategory: 'ВСЕ',
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload
		},
		setActiveCategory: (state, action) => {
			state.activeCategory = action.payload
		}
	}
})

export const { setCategories, setActiveCategory } = categorySlice.actions

export default categorySlice.reducer