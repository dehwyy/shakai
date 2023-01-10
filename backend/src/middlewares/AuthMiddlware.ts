import { NextFunction, Response, Request } from "express"
import ErrorHandler from "../errors/ErrorHandler"
import TokenService from "../services/TokenService"

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers || !req.headers.authorization) {
      return next(ErrorHandler.Unauthorized("no token"))
    }
    const token = req.headers.authorization.split(" ")[1]
    await TokenService.verifyAccessToken(token)
    next()
  } catch (e) {
    if (req.cookies.refreshToken && !String(e).match(/invalid signature/)) {
      if (req.flag) {
        next()
      } else {
        return res.status(307).json({ redirect: 307 })
      }
    } else return !req.flag ? res.status(401).json(e) : next()
  }
}
