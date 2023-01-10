import * as React from "react"
import { DetailedUserInfoWrapper } from "./DetailedUserInfo-styles"
import { FC, useMemo } from "react"
import { InfoTemplate } from "./AdditionalInfoComponents"
import { useGetUserPageInfoQuery } from "../../../../store/req/userPage-slice-api"
import { useParams } from "react-router-dom"
import AddUserField from "./AddUserInfo/AddUserField"
import { userPageInfoFields } from "../../../../store/immutable"

const DetailedUserInfo: FC<inDetailedUserInfoProps> = ({ isEdit = false }) => {
  const { id } = useParams()
  const { data: userPageInfo } = useGetUserPageInfoQuery(id as string)
  const fields = useMemo(() => userPageInfoFields, [])

  return (
    <DetailedUserInfoWrapper>
      {userPageInfo &&
        fields.map(
          (fieldData, i) =>
            userPageInfo[fieldData.fieldToUpdate] && (
              <InfoTemplate key={i} prop={fieldData.fieldToUpdate} isEdit={isEdit} ico={fieldData.icon} />
            ),
        )}
      <AddUserField />
    </DetailedUserInfoWrapper>
  )
}

export default DetailedUserInfo
