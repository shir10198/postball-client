// store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/store/slices/authSlice';
import usersReducer from '../src/store/slices/usersSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;
