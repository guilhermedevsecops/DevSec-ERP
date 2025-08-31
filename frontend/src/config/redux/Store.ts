// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Tipagem para usar no projeto
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
