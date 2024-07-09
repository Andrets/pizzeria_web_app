import { createApi } from '@reduxjs/toolkit/query/react'
import { foodMockData } from '@utils/mock/food'

export const foodApi = createApi({
	reducerPath: 'foodApi',
	baseQuery: async () => {
		return {
			data: foodMockData
		}
	},
	tagTypes: ['Food'],
	endpoints: (build) => ({
		getAllFood: build.query({
			query: () => `/food`,
			providesTags: ['Food']
		}),
		getAllCompounds: build.query({
			query: () => `/food/compounds`,
			providesTags: ['Food']
		})
	})
})

export const {
	useGetAllFoodQuery,
	useGetAllCompoundsQuery
} = foodApi