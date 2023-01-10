import TokenService from "../services/TokenService"
import ErrorHandler from "../errors/ErrorHandler"
import UserService from "../services/UserService"
import { Request, Response, NextFunction } from "express"

const setNewTokens = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.cookies.refreshToken
    const tokenInDb = await TokenService.findToken(refreshToken as string)
    if (!tokenInDb) throw ErrorHandler.NotFound("no such token")
    const userInDb = await UserService.getUserMainInfo(tokenInDb.userId)
    if (!userInDb) throw ErrorHandler.NotFound("no such user")
    const userData = {
      _id: userInDb._id,
      email: userInDb.email,
      username: userInDb.username,
    }
    const tokens = await TokenService.generateTokens({ ...userData, userId: userData._id })
    res.cookie("refreshToken", tokens.refreshToken)
    return { accessToken: tokens.accessToken, user: userData }
  } catch (e) {
    return next(ErrorHandler.Unauthorized("unauthorized error - auth first"))
  }
}

export default setNewTokens
