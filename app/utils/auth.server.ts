import { Authenticator } from "remix-auth";
import { Auth0Profile, Auth0Strategy } from "remix-auth-auth0";
import { redirect } from "remix";
import {
  sessionStorage,
  getSession,
  destroySession,
} from "~/utils/cookies.server";
import { db } from "~/models/db.server";
import type { User } from "@prisma/client";

import {
  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
} from "~/constants/index.server";
import { getUserId } from "../models/user.server";

export type AppAuth = Auth0Profile & { userId: User["id"] };
export const auth = new Authenticator<AppAuth>(sessionStorage);

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: AUTH0_CALLBACK_URL,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    domain: AUTH0_DOMAIN,
  },
  async ({ profile }) => {
    const email = profile.emails[0].value;
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      const newUser = await db.user.create({
        data: {
          email,
        },
      });
      return {
        ...profile,
        userId: newUser.id,
      };
    }
    return {
      ...profile,
      userId: user.id,
    };
  }
);

auth.use(auth0Strategy);

export async function logout(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

export async function requireUserId(
  request: Request,
  returnTo: string = new URL(request.url).pathname
) {
  const userId = await getUserId(request);
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["returnTo", returnTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}
