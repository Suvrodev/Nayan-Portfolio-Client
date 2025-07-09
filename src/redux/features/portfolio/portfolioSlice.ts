import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PortfolioState {
  portfolioCategory: number;
}

const initialState: PortfolioState = {
  portfolioCategory: 0,
};

export const portfolioCategorySlice = createSlice({
  name: "portfolioCategory",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<number>) => {
      state.portfolioCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectCategory } = portfolioCategorySlice.actions;

export default portfolioCategorySlice.reducer;
