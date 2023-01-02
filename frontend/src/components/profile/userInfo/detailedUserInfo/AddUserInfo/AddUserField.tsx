import * as React from "react"
import { AddUserFieldWrapper, UserInfoChoiceWrapper, UserInfoChoice } from "./AddUserField-style"
import { FC, useState } from "react"
import { user } from "../../../../../store/slices/users-store"

type argT = Omit<user, "username" | "id" | "email" | "friends">
interface inAddUserField {
  setData: (arg: Partial<Record<keyof argT, string>>) => void
  user: user
}
const AddUserField: FC<inAddUserField> = ({ setData, user }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <AddUserFieldWrapper onClick={() => setOpen(prev => !prev)}>
        <span>Edit info</span>
      </AddUserFieldWrapper>
      {isOpen && (
        <UserInfoChoiceWrapper>
          {!user.dateOfBirth && (
            <UserInfoChoice onClick={() => setData({ dateOfBirth: " " })}>dateOfBirth</UserInfoChoice>
          )}
          {!user.interests && <UserInfoChoice onClick={() => setData({ interests: " " })}>interests</UserInfoChoice>}
          {!user.education && <UserInfoChoice onClick={() => setData({ education: " " })}>education</UserInfoChoice>}
          {!user.activity && <UserInfoChoice onClick={() => setData({ activity: " " })}>activity</UserInfoChoice>}
          {!user.info && <UserInfoChoice onClick={() => setData({ info: " " })}>info</UserInfoChoice>}
          {!user.favouriteGames && (
            <UserInfoChoice onClick={() => setData({ favouriteGames: " " })}>FavouriteGames</UserInfoChoice>
          )}
          {!user.favouriteBooks && (
            <UserInfoChoice onClick={() => setData({ favouriteBooks: " " })}>FavouriteBooks</UserInfoChoice>
          )}
          {!user.favouriteMusic && (
            <UserInfoChoice onClick={() => setData({ favouriteMusic: " " })}>FavouriteMusic</UserInfoChoice>
          )}
        </UserInfoChoiceWrapper>
      )}
    </>
  )
}

export default AddUserField
