import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hash: '',
  id: '',
};

const TicketDataSlice = createSlice({
  name: 'ticketData',
  initialState,
  reducers: {
    setTicketData(state, action) {
      state.hash = action.payload.hash;
      state.id = action.payload.id;
    },
  },
});

export const { setTicketData } = TicketDataSlice.actions;

export default TicketDataSlice.reducer;
