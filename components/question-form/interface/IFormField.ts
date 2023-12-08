import { KeyboardEvent } from "react";
import { FieldValue, FieldValues } from "react-hook-form";

export interface IFormField<T extends FieldValues> {
  name: FieldValue<T>;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  type?: string;
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>, name: string) => void;
}
