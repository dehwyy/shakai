import * as React from "react"
import { FC } from "react"
import { PostDivWrapper, PostHeader, PostBody, PostMessage } from "./Posts-styled"
import { PROFILE_IMAGE } from "../../../img/profile"

interface inPostProps {
  img?: string
  profileImg?: string | undefined
  text?: string
  username?: string | undefined
  date: string
}

const Post: FC<inPostProps> = ({ img, profileImg, username, date, text }) => {
  return (
    <PostDivWrapper data-testid="post">
      <PostHeader>
        <img src={profileImg || PROFILE_IMAGE} alt={"Avatar"} />
        <span data-testid="username">{username || ""}</span>
        <span data-testid="date">{date}</span>
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
