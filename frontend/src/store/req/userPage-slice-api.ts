import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseQueryWithReAuth } from "./refetchBaseQuery"

const userPageApi = createApi({
  reducerPath: "api/userPage",
  baseQuery: baseQueryWithReAuth("http://localhost:727/userPage"),
  tagTypes: ["userPageInfo"],
  endpoints: build => ({
    getUserPageInfo: build.query<userFullInfoT, string>({
      query: userId => `/getUserPageInfo?id=${userId}`,
      providesTags: () => ["userPageInfo"],
    }),
    updateUserPageInfo: build.mutation<void, userUpdateFieldRequest>({
      query: data => ({
        url: "/editUserPageInfo",
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["userPageInfo"],
    }),
  }),
})
export const { useGetUserPageInfoQuery, useUpdateUserPageInfoMutation } = userPageApi
export default userPageApi
