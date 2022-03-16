import { MealType, Recipe } from "@prisma/client";
import { db } from "~/models/db.server";

export async function getMealTypes() {
  return db.mealType.findMany({});
}

export type MealTypeWithRecipes = {
  mealType: MealType & { recipes: Recipe[] };
};
export async function getMealTypeWithRecipes(id: MealType["id"]) {
  return db.mealType.findUnique({
    where: { id },
    include: { recipes: true },
  });
}
