import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/generalTypes';


interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}



const getInitialState = (): AuthState => {
  const storedUser = localStorage.getItem('authenticatedUser');
  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    isAuthenticated: !!storedUser,
  };
};

const initialState: AuthState = getInitialState();


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {

      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('authenticatedUser', JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      localStorage.removeItem('authenticatedUser');
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;

export default authSlice.reducer;
