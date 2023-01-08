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
    fetchPosts: build.query<postsResponse[], string>({
      query: userId => `/getPostsByUserId?userId=${userId}`,
      providesTags: () => ["Posts"],
      transformResponse: (res: { posts: postsResponse[] }) => res.posts.reverse(),
    }),
    deletePost: build.mutation<string, string>({
      query: postId => ({
        url: `/deletePost?postId=${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    createPost: build.mutation<string, postAttrs>({
      query: newPostData => ({
        url: `/createPost`,
        method: "POST",
        body: newPostData,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
})

export const { useFetchPostsQuery, useDeletePostMutation, useCreatePostMutation } = postsApi
export default postsApi
