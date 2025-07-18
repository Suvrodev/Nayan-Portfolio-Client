import { baseApi } from "@/redux/api/baseApi";

const resumeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // addPortfolio: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/portfolioo",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["service"],
    // }),
    // getAllPortfolio: builder.query({
    //   query: () => {
    //     return {
    //       url: "/portfolioo",
    //     };
    //   },
    //   providesTags: ["portfolio"],
    // }),
    getSingleResume: builder.query({
      query: () => {
        return {
          url: "/resume/687a5ad4ff7cd1d52b4db123",
        };
      },
      providesTags: ["resume"],
    }),
    // deletePortfolio: builder.mutation({
    //   query: (_id) => {
    //     return {
    //       url: `/portfolioo/${_id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["portfolio"],
    // }),
    updateResume: builder.mutation({
      query: (updatedData) => {
        console.log("Update portfolio data: ", updatedData);
        return {
          url: "/resume/687a5ad4ff7cd1d52b4db123",
          method: "PATCH",
          body: updatedData,
        };
      },
      invalidatesTags: ["resume"],
    }),
  }),
});

export const { useGetSingleResumeQuery, useUpdateResumeMutation } = resumeApi;
