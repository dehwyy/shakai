import UserDetailedInfo from "../models/UserDetailedInfo"
import { Types } from "mongoose"

class UserInfoService {
  async updateUserInfo(userId: Types.ObjectId, field: string, fieldNewValue: string) {
    const fieldInDb = UserDetailedInfo.find().where({ userId })
    if (field === "friends") {
      fieldInDb.updateOne({}, { $push: { [field]: fieldNewValue } })
    }
    fieldInDb.updateOne({}, { $set: { [field]: fieldNewValue } })
  }
  async createUserInfo(userId: Types.ObjectId) {
    await UserDetailedInfo.create({ userId })
  }
}

export default new UserInfoService()
