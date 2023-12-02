import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/apiSlice';
import authSliceReducer from './auth/authSlice';
import productSliceReducer from './products/productSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSliceReducer,
    product: productSliceReducer,
  },

  //   devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
