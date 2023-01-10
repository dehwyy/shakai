import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const currentUserApi = createApi({
  reducerPath: "api/currentUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:727/auth",
    prepareHeaders: headers => {
      headers.set("Authorization", `Bearer ${localStorage.getItem("accessToken")}` || " ")
    },
    credentials: "include",
  }),
  tagTypes: ["currentUserData"],
  endpoints: build => ({
    verifyToken: build.query<userMainDataResponse, any>({
      query: () => ({
        url: "/verifyUser",
      }),
      transformResponse: (res: verifyToken & inLoginResponse) => {
        localStorage.setItem("accessToken", res.accessToken)
        return res.user
      },
      providesTags: ["currentUserData"],
    }),
    login: build.mutation<userMainDataResponse, inLoginData>({
      query: loginData => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
      transformResponse: (res: inLoginResponse & verifyToken) => {
        localStorage.setItem("accessToken", res.accessToken)
        return res.user
      },
      invalidatesTags: ["currentUserData"],
    }),
    registration: build.mutation<number, Required<inLoginData>>({
      query: userData => ({
        url: "/registration",
        method: "POST",
        body: userData,
      }),
      transformResponse: (res: { statusCode: number }) => res.statusCode,
      invalidatesTags: ["currentUserData"],
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "DELETE",
      }),
    }),
  }),
})
export const { useVerifyTokenQuery, useLoginMutation, useRegistrationMutation, useLogoutMutation } = currentUserApi
export default currentUserApi
