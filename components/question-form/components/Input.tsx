import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { IFormField } from "../interface/IFormField";

interface IInput<T extends FieldValues> extends IFormField<T> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const Input = <T extends FieldValues>({
  errors,
  name,
  label,
  register,
  handleKeyDown,
  isRequired = true,
  isDisabled = true,
  type = "text",
}: IInput<T>) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm text-white-powder">
        {label} <sup className="text-red-engine">*</sup>
      </label>
      <input
        type={type}
        id={name}
        className={`text-sm border-none text-white rounded-md sm:text-sm focus:ring-2 bg-black-raisin block w-full p-3 ${
          errors[name]?.message
            ? "focus:ring-red-engine focus:border-red-engine"
            : "focus:ring-yellow-bus focus:border-yellow-busring-yellow-bus"
        }`}
        disabled={!isDisabled}
        // placeholder="..."
        onKeyDown={(e) => handleKeyDown && handleKeyDown(e, name)}
        {...register(name)}
      />
      {errors[name] && (
        <p role="alert" className="text-xs text-red-engine mt-2">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
