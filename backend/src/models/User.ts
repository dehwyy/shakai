import { Schema, model } from "mongoose"
import { inUser } from "../typing/Interfaces"

const user = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

export default model<inUser>("User", user)
