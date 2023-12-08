import { Schema, Document } from "mongoose";

import { IQuestionClient } from "./IQuestion";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  password?: string;
  bio?: string;
  location?: string;
  reputation?: number;
  savedQuestions: Schema.Types.ObjectId[];
  questions: Schema.Types.ObjectId[];
}

export interface IUserClient {
  _id: Schema.Types.ObjectId;
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  password?: string;
  bio?: string;
  location?: string;
  reputation?: number;
  savedQuestions: IQuestionClient[];
  questions: IQuestionClient[];
  createdAt: Date;
  updatedAt: Date;
}
