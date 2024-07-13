import { url } from '@constants/url'
import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '@utils/axiosBaseQuery'


export const foodApi = createApi({
	reducerPath: 'foodApi',
	baseQuery: axiosBaseQuery({
		baseUrl: `${url}`
	}),
	tagTypes: ['Menu', 'Compounds'],
	endpoints: (build) => ({
		getAllFood: build.query({
			query: () => ({
				url: '/menu/',
				method: 'GET'
			}),
			providesTags: ['Menu']
		}),
		getAllCompounds: build.query({
			query: () => ({
				url: '/compounds/',
				method: 'GET'
			}),
			providesTags: ['Compounds']
		})
	})
})

export const {
	useLazyGetAllFoodQuery,
	useLazyGetAllCompoundsQuery,
	useGetAllCompoundsQuery
} = foodApi