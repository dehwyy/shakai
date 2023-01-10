import * as React from "react"
import { ProfileWrapper, PostsWrapper } from "./Profile-styles"
import Posts from "./Posts/Posts"
import UserInfo from "./userInfo/UserInfo"
import { useTypedSelector } from "../../hooks/rtk-hooks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Profile = () => {
  const isAuth = useTypedSelector(state => state.currentUser.isAuth)
  const atoken = localStorage.getItem("accessToken")
  const navigate = useNavigate()
  useEffect(() => {
    !isAuth && !atoken && navigate("/")
  }, [isAuth])
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
