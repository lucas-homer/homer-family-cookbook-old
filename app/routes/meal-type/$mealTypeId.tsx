import type { MealType } from "@prisma/client";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { getMealTypeWithRecipes, MealTypeWithRecipes } from "~/models/mealType";

export const loader: LoaderFunction = async ({ params }) => {
  const mealTypeWithRecipes = await getMealTypeWithRecipes(
    Number(params.mealTypeId)
  );
  if (!mealTypeWithRecipes) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }

  return mealTypeWithRecipes;
};

export default function MealType() {
  const data = useLoaderData<MealTypeWithRecipes>();
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