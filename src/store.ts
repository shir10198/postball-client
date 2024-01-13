// store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/store/slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
