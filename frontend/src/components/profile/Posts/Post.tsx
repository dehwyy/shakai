import * as React from "react"
import { FC } from "react"
import { PostDivWrapper, PostHeader, PostBody, PostMessage } from "./Posts-styled"
import { PROFILE_IMAGE } from "../../../img/profile"
import Ico from "../../../UI/Ico"
import { postAttrs } from "../../../store/slices/users-store"
import UserData from "../../../requests/UserData"

interface inPostProps {
  img?: string
  profileImg?: string | undefined
  text?: string
  username?: string | undefined
  date?: string | undefined
  currentId?: string
  setPosts: React.Dispatch<React.SetStateAction<postAttrs[] | undefined>>
}

const Post: FC<inPostProps> = ({ setPosts, currentId, img, profileImg, username, date, text }) => {
  const deleteHandler = async () => {
    const response = await UserData.deletePost(currentId as string)
    setPosts(prev => {
      if (prev) {
        return prev.filter(post => post.id !== currentId)
      }
    })
  }

  return (
    <PostDivWrapper data-testid="post">
      <PostHeader>
        <img src={profileImg || PROFILE_IMAGE} alt={"Avatar"} />
        <span data-testid="username" style={{ marginLeft: "20px" }}>
          {username || ""}
        </span>
        <span data-testid="date" style={{ margin: "3px 0 0 20px" }}>
          {date}
        </span>
        <Ico eventListener={deleteHandler}>delete</Ico>
      </PostHeader>
      <PostBody>
        <PostMessage>
          {text?.split("\n").map((part, index) => (
            <span key={index}>
              {part}
              <br />
            </span>
          ))}
        </PostMessage>
        {img?.match(/[{jpg}{png}{jpeg}]$/) && <img src={img} />}
      </PostBody>
    </PostDivWrapper>
  )
}

export default Post
