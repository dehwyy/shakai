import { NextFunction, Request, Response } from "express"
import UserInfoService from "../services/UserInfoService"
import { Types } from "mongoose"
import UserService from "../services/UserService"
type TField = { field: string; fieldNewValue: string }

class UserController {
  async editUserInfo(req: Request, res: Response, next: NextFunction) {
    try {
      // prettier-ignore
      const { userId, userData, }: {
        userId: Types.ObjectId
        userData: TField
      } = req.body
      // prettier-ignore
      await UserInfoService.updateUserInfo(
        userId,
        userData.field,
        userData.fieldNewValue,
      )
      res.sendStatus(200)
    } catch (e) {
      next(e)
    }
  }
  async getUserMainInfo(req: Request<object, object, object, { id: string }>, res: Response, next: NextFunction) {
    const { id } = req.query
    const user = await UserService.getUserMainInfo(id)
    res.json(user)
  }
  async getFullUserInfo(req: Request<object, object, object, { id: string }>, res: Response, next: NextFunction) {
    const { id } = req.query
    const userInfo = await UserService.getFullUserInfo(id)
    res.json(userInfo)
  }
  async getImageByUserId(req: Request<object, object, object, { id: string }>, res: Response, next: NextFunction) {
    const { id } = req.query
    const image = await UserService.getProfileImageById(id)
    res.json(image)
  }
}

export default new UserController()
