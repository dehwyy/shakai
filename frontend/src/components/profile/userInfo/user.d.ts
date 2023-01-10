interface inInfoTemplateProps {
  prop: userPageFullInfoKeysT
  isEdit: boolean
  ico: string
  customText?: string | null
}

interface inLocationProps {
  editable: boolean
}

interface inUserModalProps {
  setModalVisible: (newVal: boolean) => void
  field: userPageFullInfoKeysT | "postImage"
  setImage?: (image: string) => void
}

type userPageFullInfoKeysT =
  | "_id"
  | "briefInfo"
  | "education"
  | "dateOfBirth"
  | "interests"
  | "activity"
  | "favouriteMusic"
  | "favouriteBooks"
  | "favouriteGames"
  | "info"
  | "profileImg"
  | "backgroundImg"
  | "location"

interface inDetailedUserInfoProps {
  isEdit: boolean
}
