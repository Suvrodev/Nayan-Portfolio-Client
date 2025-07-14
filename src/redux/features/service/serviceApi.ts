import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      query: () => {
        return {
          url: "/service",
        };
      },
      providesTags: ["service"],
    }),
    getSingleService: builder.query({
      query: (_id) => {
        return {
          url: `/service/${_id}`,
        };
      },
    }),
    deleteService: builder.mutation({
      query: (_id) => {
        return {
          url: `/service/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useDeleteServiceMutation,
} = serviceApi;
