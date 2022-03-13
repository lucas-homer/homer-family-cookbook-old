import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { redirect } from "remix";
import {
  sessionStorage,
  getSession,
  destroySession,
} from "~/utils/cookies.server";
import { db } from "~/utils/db.server";
import type { User } from "@prisma/client";

import {
  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
} from "~/constants/index.server";

export const auth = new Authenticator<User>(sessionStorage);

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
      return db.user.create({
        data: {
          email,
        },
      });
    }

    return user;
  }
);

auth.use(auth0Strategy);

export function getUserSession(request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = await session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
