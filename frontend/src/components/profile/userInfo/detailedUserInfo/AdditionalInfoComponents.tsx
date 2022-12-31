import * as React from "react"
import { FC, useState } from "react"
import Ico from "../../../../UI/Ico"
import { Simulate } from "react-dom/test-utils"
import submit = Simulate.submit
import { useParams } from "react-router-dom"
import updateUserInfo from "../../../../requests/updateUserInfo"

const clickHandler = async (
  id: string,
  newFieldData: { field: string; fieldNewValue: string },
  resetInitValue: (arg: string) => void,
  setEditMode: (arg: boolean) => void,
) => {
  const response = await updateUserInfo(id, [newFieldData])
  if (response) {
    resetInitValue(newFieldData.fieldNewValue)
    setEditMode(false)
  } else {
    console.log("ERROR")
  }
}

interface inInfoTemplate {
  param: string
  paramString: string
  isEdit: boolean
  ico: string
  customText?: string | null
}

export const InfoTemplate: FC<inInfoTemplate> = ({ param, paramString, isEdit, ico, customText = null }) => {
  const [initValue, resetInitValue] = useState<string>(param)
  const [inputValue, setInputValue] = useState<string>(initValue)
  const [isEditMode, setEditMode] = useState(false)
  const { id } = useParams()
  const capitalizedText = customText || paramString.charAt(0).toUpperCase() + paramString.slice(1)
  return (
    <div>
      <Ico ExtraComponent={() => <span>{capitalizedText}:</span>}>{ico}</Ico>
      {!isEditMode ? (
        <>
          <span>{initValue}</span>
          {isEdit && <Ico eventListener={() => setEditMode(true)}>create</Ico>}
        </>
      ) : (
        <>
          <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        </>
      )}
      {initValue !== inputValue && id && (
        <button
          onClick={() =>
            clickHandler(id, { field: paramString, fieldNewValue: inputValue }, resetInitValue, setEditMode)
          }>
          submit
        </button>
      )}
    </div>
  )
}
