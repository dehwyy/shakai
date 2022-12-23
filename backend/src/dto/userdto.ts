import {Request} from "express-serve-static-core";
import {inUser} from "../models/User";

class UserDto {
    getUserData(req: Request) {
        const {email, username, password}: inUser = req.body
        return {email, username, password}
    }
}

export default new UserDto()