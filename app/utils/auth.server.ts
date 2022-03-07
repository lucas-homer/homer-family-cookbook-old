import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { createCookieSessionStorage, redirect } from "remix";
import { db } from "~/utils/db.server";
import type { Auth0Profile } from "remix-auth-auth0";
import type { User } from "@prisma/client";

import {
  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  SECRETS,
} from "~/constants/index.server";

if (!SECRETS) {
  throw new Error("SECRETS must be set");
}

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_remix_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    secrets: [SECRETS],
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
  },
});

export const auth = new Authenticator<Auth0Profile & { userId: User["id"] }>(
  sessionStorage
);

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: AUTH0_CALLBACK_URL,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    domain: AUTH0_DOMAIN,
  },
  async ({ profile }) => {
    const email = profile.emails[0].value;
    const userExists = await db.user.findUnique({
      where: { email },
    });

    if (!userExists) {
      const newUser = await db.user.create({
        data: {
          email,
        },
      });

      return { ...profile, userId: newUser.id };
    }

    return { ...profile, userId: userExists.id };
  }
);

auth.use(auth0Strategy);

export const { getSession, commitSession, destroySession } = sessionStorage;

export async function getUserId(request: Request) {
  const profile = await auth.isAuthenticated(request);
  const userId = profile?.userId;
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
  return redirect("/auth0", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
