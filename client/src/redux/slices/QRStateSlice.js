import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTrue: false,
};

const QRStateSlice = createSlice({
  name: 'checkQR',
  initialState,
  reducers: {
    setIsTrueQR(state, action) {
      state.isTrue = action.payload;
    },
  },
});

export const { setIsTrueQR } = QRStateSlice.actions;

export default QRStateSlice.reducer;
