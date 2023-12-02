import { api } from '../../api/apiSlice';

const auctionWinnerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuctionWinners: builder.query({
      query: (options) => {
        let queryString = '/auction-winner';

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
      providesTags: ['Auction_Winners'],
    }),
    getAuctionWinner: builder.query({
      query: (id) => `/auction-winner/${id}`,

      providesTags: (result, error, arg) => [
        { type: 'Auction_Winner', id: arg },
      ],
    }),
    addAuctionWinner: builder.mutation({
      query: (data) => ({
        url: `/auction-winner`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auction_Winners'],
    }),
    editAuctionWinner: builder.mutation({
      query: ({ id, data }) => ({
        url: `/auction-winner/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'Auction_Winners',
        { type: 'Auction_Winner', id: arg.id },
      ],
    }),
    deleteAuctionWinner: builder.mutation({
      query: (id) => ({
        url: `/auction-winner/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Auction_Winners'],
    }),
  }),
});

export const {
  useAddAuctionWinnerMutation,
  useEditAuctionWinnerMutation,
  useGetAuctionWinnerQuery,
  useGetAuctionWinnersQuery,
  useDeleteAuctionWinnerMutation,
} = auctionWinnerApi;
