import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // auth: authSliceReducer,
  },

  //   devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
