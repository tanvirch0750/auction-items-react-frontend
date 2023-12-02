import { api } from '../../api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (options) => {
        let queryString = '/product';

        if (options.page || options.limit || options.searchTerm) {
          queryString += '?';

          if (options.page) {
            queryString += `page=${options.page}&`;
          }

          if (options.limit) {
            queryString += `limit=${options.limit}&`;
          }

          if (options.searchTerm) {
            queryString += `searchTerm=${options.searchTerm}&`;
          }

          queryString = queryString.slice(0, -1);
        }

        return queryString;
      },
      keepUnusedDataFor: 600,
      providesTags: ['Products'],
    }),
    getProduct: builder.query({
      query: (id) => `/product/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'Product', id: arg }],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    editProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'Products',
        { type: 'Product', id: arg.id },
      ],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
