import * as React from "react"
import {
  GridWrapper,
  GridButton,
  GridContent,
  ImgDiv,
  ContentDiv,
  UsernameWrapper,
  InfoWrapper,
} from "./User-style"
import { PROFILE_IMAGE } from "../../../img/profile"
import Ico from "../../../UI/Ico"

const User = () => {
  return (
    <GridWrapper>
      <GridContent>
        <ImgDiv>
          <img
            src={PROFILE_IMAGE}
            alt="Avatar"
          />
        </ImgDiv>
        <ContentDiv>
          <UsernameWrapper>{"THERE SHOULD BE USERNAME"}</UsernameWrapper>
          <InfoWrapper>
            <div data-testid="placeInfo">
              <Ico>place</Ico>
              <span>{"There should be location"}</span>
            </div>
          </InfoWrapper>
        </ContentDiv>
      </GridContent>
      <GridButton>More info...</GridButton>
    </GridWrapper>
  )
}

export default User
