import type {
  Recipe,
  RecipeRead,
  User,
  UsersFavoriteRecipes,
} from "@prisma/client";
import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { requireUserId } from "~/utils/auth.server";
import { getRecentlyViewed } from "~/models/user.server";

type LoaderData = Array<RecipeRead & Recipe>;

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const data = await getRecentlyViewed(userId);

  return data;
};

export default function Profile() {
  const data = useLoaderData<LoaderData>();
  return (
    <>
      <h2>recently viewed</h2>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  );
}
