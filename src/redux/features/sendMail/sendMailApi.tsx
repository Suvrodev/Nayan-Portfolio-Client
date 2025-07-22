import { baseApi } from "@/redux/api/baseApi";

const sendMailApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMail: builder.mutation({
      query: (data) => {
        return {
          url: "/mail",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useSendMailMutation } = sendMailApi;
