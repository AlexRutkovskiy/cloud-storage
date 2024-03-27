import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./features/userSlice/userSlice";
import { toastReducer } from "./features/toastSlice/toastSlice";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
