import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;