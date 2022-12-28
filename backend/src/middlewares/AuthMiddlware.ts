import { NextFunction, Response, Request } from "express"
import ErrorHandler from "../errors/ErrorHandler"
import TokenService from "../services/TokenService"

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers || !req.headers.authorization) {
      return next(ErrorHandler.Unauthorized("no token"))
    }
    const token = req.headers.authorization.split(" ")[1]
    const userValidationData = await TokenService.verifyAccessToken(token)
    if (!userValidationData) {
      return next(ErrorHandler.Unauthorized("invalid token"))
    }
    next()
  } catch (e) {
    return next(ErrorHandler.Unauthorized("invalid token"))
  }
}
