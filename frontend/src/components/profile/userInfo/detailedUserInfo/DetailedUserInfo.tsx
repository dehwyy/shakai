import * as React from "react"
import { DetailedUserInfoWrapper } from "./DetailedUserInfo-styles"
import { user } from "../../../../store/slices/users-store"
import { FC, useState } from "react"
import { InfoTemplate } from "./AdditionalInfoComponents"
import AddUserField from "./AddUserInfo/AddUserField"
type argT = Omit<user, "username" | "id" | "email">
const DetailedUserInfo: FC<{ user: user; isEdit: boolean }> = ({ user, isEdit = false }) => {
  const [userData, setUserData] = useState<user>(user)
  const setData = (arg: Record<keyof argT, string>) => {
    setUserData(prev => {
      console.log({ ...prev, ...arg })
      return { ...prev, ...arg }
    })
  }
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
      <AddUserField setData={setData} user={userData} />
    </DetailedUserInfoWrapper>
  )
}

export default DetailedUserInfo
