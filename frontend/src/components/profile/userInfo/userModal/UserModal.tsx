import React, { FC, useId, useState } from "react"
import { EditFieldInput, EditInfoButton } from "../detailedUserInfo/DetailedUserInfo-styles"
import InputModal from "../../../../UI/InputModal"
import Ico from "../../../../UI/Ico"
import { useUpdateUserPageInfoMutation } from "../../../../store/req/userPage-slice-api"
import { useParams } from "react-router-dom"

const UserModal: FC<inUserModalProps> = ({ setModalVisible, field, setImage }) => {
  const inputId = useId()
  const { id } = useParams()
  const [isModalError, setModalError] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [updateProfileImage, {}] = useUpdateUserPageInfoMutation()
  const submitImageHandler = async () => {
    if (inputValue.match(/.[(jpg)(png)(jpeg)]$/)) {
      if (field === "postImage") {
        setImage && setImage(inputValue)
      } else {
        updateProfileImage({
          userId: id as string,
          userData: {
            field,
            fieldNewValue: inputValue,
          },
        })
      }
      setInputValue("")
      setModalVisible(false)
    } else {
      setModalError(true)
    }
  }
  return (
    <InputModal onClickFn={e => e.stopPropagation()}>
      <>
        <Ico
          eventListener={() => {
            setInputValue("")
            setModalVisible(false)
          }}>
          close
        </Ico>
        <div>Paste url to your desirable image</div>
        <div>
          <EditFieldInput
            id={inputId}
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
              setModalError(false)
            }}
          />
          {isModalError && <label htmlFor={inputId}>Link couldn&apos;t be treated as an image</label>}
        </div>
        <div>
          <EditInfoButton onClick={submitImageHandler} style={{ fontSize: "1.2rem" }}>
            Update
          </EditInfoButton>
        </div>
      </>
    </InputModal>
  )
}

export default UserModal
