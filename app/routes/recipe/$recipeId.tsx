import { User } from "@prisma/client";
import { ActionFunction, Form, LoaderFunction, useLoaderData } from "remix";
import {
  favoriteRecipe,
  unfavoriteRecipe,
  getRecipe,
  GetRecipeResponse,
} from "~/models/recipe.server";
import { getUserId } from "~/models/user.server";
import { requireUserId } from "~/utils/auth.server";

type LoaderData = {
  recipeData: GetRecipeResponse;
  userId: User["id"] | null;
};
export const loader: LoaderFunction = async ({ params, request }) => {
  const recipeData = await getRecipe(Number(params.recipeId));
  const userId = await getUserId(request);

  if (!recipeData) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }

  return {
    userId,
    recipeData,
  };
};

const actionIds = {
  favorite: "favorite",
  unfavorite: "unfavorite",
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const recipeId = Number(params.recipeId);

  const form = await request.formData();
  const actionId = form.get("actionId");

  if (actionId === actionIds.favorite) {
    const response = await favoriteRecipe({
      userId,
      recipeId,
    });
    console.log("response", response);
  }

  if (actionId === actionIds.unfavorite) {
    await unfavoriteRecipe({
      userId,
      recipeId,
    });
  }
  return null;
};

export default function Recipe() {
  const { recipeData, userId } = useLoaderData<LoaderData>();

  const isRecipeFavorited = recipeData.favoritedUsers.some(
    (item) => item.userId === userId
  );
  const favoriteButtonText = isRecipeFavorited
    ? "REMOVE FROM FAVORITES"
    : "FAVORITE THIS RECIPE";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl mb-8">{recipeData.title}</h1>
        <Form method="post">
          <input
            type="hidden"
            name="actionId"
            value={
              isRecipeFavorited ? actionIds.unfavorite : actionIds.favorite
            }
          />
          <button type="submit">{favoriteButtonText}</button>
        </Form>
      </div>
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
