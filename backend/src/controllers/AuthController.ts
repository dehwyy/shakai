import AuthService from "../services/AuthService"
import { inUser, inDataToLogin } from "../typing/Interfaces"
import { NextFunction, Response, Request } from "express"
import UserInfoService from "../services/UserInfoService"
import { validationResult } from "express-validator"
import ErrorHandler from "../errors/ErrorHandler"
import tokenService from "../services/TokenService"
import setNewTokens from "../middlewares/SetNewTokens"
import TokenService from "../services/TokenService"

class AuthController {
  async verifyUserLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await setNewTokens(req, res, next)
      res.json(data)
    } catch (e) {
      next(e)
    }
  }
  async registration(req: Request<object, object, inUser>, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        next(ErrorHandler.BadRequest("max length of username is 14"))
      }
      const { email, username, password } = req.body
      const data = await AuthService.reg(email, username, password)
      const { userId, tokens } = data
      const { accessToken, refreshToken } = tokens
      await UserInfoService.createUserInfo(data.userId)
      res.cookie("refreshToken", refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      res.json({ _id: userId, accessToken })
    } catch (e) {
      next(e)
    }
  }

  async login(req: Request<object, object, inDataToLogin>, res: Response, next: NextFunction) {
    try {
      const { email, username, password } = req.body
      const {
        tokens,
        user: { username: usernameRes, email: emailRes, _id: _idRes },
      } = await AuthService.login(email, username, password)
      res.cookie("refreshToken", tokens.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      res.json({ user: { username: usernameRes, email: emailRes, _id: _idRes }, accessToken: tokens.accessToken })
    } catch (e) {
      next(e)
    }
  }
  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      await tokenService.removeToken(req.cookies.refreshToken)
      res.clearCookie("refreshToken")
      res.end()
    } catch (e) {
      next(e)
    }
  }
}

export default new AuthController()
