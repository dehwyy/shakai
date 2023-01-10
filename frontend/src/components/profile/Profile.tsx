import * as React from "react"
import { ProfileWrapper, PostsWrapper } from "./Profile-styles"
import Posts from "./Posts/Posts"
import UserInfo from "./userInfo/UserInfo"
import { useTypedSelector } from "../../hooks/rtk-hooks"
import { useNavigate } from "react-router-dom"
import { useEffect, useInsertionEffect, useLayoutEffect } from "react"

const Profile = () => {
  const isAuth = useTypedSelector(state => state.currentUser.isAuth)
  const navigate = useNavigate()
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
