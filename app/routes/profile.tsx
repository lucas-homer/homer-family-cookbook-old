import type { User } from "@prisma/client";
import type { LoaderFunction } from "remix";
import { json, useLoaderData } from "remix";
import { requireUserId } from "~/utils/auth.server";
import { getUserById } from "~/models/user.server";

type LoaderData = { user: User | null };

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request, "/profile");
  const user = await getUserById(userId);

  return json<LoaderData>({ user });
};

export default function Screen() {
  const { user } = useLoaderData<LoaderData>();
  return (
    <>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </>
  );
}
