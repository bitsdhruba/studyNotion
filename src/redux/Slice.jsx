import { createSlice } from "@reduxjs/toolkit";

export const LikedSlice = createSlice({
  initialState: [],
  name: "Liked",
  reducers: {
    addDashboard: (state, action) => {
      state.push(action.payload);
    },
    removeDashboard: (state, action) => {
      return state.filter((course) => course.id !== action.payload);
    },
  },
});

export const { addDashboard, removeDashboard } = LikedSlice.actions;
export default LikedSlice.reducer;
