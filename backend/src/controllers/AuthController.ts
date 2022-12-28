import AuthService from "../services/AuthService"
import { inUser, inDataToLogin } from "../typing/Interfaces"
import { NextFunction, Response, Request } from "express"
import UserInfoService from "../services/UserInfoService"
import { validationResult } from "express-validator"
import ErrorHandler from "../errors/ErrorHandler"

class AuthController {
  async getUsers(req: Request, res: Response) {
    res.json(await AuthService.getAllUsers())
  }
  async registration(
    req: Request<object, object, inUser>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        next(ErrorHandler.BadRequest("max length of username is 14"))
      }
      const { email, username, password } = req.body
      const data = await AuthService.reg(email, username, password)
      await UserInfoService.createUserInfo(data.userId)
      res.cookie("refreshToken", data.tokens.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      res.json({
        message: "success in reg",
        accessToken: data.tokens.accessToken,
      })
    } catch (e) {
      next(e)
    }
  }

  async login(
    req: Request<object, object, inDataToLogin>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { email, username, password } = req.body
      const data = await AuthService.login(email, username, password)
      res.cookie("refreshToken", data.tokens.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      res.json({ message: "success in login", data })
    } catch (e) {
      next(e)
    }
  }
}

export default new AuthController()
