import { Schema, Document } from "mongoose";
import { ITagClient } from "./ITag";
import { IUserClient } from "./IUser";

export interface IQuestion extends Document {
  title: string;
  question: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
}

export interface IQuestionClient {
  _id: Schema.Types.ObjectId;
  title: string;
  question: string;
  tags: ITagClient[];
  views: number;
  upvotes: IUserClient[];
  downvotes: IUserClient[];
  answers: IUserClient[];
  author: IUserClient;
  createdAt: Date;
  updatedAt: Date;
}
