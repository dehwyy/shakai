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
  setModalVisible: (newVal: boolean) => void
  field: string
}

interface inDetailedUserInfoProps {
  user: user
  isEdit: boolean
}

type argT = Omit<user, "username" | "id" | "email" | "friends">
