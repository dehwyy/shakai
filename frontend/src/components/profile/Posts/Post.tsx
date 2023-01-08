import * as React from "react"
import { FC } from "react"
import { PostDivWrapper, PostHeader, PostBody, PostMessage } from "./Posts-styled"
import { PROFILE_IMAGE } from "../../../img/profile"
import Ico from "../../../UI/Ico"
import { useCreatePostMutation } from "../../../store/req/posts-slice.api"

interface inPostProps {
  img: string | undefined
  profileImg: string | undefined
  text: string | undefined
  username: string | undefined
  date: string | undefined
  currentId: string
}

const Post: FC<inPostProps> = ({ currentId, img, profileImg, username, date, text }) => {
  const [deletePostApi, {}] = useCreatePostMutation()
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
        <Ico eventListener={() => deletePostApi(currentId)}>delete</Ico>
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
