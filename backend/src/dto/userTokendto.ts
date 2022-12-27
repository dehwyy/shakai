import { Request } from "express"
import { inUserPublicData } from "../typing/Interfaces"

class UserTokenDto {
  getUserPublicData(req: Request) {
    const { username, email }: inUserPublicData = req.body
    return { username, email }
  }
}

export default new UserTokenDto()
