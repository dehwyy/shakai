import {Response, Request} from "express-serve-static-core";
import AuthService from "../services/AuthService";
import {inUser} from "../models/User";
import UserDto from "../dto/userdto";

export interface inDataToLogin {
    email?: string,
    username?: string,
    password: string
}

class AuthController {
    async getUsers(req: Request, res: Response) {
        res.json(await AuthService.getUsersFromService())
    }
    async registration(req: Request<{}, {}, inUser>, res: Response) {
        try {
            const {email, username, password} = req.body
            await AuthService.reg(email, username, password)
            res.json({message: "success in reg"})
        } catch (e) {
            res.json({message: e})
        }
    }

    async login(req: Request<{}, {}, inDataToLogin>, res: Response) {
        try {
            const userDto = UserDto.getUserData(req)
            await AuthService.login(userDto)
            res.json({message: "success in login"})
        } catch (e) {
            if (e instanceof Error) {
                res.json({message: e.message})
            } else {
                res.json({message: "error at login"})
            }
        }
    }
}

export default new AuthController()