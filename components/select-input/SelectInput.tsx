import { IHomeFilters } from "../../types/IHomeFilters";

interface ISelectInput {
  options: readonly IHomeFilters[];
  defaultValue: string;
  defaultLabel: string;
}

const SelectInput = ({ options, defaultLabel, defaultValue }: ISelectInput) => {
  return (
    <select
      id="filter"
      className="bg-black-raisin text-white-powder border-none text-sm rounded-md focus:ring-2 focus:ring-yellow-bus block w-full p-3"
    >
      <option defaultValue={defaultValue} value={defaultValue}>
        {defaultLabel}
      </option>
      {options.map((option) => (
        <option key={option.value + option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
