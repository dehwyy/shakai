import { NextFunction, Request, Response } from "express"
import UserInfoService from "../services/UserInfoService"
import { Types } from "mongoose"
type TField = { field: string; fieldNewValue: string }

class UserController {
  async editUserInfo(req: Request, res: Response, next: NextFunction) {
    try {
      // prettier-ignore
      const { userId, userData, }: {
        userId: Types.ObjectId
        userData: TField[]
      } = req.body
      // prettier-ignore
      await Promise.all(userData.map(async (fieldData: TField) => {
          await UserInfoService.updateUserInfo(
            userId,
            fieldData.field,
            fieldData.fieldNewValue,
          )
        }),
      )
      res.json("success in editUserInfo")
    } catch (e) {
      next(e)
    }
  }
}

export default new UserController()
