import { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import QuestionForm from "../../../components/question-form/QuestionForm";
import { IUserClient } from "../../../types/IUser";
import { getUserById } from "../../../lib/actions/user.action";

export const metadata: Metadata = {
  title: "Ask a question | Litee Hub",
  description: "The best gaming spot online",
};

const AskQuestion = async () => {
  // const { userId } = auth();
  const userId = "123456";

  if (!userId) return redirect("/sign-in");

  const user: IUserClient = await getUserById({ clerkId: userId });

  return (
    <div>
      <h1 className="title mb-6">Ask a question</h1>

      <QuestionForm userId={user._id.toString()} />
    </div>
  );
};

export default AskQuestion;
