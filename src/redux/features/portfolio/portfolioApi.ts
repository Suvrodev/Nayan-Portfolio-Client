import { baseApi } from "@/redux/api/baseApi";

const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPortfolio: builder.query({
      query: () => {
        return {
          url: "/portfolioo",
        };
      },
    }),
    getSinglePortfolio: builder.query({
      query: (title) => {
        return {
          url: `/portfolioo/${title}`,
        };
      },
    }),
  }),
});

export const { useGetAllPortfolioQuery, useGetSinglePortfolioQuery } =
  portfolioApi;
