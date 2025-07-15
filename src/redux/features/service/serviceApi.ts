import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addService: builder.mutation({
      query: (data) => {
        return {
          url: "/service",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["service"],
    }),
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
    updateService: builder.mutation({
      query: ({ _id, updatedData }) => {
        console.log("Update Date: ", updatedData);
        return {
          url: `/service/${_id}`,
          method: "PATCH",
          body: updatedData,
        };
      },
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = serviceApi;
