import * as React from "react"
import { FC, useMemo, useState } from "react"
import Ico from "../../../../UI/Ico"
import { useParams } from "react-router-dom"
import updateUserInfo from "../../../../requests/updateUserInfo"
import { EditFieldInput, EditInfoButton } from "./DetailedUserInfo-styles"
import { user } from "../../../../store/slices/users-store"
import { inInfoTemplateProps } from "../user"

const clickHandler = async (
  id: string,
  newFieldData: { field: keyof user; fieldNewValue: string },
  resetInitValue: (arg: string) => void,
  setEditMode: (arg: boolean) => void,
) => {
  resetInitValue(newFieldData.fieldNewValue)
  setEditMode(false)
  const response = await updateUserInfo(id, [newFieldData])
  if (response) {
  } else {
    console.log("ERROR")
  }
}

export const InfoTemplate: FC<inInfoTemplateProps> = ({ param, paramString, isEdit, ico, customText = null }) => {
  const [initValue, resetInitValue] = useState<string>(param)
  const [inputValue, setInputValue] = useState<string>(param)
  const [isEditMode, setEditMode] = useState(false)
  const { id } = useParams()
  const capitalizedText = useMemo(() => customText || paramString.charAt(0).toUpperCase() + paramString.slice(1), [])
  return (
    <div
      onClick={() => {
        setEditMode(false)
      }}>
      <Ico ExtraComponent={() => <span>{capitalizedText}:</span>}>{ico}</Ico>
      {!isEditMode ? (
        <>
          <span>{initValue}</span>
          {isEdit && (
            <Ico
              eventListener={e => {
                setInputValue(initValue)
                e.stopPropagation()
                setEditMode(true)
              }}>
              create
            </Ico>
          )}
        </>
      ) : (
        <>
          <EditFieldInput
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onClick={e => e.stopPropagation()}
          />
        </>
      )}
      {initValue !== inputValue && id && (
        <EditInfoButton
          onClick={() => {
            clickHandler(
              id,
              { field: paramString as keyof user, fieldNewValue: inputValue },
              resetInitValue,
              setEditMode,
            )
          }}>
          submit
        </EditInfoButton>
      )}
    </div>
  )
}
