import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
	modalType: '',
	data: {
		food: {},
		isChangeIngredients: false
	}
}

export const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		setOpen: (state, action) => {
			state.isOpen = action.payload
		},
		closeModal: (state) => {
			state.modalType = ''
			state.isOpen = false
			state.data = {
				food: {},
				isChangeIngredients: false
			}
		},
		openFoodModal: (state, action) => {
			state.modalType = 'FOODINFO'
			state.isOpen = true
			state.data.food = action.payload
		},
		openChangeIngredientsModal: (state) => {
			state.data.isChangeIngredients = true
		},
		openPizzaDesignerModal: (state) => {
			state.modalType = 'PIZZADESIGNER'
			state.isOpen = true
		},
		openCartModal: (state) => {
			state.modalType = 'CART'
			state.isOpen = true
		}
	}
})

export const {
	setOpen,
	closeModal,
	openFoodModal,
	openPizzaDesignerModal,
	openCartModal,
	openChangeIngredientsModal
} = modalsSlice.actions

export default modalsSlice.reducer