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
  }),
});

export const { useLoginMutation } = authApi;
