import * as React from "react"
import { AddUserFieldWrapper, UserInfoChoiceWrapper, UserInfoChoise } from "./AddUserField-style"
import { FC, useState } from "react"
import { user } from "../../../../../store/slices/users-store"

type argT = keyof Omit<user, "username" | "id" | "email">
interface inAddUserField {
  setData: (arg: { [argT: string]: string }) => void
  user: user
}
const AddUserField: FC<inAddUserField> = ({ setData, user }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <AddUserFieldWrapper onClick={() => setOpen(prev => !prev)}>
        <span>Add info field</span>
      </AddUserFieldWrapper>
      {isOpen && (
        <UserInfoChoiceWrapper>
          {!user.dateOfBirth && (
            <UserInfoChoise onClick={() => setData({ dateOfBirth: " " })}>dateOfBirth</UserInfoChoise>
          )}
          {!user.interests && <UserInfoChoise onClick={() => setData({ interests: " " })}>interests</UserInfoChoise>}
          {!user.education && <UserInfoChoise onClick={() => setData({ education: " " })}>education</UserInfoChoise>}
          {!user.activity && <UserInfoChoise onClick={() => setData({ activity: " " })}>activity</UserInfoChoise>}
          {!user.info && <UserInfoChoise onClick={() => setData({ info: " " })}>info</UserInfoChoise>}
          {!user.favouriteGames && (
            <UserInfoChoise onClick={() => setData({ favouriteGames: " " })}>FavouriteGames</UserInfoChoise>
          )}
          {!user.favouriteGames && (
            <UserInfoChoise onClick={() => setData({ FavouriteBooks: " " })}>FavouriteBooks</UserInfoChoise>
          )}
          {!user.favouriteMusic && (
            <UserInfoChoise onClick={() => setData({ FavouriteMusic: " " })}>FavouriteMusic</UserInfoChoise>
          )}
        </UserInfoChoiceWrapper>
      )}
    </>
  )
}

export default AddUserField
