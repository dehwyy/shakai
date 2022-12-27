import React from "react"
import { DetailedUserInfoWrapper } from "./DetailedUserInfo-styles"
import Ico from "../../../../UI/Ico"

const DetailedUserInfo = () => {
  return (
    <DetailedUserInfoWrapper>
      <div>
        <Ico ExtraComponent={() => <span>Education:</span>}>school</Ico>
        <span>{"There should be text if the info was given by user"}</span>
      </div>
      <div>
        <Ico ExtraComponent={() => <span>Friends:</span>}>group</Ico>
        <span>{"There should be several friends' icons"}</span>
      </div>
    </DetailedUserInfoWrapper>
  )
}

export default DetailedUserInfo
