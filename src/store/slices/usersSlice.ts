import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/generalTypes';

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
        const user = action.payload;
        user.id = `${state.users.length}`;
        state.users.push(user);
    },
    updateUser: (state, action: PayloadAction<{ id?: string; updatedUser: User }>) => {
      const { id, updatedUser } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);

      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = usersSlice.actions;
export const selectUsers = (state: { users: UsersState }) => state.users.users;

export default usersSlice.reducer;
