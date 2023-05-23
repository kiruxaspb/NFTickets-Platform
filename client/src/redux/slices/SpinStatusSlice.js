import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const SpinStatusSlice = createSlice({
  name: 'spinStatus',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = SpinStatusSlice.actions;

export default SpinStatusSlice.reducer;
