import type { User } from "@prisma/client";
import type { LoaderFunction } from "remix";
import { Form, json, useLoaderData } from "remix";
import type { Auth0Profile } from "remix-auth-auth0";
import { auth } from "~/utils/auth.server";
import { db } from "~/utils/db.server";

type LoaderData = { profile: Auth0Profile; userRecord: User | null };

export const loader: LoaderFunction = async ({ request }) => {
  const profile = await auth.isAuthenticated(request, {
    failureRedirect: "/",
  });

  const userRecord = await db.user.findUnique({
    where: { id: profile.userId },
  });

  return json<LoaderData>({ profile, userRecord });
};

export default function Screen() {
  const { profile, userRecord } = useLoaderData<LoaderData>();
  return (
    <>
      <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
        <code>{JSON.stringify(userRecord, null, 2)}</code>
      </pre>
    </>
  );
}
