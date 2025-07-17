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
    deleteBlog: builder.mutation({
      query: (_id) => {
        return {
          url: `/blog/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ _id, updatedData }) => {
        console.log("Update portfolio data: ", updatedData);
        return {
          url: `/blog/update/${_id}`,
          method: "PATCH",
          body: updatedData,
        };
      },
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useAddBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogApi;
