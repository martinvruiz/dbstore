import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authUrl } from '../validations/auth'
import { API_KEY } from '@env'

export const authApi = createApi({
  reducerPath: 'authapi',
  baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signInWithPassword?key=${API_KEY}`,
        method: 'POST',
        body: {
          ...auth,
          returnSecureToken: true,
        },
      }),
    }),
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signUp?key=${apiKey}`,
        method: 'POST',
        body: auth,
      }),
    }),
  }),
})

export const { useLogInMutation, useSignUpMutation } = authApi
