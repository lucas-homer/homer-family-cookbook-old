import type { User } from "@prisma/client";
import { auth } from "../utils/auth.server";
import { db } from "~/models/db.server";

export async function getUserId(request: Request) {
  const authProfile = await auth.isAuthenticated(request);
  const userId = authProfile?.userId;

  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);

  if (!userId || typeof userId !== "string") {
    return null;
  }

  return db.user.findUnique({
    where: { id: userId },
  });
}

export async function getUserProfile(request: Request) {
  const userId = await getUserId(request);

  if (!userId || typeof userId !== "string") {
    return null;
  }

  return db.user.findUnique({
    where: { id: userId },
    include: {
      recipes: true,
      favoriteRecipes: {
        include: {
          recipe: true,
        },
      },
      recipeReads: {
        include: {
          recipe: true,
        },
      },
    },
  });
}

export async function getRecentlyViewed(userId: User["id"]) {
  return db.recipeRead.findMany({
    where: {
      userId,
    },
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
    include: {
      recipe: true,
    },
  });
}

export async function getUserById(userId: User["id"]): Promise<User | null> {
  return await db.user.findUnique({
    where: { id: userId },
  });
}
