import { configureStore, combineReducers } from '@reduxjs/toolkit';
import QRStateSlice from './slices/QRStateSlice';
import ShowModalSlice from './slices/ShowModalSlice';
import SpinStatusSlice from './slices/SpinStatusSlice';

const rootReducer = combineReducers({
  QRStateSlice,
  ShowModalSlice,
  SpinStatusSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
