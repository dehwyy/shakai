import User from "../models/User"
import * as mongoose from "mongoose"
import UserDetailedInfo from "../models/UserDetailedInfo"

class UserService {
  async getUserMainInfo(id: string | mongoose.Types.ObjectId) {
    const userId = new mongoose.Types.ObjectId(id)
    const user = await User.findById(userId)
    return user
  }
  async getFullUserInfo(id: string | mongoose.Types.ObjectId | undefined) {
    const userId = new mongoose.Types.ObjectId(id)
    const userInfo = await UserDetailedInfo.findOne({ userId }).populate("userId")
    return userInfo
  }
  async getAllUsers() {
    const users = await UserDetailedInfo.find()
      .populate("userId", "username")
      .select("location briefInfo profileImg userId")
    return users
  }
}
export default new UserService()
