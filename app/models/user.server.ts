import type { User } from "@prisma/client";
import { auth, logout } from "../utils/auth.server";

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

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function getUserById(userId: User["id"]): Promise<User | null> {
  return await db.user.findUnique({
    where: { id: userId },
  });
}
