import * as React from "react"
import Ico from "../../../../UI/Ico"
import { EditFieldInput } from "../detailedUserInfo/DetailedUserInfo-styles"
import updateUserInformation from "../../../../requests/updateUserInfo"
import { useParams } from "react-router-dom"
import { FC, useState } from "react"
import { inLocationProps } from "../user"

const Location: FC<inLocationProps> = ({ location, editable }) => {
  const { id } = useParams()
  const [inputValue, setInputValue] = useState(location)
  const [userLocation, setUserLocation] = useState(location)
  const [isEditLocation, setEditLocation] = useState(false)
  return (
    <div>
      <Ico>place</Ico>
      {isEditLocation ? (
        <EditFieldInput value={inputValue} onChange={e => setInputValue(e.target.value)} />
      ) : (
        <span>{userLocation || location || "Write your location..."}</span>
      )}
      {editable &&
        (isEditLocation ? (
          <Ico
            eventListener={async () => {
              setUserLocation(inputValue || " ")
              await updateUserInformation(id || "error", [{ field: "location", fieldNewValue: inputValue }])
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
