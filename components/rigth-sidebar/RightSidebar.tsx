import Tag from "../tag/Tag";
import Topic from "../topic/Topic";

const RightSidebar = () => {
  return (
    <div className="col-span-3 p-8 bg-black-raisin h-[calc(100vh-76px)] hidden lg:block space-y-8">
      <div className="space-y-4">
        <h2 className="title">Hot Topics</h2>
        {Array.from(
          { length: 4 },
          () => "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ).map((content, idx) => (
          <Topic key={idx} content={content} />
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="title">Popular Tags</h2>
        {Array.from({ length: 4 }, () => "tekken").map((content, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <Tag key={idx} content={content} />
            <p>4k+</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
