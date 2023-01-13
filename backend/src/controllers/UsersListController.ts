import { NextFunction, Request, Response } from "express"
import UserService from "../services/UserService"

class UsersListController {
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAllUsers()
      res.json(users)
    } catch (e) {
      next(e)
    }
  }
}

export default new UsersListController()
