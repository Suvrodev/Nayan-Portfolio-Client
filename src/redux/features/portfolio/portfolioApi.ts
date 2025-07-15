import { baseApi } from "@/redux/api/baseApi";

const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPortfolio: builder.query({
      query: () => {
        return {
          url: "/portfolioo",
        };
      },
      providesTags: ["portfolio"],
    }),
    getSinglePortfolio: builder.query({
      query: (title) => {
        return {
          url: `/portfolioo/${title}`,
        };
      },
      providesTags: ["portfolio"],
    }),
    deletePortfolio: builder.mutation({
      query: (_id) => {
        return {
          url: `/portfolioo/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["portfolio"],
    }),
  }),
});

export const {
  useGetAllPortfolioQuery,
  useGetSinglePortfolioQuery,
  useDeletePortfolioMutation,
} = portfolioApi;
