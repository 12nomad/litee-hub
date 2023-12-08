import { IHomeFilters } from "../../types/IHomeFilters";

interface ISelectInput {
  options: readonly IHomeFilters[];
}

const SelectInput = ({ options }: ISelectInput) => {
  return (
    <select
      id="filter"
      className="bg-black-raisin text-white-powder border-none text-sm rounded-md focus:ring-2 focus:ring-yellow-bus block w-full p-3"
    >
      {options.map((option) =>
        option.isDefault ? (
          <option
            key={option.value + option.label}
            defaultValue={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ) : (
          <option key={option.value + option.label} value={option.value}>
            {option.label}
          </option>
        )
      )}
    </select>
  );
};

export default SelectInput;
