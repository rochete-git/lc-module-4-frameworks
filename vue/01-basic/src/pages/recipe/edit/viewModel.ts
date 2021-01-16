import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  description: "",
  ingredients: [],
  image: "",
});

export interface RecipeError {
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
});
