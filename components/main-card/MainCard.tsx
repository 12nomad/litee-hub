import Image from "next/image";

import { IQuestionClient } from "../../types/IQuestion";
import Tag from "../tag/Tag";
import getRelativeTime from "../../utils/relative-time";

interface IMainCard {
  question: IQuestionClient;
}

const MainCard = ({ question }: IMainCard) => {
  return (
    <div className="bg-black-raisin rounded-md py-6 px-8">
      <h2 className="title">{question.title}</h2>
      <ul className="flex flex-wrap items-center gap-2 mt-2 mb-6">
        {question.tags.map((tag) => (
          <Tag key={tag._id.toString()} content={tag.name} />
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          {/* {question.author.picture ? (
            <Image
              src={question.author.picture}
              width={16}
              height={16}
              alt={question.author.username}
              className="bg-yellow-bus rounded-full"
            />
          ) : (
            <div className="w-4 h-4 bg-yellow-bus rounded-full"></div>
          )} */}
          <div className="w-4 h-4 bg-yellow-bus rounded-full"></div>
          <p>{question.author.username}</p>
          <p>
            <sup>.</sup>
          </p>
          <p>{getRelativeTime(new Date(question.createdAt))}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white-powder"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"
              />
            </svg>
            <p>{question.downvotes.length + question.upvotes.length} votes</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white-powder"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            <p>{question.answers.length} answers</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white-powder"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 14"
            >
              <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
              </g>
            </svg>
            <p>{question.views} views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
