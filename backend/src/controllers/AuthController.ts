import AuthService from "../services/AuthService";
import {inUser} from "../typing/Interfaces";
import UserDto from "../dto/userdto";
import {NextFunction, Response, Request} from "express";
import {inDataToLogin} from "../typing/Interfaces";



class AuthController {
    async TESTgetUsers(req: Request, res: Response) {
        res.json(await AuthService.TESTgetUsersFromService())
    }
    async TESTdeleteUser(req: Request<{}, {}, {username: string}>, res: Response) {
        await AuthService.TESTdeleteUser(req.body.username)
        res.json({message: "success in delete"})
    }
    async TESTgetUser(req: Request<{}, {}, {username: string}>, res: Response) {
        res.json({message: await AuthService.TESTgetOneUSer(req.body.username)})
    }

    async registration(req: Request<{}, {}, inUser>, res: Response, next: NextFunction) {
        try {
            const {email, username, password} = req.body
            await AuthService.reg(email, username, password)
            res.json({message: "success in reg"})
        } catch (e) {
            next(e)
        }
    }

    async login(req: Request<{}, {}, inDataToLogin>, res: Response, next: NextFunction) {
        try {
            const userDto = UserDto.getUserData(req)
            await AuthService.login(userDto)
            res.json({message: "success in login"})
        } catch (e) {
            next(e)
        }
    }
}

export default new AuthController()