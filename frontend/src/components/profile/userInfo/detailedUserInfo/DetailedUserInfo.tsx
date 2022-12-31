import * as React from "react"
import { DetailedUserInfoWrapper } from "./DetailedUserInfo-styles"
import { user } from "../../../../store/slices/users-store"
import { FC } from "react"
import { InfoTemplate } from "./AdditionalInfoComponents"

const DetailedUserInfo: FC<{ user: user; isEdit: boolean }> = ({ user, isEdit = false }) => {
  return (
    <DetailedUserInfoWrapper>
      {user.education && (
        <InfoTemplate isEdit={isEdit} ico={"school"} param={user.education} paramString={"education"} />
      )}
      {user.info && <InfoTemplate isEdit={isEdit} ico={"assignment_ind"} param={user.info} paramString={"info"} />}
      {user.activity && (
        <InfoTemplate isEdit={isEdit} ico={"chrome_reader_mode"} param={user.activity} paramString={"activity"} />
      )}
      {user.interests && (
        <InfoTemplate isEdit={isEdit} ico={"group"} param={user.interests} paramString={"interests"} />
      )}
      {user.dateOfBirth && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"cake"}
          param={user.dateOfBirth}
          paramString={"dateOfBirth"}
          customText={"Birthday"}
        />
      )}
      {user.favouriteMusic && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"bookmark"}
          param={user.favouriteMusic}
          paramString={"favoriteMusic"}
          customText={"Favourite music"}
        />
      )}
      {user.favouriteGames && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"videogame_asset"}
          param={user.favouriteGames}
          paramString={"favoriteGames"}
          customText={"Favourite games"}
        />
      )}
      {user.favouriteBooks && (
        <InfoTemplate
          isEdit={isEdit}
          ico={"bookmark"}
          param={user.favouriteBooks}
          paramString={"favoriteBooks"}
          customText={"Favourite books"}
        />
      )}
    </DetailedUserInfoWrapper>
  )
}

export default DetailedUserInfo
