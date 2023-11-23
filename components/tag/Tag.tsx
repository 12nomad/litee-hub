interface ITag {
  content: string;
}

const Tag = ({ content }: ITag) => {
  return (
    <div className="uppercase rounded-md bg-black-raisin-tint px-2 py-1 font-medium tracking-wide text-sm">
      {content}
    </div>
  );
};

export default Tag;
