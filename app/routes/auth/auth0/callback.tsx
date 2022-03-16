import type { LoaderFunction } from "remix";
import { auth } from "~/utils/auth.server";
import { returnToCookie } from "~/utils/cookies.server";

export let loader: LoaderFunction = async ({ request }) => {
  // get the returnTo from the cookie
  let returnTo =
    (await returnToCookie.parse(request.headers.get("Cookie"))) ?? "/profile";

  // call authenticate to complete the login and set returnTo as the successRedirect
  return await auth.authenticate("auth0", request, {
    successRedirect: returnTo,
    failureRedirect: "/",
  });
};
