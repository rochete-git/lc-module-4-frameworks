import { FieldValidationFunctionSync } from "@lemoncode/fonk";

const hasDescription: FieldValidationFunctionSync = ({ value }) => {
  const isValid = value.length > 0;
  return {
    type: "STRING_NOT_EMPTY",
    succeeded: isValid,
    message: isValid ? "" : "Add a description of this recipe",
  };
};

export { hasDescription };
