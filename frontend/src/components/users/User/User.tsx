import * as React from "react"
import {
  GridWrapper,
  GridButton,
  GridContent,
  ImgDiv,
  ContentDiv,
  UsernameWrapper,
  InfoWrapper,
  LocationSpan,
} from "./User-style"
import { PROFILE_IMAGE } from "../../../img/profile"
import Ico from "../../../UI/Ico"
import { FC } from "react"

const User: FC<inUserProps> = ({ location, profileImg, username }) => {
  return (
    <GridWrapper>
      <GridContent>
        <ImgDiv>
          <img src={profileImg || PROFILE_IMAGE} alt="Avatar" />
        </ImgDiv>
        <ContentDiv>
          <UsernameWrapper>{username || "THERE SHOULD BE USERNAME"}</UsernameWrapper>
          <InfoWrapper>
            <div data-testid="placeInfo">
              <Ico>place</Ico>
              <LocationSpan>{location || "There should be location"}</LocationSpan>
            </div>
          </InfoWrapper>
        </ContentDiv>
      </GridContent>
      <GridButton style={{ marginRight: 10 }}>Write</GridButton>
      <GridButton>More info...</GridButton>
    </GridWrapper>
  )
}

export default User
