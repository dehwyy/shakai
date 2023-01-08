import User from "../models/User"
import { Schema } from "mongoose"
import * as mongoose from "mongoose"
import UserDetailedInfo from "../models/UserDetailedInfo"

class UserService {
  async getUserMainInfo(id: string) {
    const userId = new mongoose.Types.ObjectId(id)
    const user = await User.findById(userId)
    return user
  }
  async getFullUserInfo(id: string) {
    const userId = new mongoose.Types.ObjectId(id)
    const userInfo = await UserDetailedInfo.findOne({ userId }).populate("userId")
    return userInfo
  }
  async getProfileImageById(id: string) {
    const image = await UserDetailedInfo.findOne({ id }, "profileImg")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return image
  }
}
export default new UserService()
