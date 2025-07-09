import { configureStore } from "@reduxjs/toolkit";
import portfolioCategoryReducer from "./features/portfolio/portfolioSlice";
import authReducer from "./features/auth/authSlics";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    portfolioCategories: portfolioCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
