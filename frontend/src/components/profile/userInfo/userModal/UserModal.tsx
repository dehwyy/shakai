import React, { FC, useId, useState } from "react"
import { EditFieldInput, EditInfoButton } from "../detailedUserInfo/DetailedUserInfo-styles"
import InputModal from "../../../../UI/InputModal"
import { useParams } from "react-router-dom"
import Ico from "../../../../UI/Ico"
import { inUserModalProps } from "../user"
import UserData from "../../../../requests/UserData"

const UserModal: FC<inUserModalProps> = ({ setModalVisible, field }) => {
  const inputId = useId()
  const { id } = useParams()
  const [isModalError, setModalError] = useState(false)
  const [inputValue, setInputValue] = useState("")
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
          {isModalError && <label htmlFor={inputId}>Link couldn&apos;t be treated as image</label>}
        </div>
        <div>
          <EditInfoButton
            onClick={async () => {
              if (inputValue.match(/.[(jpg)(png)(jpeg)]$/)) {
                if (field !== "postImage") {
                  console.log(field)
                }
                setInputValue("")
                setModalVisible(false)
              } else {
                setModalError(true)
              }
            }}
            style={{ fontSize: "1.2rem" }}>
            Update
          </EditInfoButton>
        </div>
      </>
    </InputModal>
  )
}

export default UserModal
