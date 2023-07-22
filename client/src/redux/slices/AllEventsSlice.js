import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allEvents: [],
};

const AllEventsSlice = createSlice({
  name: 'Events',
  initialState,
  reducers: {
    setAllEvents(state, action) {
      state.allEvents = action.payload;
    },
  },
});

export const { setAllEvents } = AllEventsSlice.actions;

export default AllEventsSlice.reducer;
