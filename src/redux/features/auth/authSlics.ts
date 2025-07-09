import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  admin: null | object;
  token: null | string;
}

const initialState: AuthState = {
  admin: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      const { user, token } = action.payload;
      state.admin = user;
      state.token = token;
    },
    logOut: (state) => {
      state.token = null;
      state.admin = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdmin, logOut } = authSlice.actions;

export default authSlice.reducer;
