import {inToken, inUserPublicData} from "../typing/Interfaces";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import Token from "../models/Token";
import {Types} from "mongoose";

dotenv.config()

const akey = process.env.ACCESS_SECRET || ""
const rkey = process.env.REFRESH_SECRET || ""

class TokenService {
    async generateTokens(dto: inUserPublicData) {
        const accessToken = jwt.sign(dto, akey)
        const refreshToken = jwt.sign(dto, rkey)
        const newToken = await this.setRefreshToken({userId: dto.userId, refreshToken})
        return {
            accessToken,
            refreshToken
        }
    }
    async setRefreshToken(dto: inToken) {
        const candidate = await Token.findOne({userId: dto.userId})
        if (candidate) {
            const newToken = await Token.updateOne(
                {userId: candidate.userId}, {$set: {refreshToken: dto.refreshToken}}
            )
            return newToken
        }
        const newToken = await Token.create({userId: dto.userId, refreshToken: dto.refreshToken})
        return newToken
    }

    async getTokenById(id: Types.ObjectId) {
        const token = await Token.findOne({userId: id})
        return token
    }

}

export default new TokenService()