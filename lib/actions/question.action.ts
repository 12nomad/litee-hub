"use server";

import { revalidatePath } from "next/cache";

import connectDB from "../mongodb/connect";
import Question from "../mongodb/models/question.model";
import Tag from "../mongodb/models/tag.model";
import User from "../mongodb/models/user.model";

export const getQuestions = async ({
  filter,
  page,
  pageSize,
  searchQuery,
}: IGetQuestions) => {
  try {
    connectDB();

    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createQuestion = async ({
  author,
  content,
  path,
  tags,
  title,
}: ICreateQuestion) => {
  try {
    await connectDB();

    const question = await Question.create({
      title,
      author,
      question: content,
    });

    const newTags: string[] = [];
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      newTags.push(existingTag._id);
    }

    await Question.findOneAndUpdate(question._id, {
      $push: { tags: { $each: newTags } },
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
