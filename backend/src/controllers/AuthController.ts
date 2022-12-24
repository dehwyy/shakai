import AuthService from "../services/AuthService";
import {inUser} from "../typing/Interfaces";
import UserDto from "../dto/userdto";
import {NextFunction, Response, Request} from "express";
import {inDataToLogin} from "../typing/Interfaces";
import {Types} from "mongoose";
import TokenService from "../services/TokenService";



class AuthController {
    async getUsers(req: Request, res: Response) {
        res.json(await AuthService.getAllUsers())
    }
    async deleteUser(req: Request<{}, {}, {username: string}>, res: Response, next: NextFunction) {
        try {
            const userWithTokens = await AuthService.deleteUser(req.body.username)
            res.json({message: "success in delete", userWithTokens})
        } catch (e) {
            next(e)
        }
    }
    async getUser(req: Request<{}, {}, {username: string}>, res: Response) {
        res.json({message: await AuthService.getOneUSer(req.body.username)})
    }
    async getToken(req: Request<{}, {}, {id: Types.ObjectId}>, res: Response) {
        res.json({token: await TokenService.getTokenById(req.body.id)})
    }

    async registration(req: Request<{}, {}, inUser>, res: Response, next: NextFunction) {
        try {
            const {email, username, password} = req.body
            const data = await AuthService.reg(email, username, password)
            res.cookie("refreshToken", data.tokens.refreshToken, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true})
            res.json({message: "success in reg", data})
        } catch (e) {
            next(e)
        }
    }

    async login(req: Request<{}, {}, inDataToLogin>, res: Response, next: NextFunction) {
        try {
            const userDto = UserDto.getUserData(req)
            const tokens = await AuthService.login(userDto)
            res.cookie("refreshToken", tokens.refreshToken, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true})
            res.json({message: "success in login", tokens})
        } catch (e) {
            next(e)
        }
    }
}

export default new AuthController()