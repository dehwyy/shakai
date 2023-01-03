import * as React from "react"
import { lazy, useEffect, Suspense, useState } from "react"
import { BACKGROUND_IMAGE, PROFILE_IMAGE } from "../../../img/profile"
import Ico from "../../../UI/Ico"
import {
  BackgroundImg,
  Img,
  ImgDiv,
  ImgSpan,
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
import { uploadUser, user, updateUserInfo } from "../../../store/slices/users-store"
import UserModal from "./userModal/UserModal"

const Location = lazy(() => import("./userLocation/Location"))

const ResponseUserInfo = () => {
  const [isOpen, setOpen] = useState(false)
  const [isProfileModalVisible, setProfileModalVisible] = useState(false)
  const [isBackgroundModalVisible, setBackgroundModalVisible] = useState(false)
  const [user, setUser] = useState<user>()
  const [image, setImage] = useState(user?.profileImg)
  const [background, setBackground] = useState(user?.backgroundImg)
  const [imageInput, setImageInput] = useState("")
  const [backgroundInput, setBackgroundInput] = useState("")
  const dispatch = useTypedDispatch()
  const { id } = useParams()
  const [newId, setNewId] = useState(id)
  const userFromState = useTypedSelector(state => state.UsersStore.users.find(user => newId === user.id))
  if (userFromState && userFromState !== user) {
    setUser(userFromState)
  }
  useEffect(() => {
    if (id && !user) {
      getUser(id)
        .then(res => {
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
    } else if (id !== newId) {
      setNewId(id)
    }
  }, [])
  const editable = localStorage.getItem("currentUsername") === userFromState?.username
  return (
    <UserWrapper
      onClick={() => {
        setImageInput("")
        setProfileModalVisible(false)
      }}>
      {isProfileModalVisible && (
        <UserModal
          inputValue={imageInput}
          setInputValue={setImageInput}
          setModalVisible={setProfileModalVisible}
          setImage={setImage}
          field={"profileImg"}
        />
      )}
      {isBackgroundModalVisible && (
        <UserModal
          inputValue={backgroundInput}
          setInputValue={setBackgroundInput}
          setModalVisible={setBackgroundModalVisible}
          setImage={setBackground}
          field={"backgroundImg"}
        />
      )}
      <DivWrapper>
        <span>
          <BackgroundImg src={background || user?.backgroundImg || BACKGROUND_IMAGE} alt="Background" />
          <Ico
            eventListener={e => {
              e.stopPropagation()
              setBackgroundModalVisible(true)
            }}>
            edit
          </Ico>
        </span>
        <ImgDiv>
          <div>
            <Img src={image || user?.profileImg || PROFILE_IMAGE}></Img>
            <ImgSpan
              onClick={e => {
                e.stopPropagation()
                setProfileModalVisible(true)
              }}>
              Change
            </ImgSpan>
          </div>
        </ImgDiv>
      </DivWrapper>
      <DivWrapper>
        <ShortDescription>{user?.username}</ShortDescription>
        <InfoDescription>
          <InfoDescriptionFlex>
            <Suspense>
              {(user?.location || editable) && <Location location={user?.location as string} editable={editable} />}
            </Suspense>
            <div onClick={() => setOpen(prev => !prev)} data-testid="moreInfoBtn">
              Detailed Info
              <Ico>arrow_downward</Ico>
            </div>
          </InfoDescriptionFlex>
        </InfoDescription>
        {isOpen && (
          <InfoDescription data-testid="detailedInfo">
            {user && <DetailedUserInfo user={user} isEdit={editable} />}
          </InfoDescription>
        )}
      </DivWrapper>
    </UserWrapper>
  )
}

export default ResponseUserInfo
