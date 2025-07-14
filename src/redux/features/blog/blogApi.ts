import { baseApi } from "@/redux/api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => {
        return {
          url: "/blog",
        };
      },
    }),
    getSinglePortfolio: builder.query({
      query: (title) => {
        return {
          url: `/blog/${title}`,
        };
      },
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSinglePortfolioQuery } = blogApi;
