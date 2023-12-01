import { api } from '../../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // register endpoint
    signup: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    // login endpoint
    signin: builder.mutation({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.data.accessToken,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.data.accessToken,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
