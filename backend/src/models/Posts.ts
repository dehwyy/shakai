import { model, Schema } from "mongoose"

const post = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  dateOfCreate: { type: String, required: true },
  postText: { type: String },
  postImage: { type: String, default: null },
})

export default model("Post", post)
