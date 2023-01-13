import UserDetailedInfo from "../models/UserDetailedInfo"
import { Types } from "mongoose"

class UserInfoService {
  async updateUserInfo(userId: Types.ObjectId, field: string, fieldNewValue: string) {
    await UserDetailedInfo.find()
      .where({ userId })
      .updateOne({}, { $set: { [field]: fieldNewValue } })
  }
  async createUserInfo(userId: Types.ObjectId) {
    await UserDetailedInfo.create({ userId })
  }
}

export default new UserInfoService()
