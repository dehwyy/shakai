import User from "../models/User";
import bcrypt from "bcryptjs"
import {inDataToLogin} from '../controllers/AuthController'
class AuthService {
    async reg(email: string, username: string, password: string) {
        const candidate = await User.findOne({username}) || await User.findOne({email})
        if (candidate) throw new Error("user already exists")
        const hashedPassword = bcrypt.hashSync(password, 5)
        await User.create({email, username, password: hashedPassword})
    }

    async login(dto: inDataToLogin) {
        const candidate = await this.findUserByEmail(dto.email) || await this.findUserByUsername(dto.username)
        if (!candidate) throw new Error("User doesn't exists")
        const isPasswordEquals = bcrypt.compareSync(dto.password, candidate.password)
        if (!isPasswordEquals) throw new Error("Wrong password")
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


    async getUsersFromService() {
        const users = await User.find()
        return users
    }
}

export default new AuthService()