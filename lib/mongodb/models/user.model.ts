import { Schema, model, models } from "mongoose";

import { IUser } from "../../../types/IUser";

const userSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String, required: true },
    password: { type: String },
    bio: { type: String },
    location: { type: String },
    reputation: { type: String, default: 0 },
    savedQuestions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
