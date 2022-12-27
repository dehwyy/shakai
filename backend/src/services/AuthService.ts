import User from "../models/User"
import * as bcrypt from "bcryptjs"
import { inDataToLogin } from "../typing/Interfaces"
import ErrorHandler from "../errors/ErrorHandler"
import TokenService from "./TokenService"
import Token from "../models/Token"

class AuthService {
  async reg(email: string, username: string, password: string) {
    const candidate = await this.isUserInDb(email, username)
    if (candidate) throw ErrorHandler.Conflict("User already exists")
    const hashedPassword = bcrypt.hashSync(password, 5)
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    })
    const tokens = await TokenService.generateTokens({
      userId: user._id,
      email,
      username,
    })
    return { user, tokens }
  }

  async login(dto: inDataToLogin) {
    const user = await this.isUserInDb(dto.email, dto.username)
    if (!user) throw ErrorHandler.NotFound("User wasn't found")
    const isPasswordEquals = bcrypt.compareSync(dto.password, user.password)
    if (!isPasswordEquals) throw ErrorHandler.Forbidden("Wrong password")
    const tokens = await TokenService.generateTokens({
      userId: user._id,
      email: dto.email,
      username: dto.username,
    })
    return tokens
  }

  async findUserByEmail(email: string | undefined) {
    if (!email) return
    const user = await User.findOne({ email })
    return user
  }

  async findUserByUsername(username: string | undefined) {
    if (!username) return
    const user = await User.findOne({ username })
    return user
  }

  async isUserInDb(email: string | undefined, username: string | undefined) {
    return (
      (await this.findUserByEmail(email)) ||
      (await this.findUserByUsername(username))
    )
  }

  async getAllUsers() {
    const users = await User.find()
    return users
  }
  async getOneUSer(username: string) {
    const user = await User.findOne({ username })
    return user
  }
  async deleteUser(username: string) {
    const user = await User.findOneAndDelete({ username })
    if (!user) throw ErrorHandler.Unauthorized("no user with such username")
    const refreshToken = await Token.findOneAndDelete({ userId: user._id })
    return {
      user,
      refreshToken,
    }
  }
}

export default new AuthService()
