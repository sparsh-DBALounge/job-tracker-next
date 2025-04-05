import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '@/types';

const initialState = {
  user: {
    id: 69,
    username: 'Sparsh Kadian',
    email: 'sparshgmail.com',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    removeUser: (state) => {
      state.user = {} as UserType;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
