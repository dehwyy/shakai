import User from "../models/User";
import bcrypt from "bcryptjs"
import {inDataToLogin} from "../typing/Interfaces";
import ErrorHandler from "../errors/ErrorHandler";

class AuthService {
    async reg(email: string, username: string, password: string) {
        const candidate = await this.isUserInDb(email, username)
        if (candidate) throw ErrorHandler.BadRequest('user already exists')
        const hashedPassword = bcrypt.hashSync(password, 5)
        await User.create({email, username, password: hashedPassword})
    }

    async login(dto: inDataToLogin) {
        const candidate = await this.isUserInDb(dto.email, dto.username)
        if (!candidate) throw ErrorHandler.NotFound("User wasn't found")
        const isPasswordEquals = bcrypt.compareSync(dto.password, candidate.password)
        if (!isPasswordEquals) throw ErrorHandler.BadRequest("Wrong password")
    }

    async findUserByEmail(email: string | undefined) {
        if (!email) return
        const user = await User.findOne({email})
        return user
    }

    async findUserByUsername(username: string | undefined) {
        if (!username) return
        const user = await User.findOne({username})
        return user
    }

    async isUserInDb(email: string | undefined, username: string | undefined) {
        return await this.findUserByEmail(email) || await this.findUserByUsername(username)
    }


    async TESTgetUsersFromService() {
        const users = await User.find()
        return users
    }
    async TESTgetOneUSer(username: string) {
        const user = await User.findOne({username})
        return user
    }
    async TESTdeleteUser(username: string) {
        await User.deleteOne({username})
    }
}

export default new AuthService()