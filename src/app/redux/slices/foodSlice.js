import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	foodList: [],
	compoundList: [],
	food: {},
	filteredFoodList: [],
}

export const foodSlice = createSlice({
	name: 'food',
	initialState,
	reducers: {
		addFoodList: (state, action) => {
			state.foodList = action.payload
		},
		addFood: (state, action) => {
			state.foodList.push(action.payload)
		},
		setFilteredFoodList: (state, action) => {
			state.filteredFoodList = action.payload
		},
		setCompoundList: (state, action) => {
			state.compoundList = action.payload
		},
	}
})

export const {
	addFoodList,
	addFood,
	setFilteredFoodList,
	setCompoundList
} = foodSlice.actions

export default foodSlice.reducer