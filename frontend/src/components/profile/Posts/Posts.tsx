import * as React from "react"
import { PostsDivWrapper } from "./Posts-styled"
import Post from "./Post"
import { RANDOM_IMAGE } from "../../../img/profile"
import { useTypedSelector } from "../../../store/typed-hooks"
import { useParams } from "react-router-dom"

const Posts = () => {
  const { id } = useParams()
  const userFromState = useTypedSelector(state => state.UsersStore.users.find(user => id === user.id))
  return (
    <PostsDivWrapper>
      <Post img={RANDOM_IMAGE} profileImg={userFromState?.profileImg} username={userFromState?.username} />
      <Post profileImg={userFromState?.profileImg} />
    </PostsDivWrapper>
  )
}

export default Posts
