import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      query: () => {
        return {
          url: "/service",
        };
      },
    }),
    getSingleService: builder.query({
      query: (_id) => {
        return {
          url: `/service/${_id}`,
        };
      },
    }),
  }),
});

export const { useGetAllServiceQuery, useGetSingleServiceQuery } = serviceApi;
