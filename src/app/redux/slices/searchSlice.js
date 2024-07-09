import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
	searchQuery: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload
		},
		openSearch: (state, action) => {
			state.isOpen = true
			state.data = action.payload
		},
		closeSearch: (state) => {
			state.isOpen = false
			state.data = {}
		}
	}
})

export const { openSearch, closeSearch, setSearchQuery } = searchSlice.actions

export default searchSlice.reducer