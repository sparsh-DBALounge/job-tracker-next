import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: true,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setsidebarOpen: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setsidebarOpen } = configSlice.actions;
export default configSlice.reducer;
