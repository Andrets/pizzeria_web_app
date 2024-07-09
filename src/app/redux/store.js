import cartReducer from '@redux/slices/cartSlice'
import categoryReducer from '@redux/slices/categorySlice'
import foodReducer from '@redux/slices/foodSlice'
import modalsReducer from '@redux/slices/modalsSlice'
import searchReducer from '@redux/slices/searchSlice'
import userReducer from '@redux/slices/userSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { categoryApi } from './services/categoryApi'
import { foodApi } from './services/foodApi'
import { userApi } from './services/userApi'

export const store = configureStore({
	reducer: {
		[categoryApi.reducerPath]: categoryApi.reducer,
		[foodApi.reducerPath]: foodApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		modals: modalsReducer,
		cart: cartReducer,
		search: searchReducer,
		food: foodReducer,
		category: categoryReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(foodApi.middleware)
			.concat(categoryApi.middleware)
			.concat(userApi.middleware),
});
setupListeners(store.dispatch)