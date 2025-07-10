import type { TServcie } from "@/utils/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

export interface serviceState {
  serviceStore: TServcie[];
}

const initialState: serviceState = {
  serviceStore: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action) => {
      console.log("Service Payload: ", action.payload);
      state.serviceStore = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setService } = serviceSlice.actions;

export default serviceSlice.reducer;
