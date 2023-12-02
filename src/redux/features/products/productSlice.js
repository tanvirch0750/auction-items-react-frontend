import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { addSearchTerm } = productSlice.actions;

export default productSlice.reducer;
