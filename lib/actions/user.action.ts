"use server";

import { revalidatePath } from "next/cache";

import connectDB from "../mongodb/connect";
import User from "../mongodb/models/user.model";
import Question from "../mongodb/models/question.model";

export const getUserById = async ({ clerkId }: IGetUserById) => {
  try {
    await connectDB();

    return await User.findOne({ clerkId });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createUser = async (body: ICreateUser) => {
  try {
    await connectDB();

    return await User.create(body);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUser = async (body: IUpdateUser) => {
  try {
    await connectDB();

    const user = await User.findOneAndUpdate(
      {
        clerkId: body.clerkId,
      },
      body.data,
      { new: true }
    );

    if (!user) throw new Error("user not found...");

    revalidatePath(body.path);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (body: IDeleteUser) => {
  try {
    await connectDB();

    const user = await User.findOneAndDelete({
      clerkId: body.clerkId,
    });

    if (!user) throw new Error("user not found...");

    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );

    await Question.deleteMany({ author: user._id });

    // TODO: delete user question's answers, ...

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
