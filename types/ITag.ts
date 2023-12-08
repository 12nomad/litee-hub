import { Schema, Document } from "mongoose";

import { IQuestionClient } from "./IQuestion";
import { IUserClient } from "./IUser";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followedByUsers: Schema.Types.ObjectId[];
}

export interface ITagClient {
  _id: Schema.Types.ObjectId;
  name: string;
  description: string;
  questions: IQuestionClient[];
  followedByUsers: IUserClient[];
  createdAt: Date;
  updatedAt: Date;
}
