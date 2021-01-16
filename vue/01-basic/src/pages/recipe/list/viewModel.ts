export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
}

export interface RecipeHeader {
  name: string;
  description: string;
}