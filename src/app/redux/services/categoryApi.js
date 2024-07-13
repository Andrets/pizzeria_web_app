import { url } from '@constants/url'
import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '@utils/axiosBaseQuery'

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: axiosBaseQuery({
		baseUrl: `${url}/categories`
	}),
	tagTypes: ['Category'],
	endpoints: (build) => ({
		getAllCategories: build.query({
			query: () => ({
				url: '/',
				method: 'GET'
			}),
			providesTags: ['Category']
		})
	}),
})

export const { useLazyGetAllCategoriesQuery } = categoryApi