interface ITag {
  content: string;
  handleClose?: (content: string) => void;
  bgColor?: string;
  withIcon?: boolean;
}

const Tag = ({ content, bgColor, handleClose, withIcon = false }: ITag) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-md px-2 py-1 font-medium tracking-wide text-sm ${
        bgColor ? bgColor : "bg-black-raisin-tint"
      }`}
    >
      {content}

      {withIcon && (
        <svg
          onClick={() => handleClose && handleClose(content)}
          className="w-4 h-4 text-white-powder cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
      )}
    </div>
  );
};

export default Tag;
