import type { TPortfolio } from "@/utils/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PortfolioState {
  portfolios: TPortfolio[];
  portfolioCategory: string;
}

const initialState: PortfolioState = {
  portfolios: [],
  portfolioCategory: "All",
};

export const portfolioCategorySlice = createSlice({
  name: "portfolioCategory",
  initialState,
  reducers: {
    selectPortfolioCategory: (state, action: PayloadAction<string>) => {
      // console.log("In Redux Portfolio Category: ", action.payload);
      state.portfolioCategory = action.payload;
    },
    setPortfolios: (state, action) => {
      // console.log("Payload: ", action.payload);
      state.portfolios = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectPortfolioCategory, setPortfolios } =
  portfolioCategorySlice.actions;

export default portfolioCategorySlice.reducer;
