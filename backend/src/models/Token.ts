import { Schema, model, Types } from "mongoose"
import { inToken } from "../typing/Interfaces"
const token = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String },
})

export default model<inToken>("Token", token)
