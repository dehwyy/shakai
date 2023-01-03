import { model, Schema, Types } from "mongoose"

interface inUserDetailedInfo {
  userId: Types.ObjectId
  briefInfo?: string
  location?: string
  friends?: Types.ObjectId[]
  education?: string
  dateOfBirth?: string
  interests?: string
  activity?: string
  favouriteMusic?: string
  favouriteBooks?: string
  favouriteGames?: string
  info?: string
}

const userDetailedInfo = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  briefInfo: { type: String, default: null },
  location: { type: String, default: null },
  education: { type: String, default: null },
  dateOfBirth: { type: String, default: null },
  interests: { type: String, default: null },
  activity: { type: String, default: null },
  favouriteMusic: { type: String, default: null },
  favouriteBooks: { type: String, default: null },
  favouriteGames: { type: String, default: null },
  info: { type: String, default: null },
  profileImg: { type: String, default: null },
  backgroundImg: { type: String, default: null },
  friends: [{ type: Schema.Types.ObjectId, ref: "User", default: null }],
})

export default model<inUserDetailedInfo>("UserDetailedInfo", userDetailedInfo)
