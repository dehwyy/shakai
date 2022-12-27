import React, { useState } from "react"
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

const UserInfo = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <UserWrapper>
      <DivWrapper>
        <BackgroundImg
          src={BACKGROUND_IMAGE}
          alt="Background"
        />
        <ImgDiv>
          <Img
            src={PROFILE_IMAGE}
            alt="Profile"
          ></Img>
        </ImgDiv>
      </DivWrapper>
      <DivWrapper>
        <ShortDescription>
          {"There should be user.shortDescription"}
        </ShortDescription>
        <InfoDescription>
          <InfoDescriptionFlex>
            <div data-testid="placeInfo">
              <Ico>place</Ico>
              <span>{"There should be location"}</span>
            </div>
            <div
              onClick={() => setOpen((prev) => !prev)}
              data-testid="moreInfoBtn"
            >
              Detailed Info
              <Ico>arrow_downward</Ico>
            </div>
          </InfoDescriptionFlex>
        </InfoDescription>
        {isOpen && (
          <InfoDescription data-testid="detailedInfo">
            <DetailedUserInfo />
          </InfoDescription>
        )}
      </DivWrapper>
    </UserWrapper>
  )
}

export default UserInfo
