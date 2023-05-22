import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
};

const ShowModalSlice = createSlice({
  name: 'ShowModal',
  initialState,
  reducers: {
    setShowModal(state, action) {
      console.log(action.payload);
      state.showModal = action.payload;
    },
  },
});

export const { setShowModal } = ShowModalSlice.actions;

export default ShowModalSlice.reducer;
