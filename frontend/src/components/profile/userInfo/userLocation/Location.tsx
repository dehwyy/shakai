import * as React from "react"
import Ico from "../../../../UI/Ico"
import { EditFieldInput } from "../detailedUserInfo/DetailedUserInfo-styles"
import { useParams } from "react-router-dom"
import { FC, useState } from "react"
import { useGetUserPageInfoQuery, useUpdateUserPageInfoMutation } from "../../../../store/req/userPage-slice-api"

const Location: FC<inLocationProps> = ({ editable }) => {
  const { id } = useParams()
  const { data: userInfoData } = useGetUserPageInfoQuery(id as string)
  const [updateUserInfo, {}] = useUpdateUserPageInfoMutation()
  const [inputValue, setInputValue] = useState(userInfoData?.location || "")
  const [isEditLocation, setEditLocation] = useState(false)
  return (
    <div>
      <Ico>place</Ico>
      {isEditLocation && (inputValue || isEditLocation) ? (
        <EditFieldInput value={inputValue} onChange={e => setInputValue(e.target.value)} />
      ) : (
        <span>{userInfoData?.location || "Write your location..."}</span>
      )}
      {editable &&
        (isEditLocation ? (
          <Ico
            eventListener={() => {
              updateUserInfo({
                userId: id as string,
                userData: { field: "location", fieldNewValue: inputValue as string },
              })
              setEditLocation(false)
            }}>
            check
          </Ico>
        ) : (
          <Ico eventListener={() => setEditLocation(true)}>edit</Ico>
        ))}
    </div>
  )
}

export default Location
