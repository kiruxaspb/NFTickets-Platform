import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const IsLoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = IsLoginSlice.actions;

export default IsLoginSlice.reducer;
