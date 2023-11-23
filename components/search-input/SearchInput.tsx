interface ISearchInput {
  placeholder: string;
  bgColor?: string;
  otherClass?: string;
}

const SearchInput = ({ otherClass, placeholder, bgColor }: ISearchInput) => {
  return (
    <form className={otherClass}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
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
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="main-search"
          className={`block w-full px-6 py-3 pl-10 text-sm border-none text-white rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-bus ${
            bgColor ? bgColor : "bg-black-raisin-tint"
          }`}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
};

export default SearchInput;
