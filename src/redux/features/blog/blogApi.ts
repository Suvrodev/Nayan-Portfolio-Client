import { baseApi } from "@/redux/api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (data) => {
        return {
          url: "/blog",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["blog"],
    }),
    getAllBlogs: builder.query({
      query: () => {
        return {
          url: "/blog",
        };
      },
      providesTags: ["blog"],
    }),
    getSingleBlog: builder.query({
      query: (_id) => {
        return {
          url: `/blog/${_id}`,
        };
      },
    }),
  }),
});

export const {
  useAddBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
} = blogApi;
