import * as React from "react"
import { useEffect, useId, useState } from "react"
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
import updateUserInformation from "../../../requests/updateUserInfo"
import { EditFieldInput, EditInfoButton } from "./detailedUserInfo/DetailedUserInfo-styles"
import InputModal from "../../../UI/InputModal"

const ResponseUserInfo = () => {
  const [isOpen, setOpen] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [isModalError, setModalError] = useState(false)
  const [isEditLocation, setEditLocation] = useState(false)
  const [user, setUser] = useState<user>()
  const [inputValue, setInputValue] = useState(user?.location || "")
  const [userLocation, setUserLocation] = useState(user?.location)
  const [image, setImage] = useState(user?.profileImg)
  const [imageInput, setImageInput] = useState("")
  const dispatch = useTypedDispatch()
  const { id } = useParams()
  const inputId = useId()
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
    <UserWrapper>
      {isModalVisible && (
        <InputModal>
          <>
            <div>Past url to your desirable image</div>
            <div>
              <EditFieldInput
                id={inputId}
                value={imageInput}
                onChange={e => {
                  setImageInput(e.target.value)
                  setModalError(false)
                }}
              />
              {isModalError && <label htmlFor={inputId}>Link couldn&apos;t be treated as image</label>}
            </div>
            <div>
              <EditInfoButton
                onClick={async () => {
                  if (imageInput.match(/.[(jpg)(png)(jpeg)]$/)) {
                    await updateUserInformation(id || "error", [{ field: "profileImg", fieldNewValue: imageInput }])
                    setImage(imageInput)
                    setImageInput("")
                    setModalVisible(false)
                  } else {
                    setModalError(true)
                  }
                }}>
                Update
              </EditInfoButton>
            </div>
          </>
        </InputModal>
      )}
      <DivWrapper>
        <BackgroundImg src={BACKGROUND_IMAGE} alt="Background" />
        <ImgDiv>
          <div>
            <Img src={image || user?.profileImg || PROFILE_IMAGE}></Img>
            <ImgSpan onClick={() => setModalVisible(true)}>Change</ImgSpan>
          </div>
        </ImgDiv>
      </DivWrapper>
      <DivWrapper>
        <ShortDescription>{user?.username}</ShortDescription>
        <InfoDescription>
          <InfoDescriptionFlex>
            <div data-testid="placeInfo">
              <Ico>place</Ico>
              {isEditLocation ? (
                <EditFieldInput value={inputValue} onChange={e => setInputValue(e.target.value)} />
              ) : (
                <span>{userLocation || user?.location}</span>
              )}
              {editable &&
                (isEditLocation ? (
                  <Ico
                    eventListener={async () => {
                      setUserLocation(inputValue)
                      await updateUserInformation(id || "error", [{ field: "location", fieldNewValue: inputValue }])
                      setEditLocation(false)
                    }}>
                    check
                  </Ico>
                ) : (
                  <Ico eventListener={() => setEditLocation(true)}>edit</Ico>
                ))}
            </div>
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
