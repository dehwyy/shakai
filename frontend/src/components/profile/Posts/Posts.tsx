import * as React from "react"
import { PostsDivWrapper, PostCreate } from "./Posts-styled"
import Post from "./Post"
import { useTypedDispatch, useTypedSelector } from "../../../store/typed-hooks"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { postAttrs, updateUserInfo } from "../../../store/slices/users-store"
import getPosts from "../../../requests/getPosts"
import { useForm } from "react-hook-form"

const Posts = () => {
  const { id } = useParams()
  const userFromState = useTypedSelector(state => state.UsersStore.users.find(user => id === user.id))
  const dispatch = useTypedDispatch()
  const [posts, setPosts] = useState<postAttrs[] | undefined>(userFromState?.posts)
  const { reset, handleSubmit, register } = useForm()
  useEffect(() => {
    //prettier-ignore
    (async () => {
      if (id) {
        const posts = await getPosts(id)
        setPosts(posts)
        dispatch({ type: updateUserInfo, payload: { posts, id } })
      }
    })()
  }, [])
  const submitHandler = (data: any) => {
    console.log(data)
    reset()
  }
  return (
    <PostsDivWrapper>
      <PostCreate>
        <form onSubmit={handleSubmit(submitHandler)}>
          <textarea {...register("textInput")} />
          <button type="submit">Post</button>
        </form>
      </PostCreate>
      {posts &&
        posts.map(post => (
          <Post
            key={post.id}
            profileImg={userFromState?.profileImg}
            img={post?.postImage}
            username={userFromState?.username}
            text={post?.postText}
            date={post?.dateOfCreate}
          />
        ))}
    </PostsDivWrapper>
  )
}

export default Posts
