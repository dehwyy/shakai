import { Types } from "mongoose"

export interface inDataToLogin {
  email?: string
  username?: string
  password: string
}

export interface inUser {
  email: string
  username: string
  password: string
}

export interface inUserPublicData {
  userId: Types.ObjectId
  email?: string
  username?: string
}

export interface inToken {
  userId: Types.ObjectId
  refreshToken: string
}
