import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../db/db";

const shopService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: db,
  }),
  endpoints: (builder) => ({
    getCats: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const products = Object.values(response);
        return products;
      },
    }),
    getProductById: builder.query({
      query: (id) => `products.json?orderBy="id"&equalTo="${id}"`,
      transformResponse: (response) => {
        const product = Object.values(response);
        return product[0];
      },
    }),
  }),
});

export const { useGetCatsQuery, useGetProductsQuery, useGetProductByIdQuery } =
  shopService;

export default shopService;
