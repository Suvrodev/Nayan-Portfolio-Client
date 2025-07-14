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
    getSingleBlog: builder.query({
      query: (title) => {
        return {
          url: `/blog/${title}`,
        };
      },
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSingleBlogQuery } = blogApi;
