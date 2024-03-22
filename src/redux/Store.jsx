import { configureStore } from "@reduxjs/toolkit";
import { LikedSlice } from "./Slice";

export const store = configureStore({
  reducer: {
    Liked: LikedSlice.reducer,
  },
});
