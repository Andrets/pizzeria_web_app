import { createApi } from '@reduxjs/toolkit/query/react'
import { categoryMockData } from '@utils/mock/category'

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: async () => {
		await new Promise((resolve) => setTimeout(resolve, 500));
		return { data: categoryMockData }
	},
	tagTypes: ['Category'],
	endpoints: (build) => ({
		getAllCategories: build.query({
			query: () => '/categories',
			providesTags: ['Category']
		})
	}),
})

export const { useGetAllCategoriesQuery } = categoryApi