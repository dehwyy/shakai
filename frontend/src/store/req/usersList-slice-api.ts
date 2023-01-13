import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQueryWithReAuth } from "./refetchBaseQuery"

interface inUserListRes {
  _id: string
  userId: {
    _id: string
    username: string
  }
  briefInfo: string
  profileImg: string
  location: string
}
const usersListSliceApi = createApi({
  reducerPath: "api/usersList",
  baseQuery: baseQueryWithReAuth("http://localhost:727/usersList"),
  endpoints: build => ({
    getAllUsers: build.query<inUserListRes[], void>({
      query: () => ({
        url: "/allUsers",
        method: "GET",
      }),
    }),
  }),
})
export const { useGetAllUsersQuery } = usersListSliceApi
export default usersListSliceApi
