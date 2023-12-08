import { Schema, model, models } from "mongoose";

import { IQuestion } from "../../../types/IQuestion";

const questionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    question: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    views: { type: Number, default: 0 },
    upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Question = models.Question || model("Question", questionSchema);

export default Question;
