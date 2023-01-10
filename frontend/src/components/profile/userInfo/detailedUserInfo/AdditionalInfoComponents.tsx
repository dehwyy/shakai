import * as React from "react"
import { FC, useMemo, useState } from "react"
import Ico from "../../../../UI/Ico"
import { useParams } from "react-router-dom"
import { EditFieldInput, EditInfoButton } from "./DetailedUserInfo-styles"
import { useGetUserPageInfoQuery, useUpdateUserPageInfoMutation } from "../../../../store/req/userPage-slice-api"

export const InfoTemplate: FC<inInfoTemplateProps> = ({ prop, isEdit, ico, customText = null }) => {
  const { id } = useParams()
  const { data: userPageData } = useGetUserPageInfoQuery(id as string)
  const fieldValue = useMemo(() => userPageData && userPageData[prop], [(userPageData as userFullInfoT)[prop]])
  const capitalizedText = useMemo(() => prop.charAt(0).toUpperCase() + prop.slice(1), [])
  const [isEditMode, setEditMode] = useState(false)
  const [inputValue, setInputValue] = useState<string | undefined>(fieldValue)
  const [updateUserInfo, {}] = useUpdateUserPageInfoMutation()
  return (
    <div
      onMouseDown={() => {
        setEditMode(false)
        setInputValue(fieldValue)
      }}>
      <Ico ExtraComponent={() => <span>{customText || capitalizedText}:</span>}>{ico}</Ico>
      {!isEditMode ? (
        <>
          {isEdit && (
            <Ico
              eventListener={e => {
                e.stopPropagation()
                setEditMode(true)
              }}>
              create
            </Ico>
          )}
          <span style={{ paddingLeft: "1rem" }}>{fieldValue}</span>
        </>
      ) : (
        <>
          <EditFieldInput
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onMouseDown={e => e.stopPropagation()}
          />
        </>
      )}
      {isEditMode && inputValue !== fieldValue && (
        <EditInfoButton
          onClick={async () => {
            await updateUserInfo({
              userId: id as string,
              userData: {
                field: prop,
                fieldNewValue: inputValue as string,
              },
            })
            setEditMode(false)
          }}
          onMouseDown={e => e.stopPropagation()}>
          submit
        </EditInfoButton>
      )}
    </div>
  )
}
