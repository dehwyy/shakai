import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query"

export const baseQueryWithReAuth =
  (url: string): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
  async (args, api, extraOptions) => {
    const base = (token: string) =>
      fetchBaseQuery({
        baseUrl: url,
        prepareHeaders: headers => {
          headers.set("Authorization", token)
        },
        credentials: "include",
      })
    let result = await base(`Bearer ${localStorage.getItem("accessToken")}` || " ")(args, api, extraOptions)
    if ((result.error && result.error.status === 401) || (result.error && result.error.status === 307)) {
      await fetchBaseQuery({
        baseUrl: "http://localhost:727/auth/verifyUser",
        prepareHeaders: headers => {
          headers.set("Authorization", `Bearer ${localStorage.getItem("accessToken")}` || " ")
        },
        credentials: "include",
      })(args, api, extraOptions)
      result = await base(`Bearer ${localStorage.getItem("accessToken")}` || " ")(args, api, extraOptions)
    }
    return result
  }
