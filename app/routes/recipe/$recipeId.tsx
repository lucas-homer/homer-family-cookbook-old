import { LoaderFunction, useLoaderData } from "remix";
import { getRecipe, GetRecipeResponse } from "~/models/recipe.server";

export const loader: LoaderFunction = async ({ params }) => {
  const recipeData = await getRecipe(Number(params.recipeId));

  if (!recipeData) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }

  return recipeData;
};

export default function Recipe() {
  const recipeData = useLoaderData<GetRecipeResponse>();

  return (
    <div>
      <h1 className="text-4xl mb-8">{recipeData.title}</h1>
      <ul className="pl-8">
        {recipeData.ingredients?.map((ingredient) => (
          <li key={ingredient.id} className="text-xl mb-4">
            <p>{`${ingredient.quantity} ${ingredient.description}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
