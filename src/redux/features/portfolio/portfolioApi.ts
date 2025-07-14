import { baseApi } from "@/redux/api/baseApi";

const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPortfolio: builder.query({
      query: () => {
        return {
          url: "/portfolio",
        };
      },
    }),
    getSinglePortfolio: builder.query({
      query: (title) => {
        return {
          url: `/portfolio/${title}`,
        };
      },
    }),
  }),
});

export const { useGetAllPortfolioQuery, useGetSinglePortfolioQuery } =
  portfolioApi;
