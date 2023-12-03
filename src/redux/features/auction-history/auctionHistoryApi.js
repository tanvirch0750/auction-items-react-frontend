import { api } from '../../api/apiSlice';

const auctionHistoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuctionHistories: builder.query({
      query: (options) => {
        let queryString = '/abh';

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
      transformResponse: (response) => {
        return response;
      },
      keepUnusedDataFor: 600,
      providesTags: ['Auction_Histories'],
    }),
    getAuctionHistory: builder.query({
      query: (id) => `/abh/${id}`,

      providesTags: (result, error, arg) => [
        { type: 'Auction_History', id: arg },
      ],
    }),
    addAuctionHistory: builder.mutation({
      query: (data) => ({
        url: `/abh`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auction_Histories'],
    }),
    editAuctionHistory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/abh/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'Auction_Histories',
        { type: 'Auction_History', id: arg.id },
      ],
    }),
    deleteAuctionHistory: builder.mutation({
      query: (id) => ({
        url: `/abh/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Auction_Histories'],
    }),
  }),
});

export const {
  useAddAuctionHistoryMutation,
  useDeleteAuctionHistoryMutation,
  useEditAuctionHistoryMutation,
  useGetAuctionHistoriesQuery,
  useGetAuctionHistoryQuery,
} = auctionHistoryApi;
