import { Schema, model, models } from "mongoose";

import { ITag } from "../../../types/ITag";

const tagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    followedByUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Tag = models.Tag || model("Tag", tagSchema);

export default Tag;
