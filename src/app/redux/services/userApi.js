import { createApi } from '@reduxjs/toolkit/query/react'
import { userMockData } from '@utils/mock/user'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return { data: userMockData }
	},
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => '/users',
			providesTags: ['User']
		}),
		getUserById: builder.query({
			query: (id) => `/users/${id}`,
			providesTags: ['User']
		}),
		createUser: builder.mutation({
			query: (user) => ({
				url: '/users',
				method: 'POST',
				body: user
			}),
			invalidatesTags: ['User']
		})
	})
})

export const { useGetAllUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = userApi