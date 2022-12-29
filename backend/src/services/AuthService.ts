import User from "../models/User"
import bcrypt from "bcryptjs"
import ErrorHandler from "../errors/ErrorHandler"
import TokenService from "./TokenService"

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
    return { tokens, userId: user._id, username }
  }
  async login(
    email: string | undefined,
    username: string | undefined,
    password: string,
  ) {
    const user = await this.isUserInDb(email, username)
    if (!user) throw ErrorHandler.NotFound("User wasn't found")
    const isPasswordEquals = bcrypt.compareSync(password, user.password)
    if (!isPasswordEquals) throw ErrorHandler.Forbidden("Wrong password")
    const tokens = await TokenService.generateTokens({
      userId: user._id,
      email: email,
      username: username,
    })
    return {
      user,
      tokens,
    }
  }

  async findUserByEmail(email: string | undefined) {
    if (!email) return
    return User.findOne({ email })
  }

  async findUserByUsername(username: string | undefined) {
    if (!username) return
    return User.findOne({ username })
  }

  async isUserInDb(email: string | undefined, username: string | undefined) {
    return (
      (await this.findUserByEmail(email)) ||
      (await this.findUserByUsername(username))
    )
  }

  async getAllUsers() {
    return User.find()
  }
}

export default new AuthService()
