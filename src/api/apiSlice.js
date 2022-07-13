import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => '/orders',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Orders']
        }),
        addOrder: builder.mutation({
            query: (order) => ({
                url: '/orders',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['Orders']
        }),
        updateOrder: builder.mutation({
            query: (order) => ({
                url: `/orders/${order.id}`,
                method: 'PATCH',
                body: order
            }),
            invalidatesTags: ['Orders']
        }),
        deleteOrder: builder.mutation({
            query: ({ id }) => ({
                url: `/orders/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Orders']
        }),
    })
})

export const {
    useGetOrdersQuery,
    useGetOrderQuery,
    useAddOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation
} = apiSlice;