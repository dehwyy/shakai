import * as React from "react"
import { AddUserFieldWrapper, UserInfoChoiceWrapper, UserInfoChoice } from "./AddUserField-style"
import { useMemo, useState } from "react"
import { useGetUserPageInfoQuery, useUpdateUserPageInfoMutation } from "../../../../../store/req/userPage-slice-api"
import { useParams } from "react-router-dom"
import { userPageInfoFields } from "../../../../../store/immutable"

const AddUserField = () => {
  const [isOpen, setOpen] = useState(false)
  const { id } = useParams()
  const { data: userPageInfo } = useGetUserPageInfoQuery(id as string)
  const [updateUserInfo, {}] = useUpdateUserPageInfoMutation()
  const fields = useMemo(() => userPageInfoFields, [])
  const fieldsToRender =
    userPageInfo &&
    //prettier-ignore
    fields.map((field, i) => !userPageInfo[field.fieldToUpdate] && (
          <UserInfoChoice
            key={i}
            onClick={() =>
              updateUserInfo({
                userId: id as string,
                userData: { field: field.fieldToUpdate, fieldNewValue: "string" },
              })
            }>
            {(field && field.customText) || field.fieldToUpdate}
          </UserInfoChoice>
        ),
    )
  return fieldsToRender?.find(field => field) ? (
    <>
      <AddUserFieldWrapper onClick={() => setOpen(prev => !prev)}>
        <span>Edit info</span>
      </AddUserFieldWrapper>
      {isOpen && <UserInfoChoiceWrapper>{fieldsToRender}</UserInfoChoiceWrapper>}
    </>
  ) : (
    <></>
  )
}

export default AddUserField
