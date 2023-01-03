import * as React from "react"
import { DetailedUserInfoWrapper } from "./DetailedUserInfo-styles"
import { user } from "../../../../store/slices/users-store"
import { FC, useState } from "react"
import { InfoTemplate } from "./AdditionalInfoComponents"
import AddUserField from "./AddUserInfo/AddUserField"
import { argT, inDetailedUserInfoProps } from "../user"

const DetailedUserInfo: FC<inDetailedUserInfoProps> = ({ user, isEdit = false }) => {
  const [userData, setUserData] = useState<user>(user)
  const setData = (arg: Partial<Record<keyof argT, string>>) => {
    setUserData(prev => {
      return { ...prev, ...arg }
    })
  }
  const hasAnyEmptyFields = Object.keys(userData).find(
    userKey => !userData[userKey as keyof user] && userKey !== "friends",
  )
  return (
    <DetailedUserInfoWrapper>
      {userData.education && (
        <InfoTemplate isEdit={isEdit} ico={"school"} param={userData.education} paramString={"education"} />
      )}
      {userData.info && (
        <InfoTemplate isEdit={isEdit} ico={"assignment_ind"} param={userData.info} paramString={"info"} />
      )}
      {userData.activity && (
        <InfoTemplate isEdit={isEdit} ico={"chrome_reader_mode"} param={userData.activity} paramString={"activity"} />
      )}
      {userData.interests && (
        <InfoTemplate isEdit={isEdit} ico={"group"} param={userData.interests} paramString={"interests"} />
      )}
      {userData.dateOfBirth && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"cake"}
          param={userData.dateOfBirth}
          paramString={"dateOfBirth"}
          customText={"Birthday"}
        />
      )}
      {userData.favouriteMusic && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"bookmark"}
          param={userData.favouriteMusic}
          paramString={"favouriteMusic"}
          customText={"Favourite music"}
        />
      )}
      {userData.favouriteGames && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"videogame_asset"}
          param={userData.favouriteGames}
          paramString={"favouriteGames"}
          customText={"Favourite games"}
        />
      )}
      {userData.favouriteBooks && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"bookmark"}
          param={userData.favouriteBooks}
          paramString={"favouriteBooks"}
          customText={"Favourite books"}
        />
      )}
      {hasAnyEmptyFields && <AddUserField setData={setData} user={userData} />}
    </DetailedUserInfoWrapper>
  )
}

export default DetailedUserInfo
