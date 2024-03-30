import { configureStore } from "@reduxjs/toolkit";
import bestellingSliceReducer from "./slices/bestellingSlice";

export const store = configureStore({
  reducer: {
    bestelling: bestellingSliceReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof bestellingSliceReducer>;
