import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	usersList: [],
	user: {}
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUsersList: (state, action) => {
			state.usersList = action.payload
		},
		setUser: (state, action) => {
			state.user = action.payload
		},
		addUser: (state, action) => {
			state.usersList.push(action.payload)
		}
	}
})

export const { setUsersList, setUser, addUser } = userSlice.actions

export default userSlice.reducer