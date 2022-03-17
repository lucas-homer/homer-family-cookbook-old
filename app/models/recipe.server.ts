import { Ingredient, MealType, Note, Recipe, User } from "@prisma/client";
import { db } from "~/models/db.server";

export type GetRecipeResponse = Recipe & { mealTypes: MealType[] } & {
  ingredients: Ingredient[];
} & { notes: Note[] } & { user: User };
export async function getRecipe(recipeId: Recipe["id"]) {
  return db.recipe.findUnique({
    where: { id: recipeId },
    include: {
      mealTypes: true,
      ingredients: true,
      notes: true,
      author: true,
    },
  });
}
