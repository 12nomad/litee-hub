import CustomButton from "../../../components/custom-button/CustomButton";
import MainCard from "../../../components/main-card/MainCard";
import SearchInput from "../../../components/search-input/SearchInput";
import SelectInput from "../../../components/select-input/SelectInput";
import homeFilters from "../../../constants/input-filters";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="title">What&#39;s Happening?</h2>
        <CustomButton title="Ask a Question" size="sm" />
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 my-4">
        <SearchInput
          placeholder="search for questions..."
          bgColor="bg-black-raisin"
          otherClass="w-full lg:w-[70%]"
        />
        <div className="flex-1">
          <SelectInput
            options={homeFilters}
            defaultLabel="Filter by: "
            defaultValue=""
          />
        </div>
      </div>

      <div className="space-y-4">
        <MainCard title="How to get Yuri in KOF-XII?" />
        <MainCard title="How to get Yuri in KOF-XII?" />
      </div>
    </main>
  );
}
