import { user } from "../../../store/slices/users-store"

interface inInfoTemplateProps {
  param: string
  paramString: string
  isEdit: boolean
  ico: string
  customText?: string | null
}

interface inLocationProps {
  location: string
  editable: boolean
}

interface inUserModalProps {
  field: keyof user
  inputValue: string
  setInputValue: (newVal: string) => void
  setModalVisible: (newVal: boolean) => void
  setImage: (newVal: string) => void
}

interface inDetailedUserInfoProps {
  user: user
  isEdit: boolean
}

type argT = Omit<user, "username" | "id" | "email" | "friends">
