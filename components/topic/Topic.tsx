interface ITopic {
  content: string;
}

const Topic = ({ content }: ITopic) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <p>{content}</p>
      <svg
        className="w-4 h-4 text-white-powder"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    </div>
  );
};

export default Topic;
