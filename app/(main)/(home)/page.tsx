import Link from "next/link";
import Image from "next/image";

import CustomButton from "../../../components/custom-button/CustomButton";
import MainCard from "../../../components/main-card/MainCard";
import SearchInput from "../../../components/search-input/SearchInput";
import SelectInput from "../../../components/select-input/SelectInput";
import homeFilters from "../../../constants/input-filters";
import NoQuestion from "../../../public/no-question.svg";
import { IQuestionClient } from "../../../types/IQuestion";
import { getQuestions } from "../../../lib/actions/question.action";

export default async function Home() {
  const res = await getQuestions({});
  const questions = res.questions as unknown as IQuestionClient[];

  return (
    <main className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="title">What&#39;s Happening?</h2>
        <Link href="/ask-question">
          <CustomButton title="Ask a Question" size="sm" />
        </Link>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 my-4">
        <SearchInput
          placeholder="search for questions..."
          bgColor="bg-black-raisin"
          otherClass="w-full lg:w-[70%]"
        />
        <div className="flex-1">
          <SelectInput options={homeFilters} />
        </div>
      </div>

      <div className="space-y-4">
        {questions.length > 0 ? (
          questions.map((question) => (
            <MainCard key={question._id.toString()} question={question} />
          ))
        ) : (
          <div className="w-full text-center mt-8 flex justify-center">
            <div>
              <Image
                src={NoQuestion}
                width={256}
                height={256}
                alt="no question"
                className="block mx-auto w-full h-full"
              />
              <h2 className="text-lg mb-4">
                No question to show right now. Be the first to ask!
              </h2>
              <Link href="/ask-question" className="flex justify-center">
                <CustomButton title="Ask a Question" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
