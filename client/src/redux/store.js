import { configureStore, combineReducers } from '@reduxjs/toolkit';
import QRStateSlice from './slices/QRStateSlice';
import ShowModalSlice from './slices/ShowModalSlice';
import SpinStatusSlice from './slices/SpinStatusSlice';
import IsLoginSlice from './slices/IsLoginSlice';
import TicketDataSlice from './slices/TicketDataSlice';

const rootReducer = combineReducers({
  QRStateSlice,
  ShowModalSlice,
  SpinStatusSlice,
  IsLoginSlice,
  TicketDataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
