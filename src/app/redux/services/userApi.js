import { url } from '@constants/url'
import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '@utils/axiosBaseQuery'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: axiosBaseQuery({
		baseUrl: `${url}/users`
	}),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => ({
				url: '/',
				method: 'GET'
			}),
			providesTags: ['User']
		}),
		getUserById: builder.query({
			query: (tg_id) => `/${tg_id}`,
			providesTags: ['User']
		}),
		createUser: builder.mutation({
			query: (user) => ({
				url: '/',
				method: 'POST',
				data: user
			}),
			invalidatesTags: ['User']
		})
	})
})

export const { useGetAllUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = userApi