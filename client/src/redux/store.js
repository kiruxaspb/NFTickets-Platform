import { configureStore, combineReducers } from '@reduxjs/toolkit';
import QRStateSlice from './slices/QRStateSlice';
import ShowModalSlice from './slices/ShowModalSlice';

const rootReducer = combineReducers({
  QRStateSlice,
  ShowModalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
