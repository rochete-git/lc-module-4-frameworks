import { Recipe } from "../../model";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Omelette",
    description: `
     1. For a basic omelette, crack the eggs into a mixing bowl with a pinch of sea salt and black pepper. Beat well with a fork.
     2. Heat a small knob of butter in a small frying pan on a low heat, and once melted and bubbling, add the eggs and move the pan around to spread them out evenly.
     3. When the omelette begins to cook and firm up, but still has a little raw egg on top, sprinkle over the cheese (if using).
     4. Using a spatula, ease around the edges of the omelette, then fold it over in half. When it starts to turn golden brown underneath, remove the pan from the heat and slide the omelette on to a plate.
    `,
    ingredients: ["2 eggs", "cheese", "salt", "black pepper"],
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-an-omelette-horizontal-1542310072.png",
  },
  {
    id: 2,
    name: "Salad with tomatoes",
    description: `
     1. Combine salad, tomatoes, avocados, garlic and onion in a large bowl.
     2. Sprinkle with lemon juice, and season with salt and pepper.
     3. Garnish salad with thin lemon slices.
    `,
    ingredients: ["salad", "2 tomatoes", "2 avocados", "1 tooth garlic", "1 onion", "lemon juice", "salt", "pepper"],
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps3038__SD143206C04_02_7b-2-696x696.jpg",
  },
  {
    id: 3,
    name: "Spaghetti with tomato sauce",
    description: `
     1. Brown beef over medium heat. Drain off fat.
     2. In a large pot, combine beef, salt, oregano, pepper, garlic powder, onion flakes, diced tomatoes, tomato sauce, and mushrooms. Simmer at a low heat setting for 2 hours, stirring occasionally
     3. Cook pasta according to package directions. Drain. Serve sauce over spaghetti.
    `,
    ingredients: [
      "spaghetti",
      "1 beef",
      "1/4 teaspoon garlic powder",
      "1 onion",
      "3 tomatoes",
      "4 mushrooms",
      "oregano",
      "salt",
    ],
    image: "https://img-global.cpcdn.com/recipes/06a8384c5bba3266/640x640sq70/photo.jpg",
  },
];
