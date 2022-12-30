import * as React from "react"
import { useEffect, useState } from "react"
import { BACKGROUND_IMAGE, PROFILE_IMAGE } from "../../../img/profile"
import Ico from "../../../UI/Ico"
import {
  BackgroundImg,
  Img,
  ImgDiv,
  InfoDescription,
  InfoDescriptionFlex,
  ShortDescription,
  UserWrapper,
} from "./UserInfo-styles"
import { DivWrapper } from "../Profile-styles"
import DetailedUserInfo from "./detailedUserInfo/DetailedUserInfo"
import { useTypedDispatch, useTypedSelector } from "../../../store/typed-hooks"
import getUser from "../../../requests/getUser"
import getUserFullInfo from "../../../requests/getUserFullInfo"
import { useParams } from "react-router-dom"
import {
  updateUserInfo,
  uploadUser,
  user,
} from "../../../store/slices/users-store"
import { getFileInfo } from "prettier"
const ResponseUserInfo = () => {
  const [isOpen, setOpen] = useState(false)
  const [user, setUser] = useState<user>()
  const dispatch = useTypedDispatch()
  const { id } = useParams()
  const userFromState = useTypedSelector(state =>
    state.UsersStore.users.find(user => id === user.id),
  )
  if (userFromState && userFromState !== user) {
    setUser(userFromState)
  }
  useEffect(() => {
    if (id && !user) {
      getUser(id)
        .then(res => {
          console.log(res.data._id)
          dispatch({
            type: uploadUser,
            payload: {
              id: res.data._id,
              email: res.data.email,
              username: res.data.username,
            },
          })
          setUser({
            id: res.data._id,
            email: res.data.email,
            username: res.data.username,
          })
        })
        .then(() => {
          getUserFullInfo(id).then(res => {
            delete res.data._id
            delete res.data.__v
            const id = res.data.userId
            delete res.data.userId
            dispatch({ type: updateUserInfo, payload: { ...res.data, id } })
          })
        })
    }
  }, [])
  return (
    <UserWrapper>
      <DivWrapper>
        <BackgroundImg src={BACKGROUND_IMAGE} alt="Background" />
        <ImgDiv>
          <Img src={user?.profileImg} alt="Profile"></Img>
        </ImgDiv>
      </DivWrapper>
      <DivWrapper>
        <ShortDescription>{user?.username}</ShortDescription>
        <InfoDescription>
          <InfoDescriptionFlex>
            <div data-testid="placeInfo">
              <Ico>place</Ico>
              <span>{user?.location}</span>
            </div>
            <div
              onClick={() => setOpen(prev => !prev)}
              data-testid="moreInfoBtn">
              Detailed Info
              <Ico>arrow_downward</Ico>
            </div>
          </InfoDescriptionFlex>
        </InfoDescription>
        {isOpen && (
          <InfoDescription data-testid="detailedInfo">
            {user && <DetailedUserInfo user={user} />}
          </InfoDescription>
        )}
      </DivWrapper>
    </UserWrapper>
  )
}

export default ResponseUserInfo
