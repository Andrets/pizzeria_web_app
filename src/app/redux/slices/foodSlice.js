import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	menuList: [],
	compoundList: [],
	menu: {},
	filteredMenuList: [],
}

export const foodSlice = createSlice({
	name: 'food',
	initialState,
	reducers: {
		setMenuList: (state, action) => {
			state.menuList = action.payload
		},
		addMenu: (state, action) => {
			state.menuList.push(action.payload)
		},
		setFilteredMenuList: (state, action) => {
			state.filteredMenuList = action.payload
		},
		setCompoundList: (state, action) => {
			state.compoundList = action.payload
		},
	}
})

export const {
	setMenuList,
	addMenu,
	setFilteredMenuList,
	setCompoundList
} = foodSlice.actions

export default foodSlice.reducer