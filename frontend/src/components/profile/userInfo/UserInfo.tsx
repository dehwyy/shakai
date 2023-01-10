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
import Location from "./userLocation/Location"
import { useParams } from "react-router-dom"
import UserModal from "./userModal/UserModal"
import { useGetUserPageInfoQuery } from "../../../store/req/userPage-slice-api"
import DetailedUserInfo from "./detailedUserInfo/DetailedUserInfo"
import { useTypedSelector } from "../../../hooks/rtk-hooks"

const UserPageInfo = () => {
  const [isOpen, setOpen] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalField, setModalField] = useState<"profileImg" | "backgroundImg">("profileImg")
  const { id } = useParams()
  const { data: userPageInfo } = useGetUserPageInfoQuery(id as string)
  const editable = useTypedSelector(state => state.currentUser._id) === id
  const setBackgroundEditor = (name: typeof modalField, visible: boolean) => {
    setModalVisible(visible)
    setModalField(name)
  }
  return (
    <UserWrapper
      onClick={() => {
        setModalVisible(false)
      }}>
      {isModalVisible && <UserModal field={modalField} setModalVisible={setModalVisible} />}
      <DivWrapper>
        <span>
          <BackgroundImg src={userPageInfo?.backgroundImg || BACKGROUND_IMAGE} alt="Background" />
          {editable && (
            <Ico
              eventListener={e => {
                e.stopPropagation()
                setBackgroundEditor("backgroundImg", true)
              }}>
              edit
            </Ico>
          )}
        </span>
        <ImgDiv>
          <div>
            <Img src={userPageInfo?.profileImg || PROFILE_IMAGE}></Img>
            {editable && (
              <ImgSpan
                onClick={e => {
                  e.stopPropagation()
                  setBackgroundEditor("profileImg", true)
                }}>
                Change
              </ImgSpan>
            )}
          </div>
        </ImgDiv>
      </DivWrapper>
      <DivWrapper>
        <ShortDescription>{userPageInfo?.userId.username}</ShortDescription>
        <InfoDescription>
          <InfoDescriptionFlex>
            {(userPageInfo?.location || editable) && <Location editable={editable} />}
            <div onClick={() => setOpen(prev => !prev)} data-testid="moreInfoBtn">
              Detailed Info
              <Ico>arrow_downward</Ico>
            </div>
          </InfoDescriptionFlex>
        </InfoDescription>
        <InfoDescription data-testid="detailedInfo">
          {isOpen && userPageInfo && <DetailedUserInfo isEdit={editable} />}
        </InfoDescription>
      </DivWrapper>
    </UserWrapper>
  )
}

export default UserPageInfo
