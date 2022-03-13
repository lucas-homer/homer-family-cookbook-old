import type { User } from "@prisma/client";
import type { LoaderFunction } from "remix";
import { json, useLoaderData } from "remix";
import { auth } from "~/utils/auth.server";

type LoaderData = { user: User | null };

export const loader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request, {
    failureRedirect: "/login?returnTo=/profile",
  });

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
