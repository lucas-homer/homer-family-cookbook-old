import {
  Ingredient,
  MealType,
  Note,
  Recipe,
  User,
  UsersFavoriteRecipes,
} from "@prisma/client";
import { db } from "~/models/db.server";

export type GetRecipeResponse = Recipe & { mealTypes: MealType[] } & {
  ingredients: Ingredient[];
} & { notes: Note[] } & { user: User } & {
  favoritedUsers: UsersFavoriteRecipes[];
};

export async function getRecipe(recipeId: Recipe["id"]) {
  return db.recipe.findUnique({
    where: { id: recipeId },
    include: {
      mealTypes: true,
      ingredients: true,
      notes: true,
      author: true,
      favoritedUsers: true,
    },
  });
}

export async function favoriteRecipe({
  recipeId,
  userId,
}: {
  recipeId: Recipe["id"];
  userId: User["id"];
}) {
  return db.usersFavoriteRecipes.create({
    data: {
      recipeId,
      userId,
    },
  });
}
export async function unfavoriteRecipe({
  recipeId,
  userId,
}: {
  recipeId: Recipe["id"];
  userId: User["id"];
}) {
  return db.usersFavoriteRecipes.delete({
    where: {
      recipeId_userId: {
        userId,
        recipeId,
      },
    },
  });
}
