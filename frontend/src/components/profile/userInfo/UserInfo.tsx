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
import { useParams } from "react-router-dom"
import UserModal from "./userModal/UserModal"
import UserData from "../../../requests/UserData"
import { useGetUserPageInfoQuery } from "../../../store/req/userPage-slice-api"

const Location = lazy(() => import("./userLocation/Location"))

const ResponseUserInfo = () => {
  const [isOpen, setOpen] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalField, setModalField] = useState<"profileImg" | "backgroundImg">("")
  const { id } = useParams()
  const { data: userPageInfo } = useGetUserPageInfoQuery(id as string)
  console.log(userPageInfo)
  const editable = localStorage.getItem("userId") === id

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
        <ShortDescription>{userPageInfo?.username}</ShortDescription>
        <InfoDescription>
          <InfoDescriptionFlex>
            <Suspense>
              {(userPageInfo?.location || editable) && (
                <Location location={userPageInfo?.location as string} editable={editable} />
              )}
            </Suspense>
            <div onClick={() => setOpen(prev => !prev)} data-testid="moreInfoBtn">
              Detailed Info
              <Ico>arrow_downward</Ico>
            </div>
          </InfoDescriptionFlex>
        </InfoDescription>
        <InfoDescription data-testid="detailedInfo">
          {isOpen && userPageInfo && <DetailedUserInfo user={userPageInfo} isEdit={editable} />}
        </InfoDescription>
      </DivWrapper>
    </UserWrapper>
  )
}

export default ResponseUserInfo
