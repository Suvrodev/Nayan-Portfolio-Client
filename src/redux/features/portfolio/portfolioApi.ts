import { baseApi } from "@/redux/api/baseApi";

const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPortfolio: builder.mutation({
      query: (data) => {
        return {
          url: "/portfolioo",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["service"],
    }),
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
          url: `/portfolioo/title/${title}`,
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
    updatePortfolio: builder.mutation({
      query: ({ _id, updatedData }) => {
        console.log("Update portfolio data: ", updatedData);
        return {
          url: `/portfolioo/${_id}`,
          method: "PATCH",
          body: updatedData,
        };
      },
      invalidatesTags: ["portfolio"],
    }),
  }),
});

export const {
  useAddPortfolioMutation,
  useGetAllPortfolioQuery,
  useGetSinglePortfolioQuery,
  useDeletePortfolioMutation,
  useUpdatePortfolioMutation,
} = portfolioApi;
