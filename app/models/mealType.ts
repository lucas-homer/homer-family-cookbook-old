import { db } from "~/models/db.server";

export async function getMealTypes() {
  return db.mealType.findMany({});
}
