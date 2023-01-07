import { inToken, inUserPublicData } from "../typing/Interfaces"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import Token from "../models/Token"
import { Types } from "mongoose"

dotenv.config()

const akey = process.env.ACCESS_SECRET || ""
const rkey = process.env.REFRESH_SECRET || ""

class TokenService {
  async generateTokens(userData: inUserPublicData) {
    const accessToken = jwt.sign(userData, akey, { expiresIn: "30M" })
    const refreshToken = jwt.sign(userData, rkey, { expiresIn: "24h" })
    await this.setRefreshToken({
      userId: userData.userId,
      refreshToken,
    })
    return {
      accessToken,
      refreshToken,
    }
  }
  async setRefreshToken(data: inToken) {
    const candidate = await Token.findOne({ userId: data.userId })
    if (candidate) {
      return Token.updateOne({ userId: candidate.userId }, { $set: { refreshToken: data.refreshToken } })
    }
    return await Token.create({
      userId: data.userId,
      refreshToken: data.refreshToken,
    })
  }
  async verifyAccessToken(atoken: string) {
    return jwt.verify(atoken, akey) && (await this.findToken(atoken))
  }

  async verifyRefreshToken(rtoken: string) {
    return jwt.verify(rtoken, rkey) && (await this.findToken(rtoken))
  }
  async findToken(token: string) {
    return Token.findOne({ token })
  }

  async removeToken(refreshToken: string) {
    return Token.deleteOne({ refreshToken })
  }
}

export default new TokenService()
