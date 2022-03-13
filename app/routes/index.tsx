import type { LoaderFunction } from "remix";
import { json, useLoaderData } from "remix";
import { auth } from "~/utils/auth.server";
import { getSession } from "~/utils/cookies.server";

type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const error = session.get(auth.sessionErrorKey) as LoaderData["error"];
  return json<LoaderData>({ error });
};

export default function Index() {
  const { error } = useLoaderData<LoaderData>();

  return (
    <>
      {error ? <div>{error.message}</div> : null}

      <div>index page</div>
    </>
  );
}
