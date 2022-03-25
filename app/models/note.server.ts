import { Note, MealType, Recipe } from "@prisma/client";
import { db } from "~/models/db.server";

export async function getNotesByRecipeId(recipeId: Recipe["id"]) {
  return db.note.findMany({
    where: {
      recipeId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });
}

export async function createNote({
  content,
  recipeId,
  userId,
}: {
  content: Note["content"];
  recipeId: Note["recipeId"];
  userId: Note["authorId"];
}) {
  return db.note.create({
    data: {
      content,
      authorId: userId,
      recipeId,
    },
  });
}

export async function updateNote({
  content,
  noteId,
}: {
  content: Note["content"];
  noteId: Note["id"];
}) {
  return db.note.update({
    where: {
      id: noteId,
    },
    data: {
      content,
    },
    include: {
      author: true,
    },
  });
}
