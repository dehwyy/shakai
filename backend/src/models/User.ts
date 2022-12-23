import {Schema, model} from "mongoose";

export interface inUser {
    email: string
    username: string
    password: string
}

const user = new Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

export default model<inUser>("User", user)