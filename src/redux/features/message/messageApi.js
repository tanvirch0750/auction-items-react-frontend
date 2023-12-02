import { api } from '../../api/apiSlice';

const messageApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (options) => {
        let queryString = '/message';

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
      providesTags: ['Messages'],
    }),
    getMessage: builder.query({
      query: (id) => `/message/${id}`,

      providesTags: (result, error, arg) => [{ type: 'Message', id: arg }],
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: `/message`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Messages'],
    }),
    editMessage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/message/${id}`,
        method: 'PATCH',
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [
        'Messages',
        { type: 'Message', id: arg.id },
      ],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/message/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export const {
  useAddMessageMutation,
  useEditMessageMutation,
  useDeleteMessageMutation,
  useGetMessageQuery,
  useGetMessagesQuery,
} = messageApi;
