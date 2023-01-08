import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface userMainDataResponse {
  _id: string
  email: string
  username: string
}

type userPageFullInfoKeysT =
  | "_id"
  | "briefInfo"
  | "education"
  | "dateOfBirth"
  | "interests"
  | "activity"
  | "favouriteMusic"
  | "favouriteBooks"
  | "favouriteGames"
  | "info"
  | "profileImg"
  | "backgroundImg"
  | "location"

type userFullInfoT = { [key in userPageFullInfoKeysT]: string } & { userId: userMainDataResponse }

const userPageApi = createApi({
  reducerPath: "api/userPage",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:727/userPage",
  }),
  tagTypes: ["userPageInfo"],
  endpoints: build => ({
    getUserPageInfo: build.query<userFullInfoT, string>({
      query: userId => `/getUserPageInfo?id=${userId}`,
      providesTags: () => ["userPageInfo"],
    }),
    updateUserPageInfo: build.mutation<unknown, unknown>({
      query: data => ({
        url: "/editUserPageInfo",
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["userPageInfo"],
    }),
  }),
})
export const { useGetUserPageInfoQuery } = userPageApi
export default userPageApi
