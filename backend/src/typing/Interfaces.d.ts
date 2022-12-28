import { Types } from "mongoose"
import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"

declare module "express-serve-static-core" {
  interface Request {
    userData: string | JwtPayload
  }
}

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
