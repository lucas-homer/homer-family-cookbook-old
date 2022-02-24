// app/routes/auth/auth0.tsx
import { ActionFunction, LoaderFunction, redirect } from "remix";

import { auth } from "~/utils/auth.server";

export let loader: LoaderFunction = () => redirect("/");

export let action: ActionFunction = ({ request }) => {
  return auth.authenticate("auth0", request);
};
