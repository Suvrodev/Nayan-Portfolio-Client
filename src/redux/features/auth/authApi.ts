import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (adminInfo) => ({
        url: "/login",
        method: "POST",
        body: adminInfo,
      }),
    }),
    registration: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),

    getAllAdmin: builder.query({
      query: () => {
        return {
          url: "/auth/all-admin",
        };
      },
    }),
    getSinglePortfolio: builder.query({
      query: (id) => {
        return {
          url: `/portfolioo/${id}`,
        };
      },
    }),
    deletePortfolio: builder.mutation({
      query: (_id) => {
        return {
          url: `/portfolioo/${_id}`,
          method: "DELETE",
        };
      },
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
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useGetAllAdminQuery,
} = authApi;
