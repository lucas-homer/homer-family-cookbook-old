export async function getMealTypes() {
  return db.mealType.findMany({});
}
