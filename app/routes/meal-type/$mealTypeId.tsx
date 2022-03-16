import type { MealType, Recipe } from "@prisma/client";
import { Link, LoaderFunction, useLoaderData } from "remix";

type LoaderData = { mealType: MealType & { recipes: Recipe[] } };

export const loader: LoaderFunction = async ({ params }) => {
  const mealTypeWithRecipes = await db.mealType.findUnique({
    where: { id: Number(params.mealTypeId) },
    include: { recipes: true },
  });
  if (!mealTypeWithRecipes) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }
  const data: LoaderData = {
    mealType: mealTypeWithRecipes,
  };
  return data;
};

export default function MealType() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <h1 className="text-4xl mb-8">{data.mealType.name}</h1>
      <ul className="pl-8">
        {data.mealType.recipes.map((recipe) => (
          <li key={recipe.id} className="text-xl mb-4">
            <Link prefetch="intent" to={`/recipe/${recipe.id}`}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
