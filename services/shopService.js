import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { db } from '../db/db'

const shopService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: db,
  }),
  tagTypes: ['ProfileImageGet', 'AddressGet'],
  endpoints: (builder) => ({
    getCats: builder.query({
      query: () => 'categories.json',
    }),
    getProducts: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const products = Object.values(response)
        return products
      },
    }),
    getProductById: builder.query({
      query: (id) => `products.json?orderBy="id"&equalTo="${id}"`,
      transformResponse: (response) => {
        const product = Object.values(response)
        return product[0]
      },
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ['ProfileImageGet'],
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body: {
          image: image,
        },
      }),
      invalidatesTags: ['ProfileImageGet'],
    }),
    getAddress: builder.query({
      query: (localId) => `address/${localId}.json`,
      providesTags: ['AddressGet'],
    }),
    postAddress: builder.mutation({
      query: ({ localId, address }) => ({
        url: `address/${localId}.json`,
        method: 'PUT',
        body: {
          address: address,
        },
      }),
      invalidatesTags: ['AddressGet'],
    }),
  }),
})

export const {
  useGetCatsQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetAddressQuery,
  usePostAddressMutation,
} = shopService

export default shopService
