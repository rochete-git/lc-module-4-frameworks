import { createFormValidation, Validators, ValidationSchema } from "@lemoncode/fonk";
import { hasDescription } from "../../../common/validations/hasDescription";
import { hasItems } from "../../../common/validations/hasItems";

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    ingredients: [hasItems],
    description: [hasDescription],
  },
};

export const validations = createFormValidation(validationSchema);
