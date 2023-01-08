import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface postsResponse {
  _id: string
  userId: string
  dateOfCreate: string
  postText?: string
  postImage?: string
}

const postsApi = createApi({
  reducerPath: "api/posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:727/posts",
  }),
  tagTypes: ["Posts"],
  endpoints: build => ({
    fetchPosts: build.query<{ posts: postsResponse[] }, string>({
      query: userId => `/getPostsByUserId?userId=${userId}`,
      providesTags: () => ["Posts"],
    }),
    createPost: build.mutation<string, string>({
      query: postId => ({
        url: `/deletePost?postId=${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
})

export const { useFetchPostsQuery, useCreatePostMutation } = postsApi
export default postsApi
