import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
  },
});
