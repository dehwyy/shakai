import * as React from "react"
import { ProfileWrapper, PostsWrapper } from "./Profile-styles"
import Posts from "./Posts/Posts"
import UserInfo from "./userInfo/UserInfo"

const Profile = () => {
  return (
    <ProfileWrapper>
      <UserInfo />
      <PostsWrapper>
        <Posts />
      </PostsWrapper>
    </ProfileWrapper>
  )
}

export default Profile
