import * as React from "react"
import { DetailedUserInfoWrapper } from "./DetailedUserInfo-styles"
import Ico from "../../../../UI/Ico"
import { user } from "../../../../store/slices/users-store"
import { FC } from "react"
import {
  Activity,
  DateOfBirth,
  Education,
  FavouriteBooks,
  FavouriteGames,
  FavouriteMusic,
  Info,
  Interests,
} from "./AdditionalInfoComponents"

const DetailedUserInfo: FC<{ user: user }> = ({ user }) => {
  return (
    <DetailedUserInfoWrapper>
      {user.education && <Education education={user.education} />}
      {user.info && <Info info={user.info} />}
      {user.activity && <Activity activity={user.activity} />}
      {user.interests && <Interests interests={user.interests} />}
      {user.dateOfBirth && <DateOfBirth dateOfBirth={user.dateOfBirth} />}
      {user.favouriteMusic && <FavouriteMusic favouriteMusic={user.favouriteMusic} />}
      {user.favouriteGames && <FavouriteGames favouriteGames={user.favouriteGames} />}
      {user.favouriteBooks && <FavouriteBooks favouriteBooks={user.favouriteBooks} />}
    </DetailedUserInfoWrapper>
  )
}

export default DetailedUserInfo
