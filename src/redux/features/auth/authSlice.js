import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
