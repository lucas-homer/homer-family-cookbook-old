import { Note, User } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import {
  ActionFunction,
  Form,
  Link,
  LoaderFunction,
  Outlet,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from "remix";
import {
  createNote,
  getNotesByRecipeId,
  updateNote,
} from "~/models/note.server";
import {
  favoriteRecipe,
  unfavoriteRecipe,
  getRecipe,
  GetRecipeResponse,
  recordRecipeView,
} from "~/models/recipe.server";
import { getUserId } from "~/models/user.server";
import { requireUserId } from "~/utils/auth.server";
import { badRequest } from "~/utils/errors.server";

type LoaderData = {
  recipeData: GetRecipeResponse;
  userId: User["id"] | null;
  notes: Note[];
};
export const loader: LoaderFunction = async ({ params, request }) => {
  const userId = await getUserId(request);
  const recipeId = Number(params.recipeId);

  const recipeData = await getRecipe(recipeId);
  const notes = await getNotesByRecipeId(recipeId);

  if (!recipeData) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }

  if (userId) {
    await recordRecipeView({
      userId,
      recipeId,
    });
  }

  return {
    userId,
    recipeData,
    notes,
  };
};

type ActionData = {
  formError?: string;
  fieldErrors?: {
    content: string | undefined;
  };
  fields?: {
    content: string;
  };
};

const actionIds = {
  favorite: "favorite",
  unfavorite: "unfavorite",
  addNote: "addNote",
  updateNote: "updateNote",
  login: "login",
};

function validateNoteContent(content: Note["content"]) {
  if (content.length < 3) {
    return `That note is too short.`;
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const recipeId = Number(params.recipeId);

  const form = await request.formData();
  const actionId = form.get("actionId");

  switch (actionId) {
    case actionIds.login: {
      requireUserId(request);
    }
    case actionIds.updateNote: {
      const noteId = form.get("noteId");
      const content = form.get("content");

      if (typeof content !== "string" || typeof noteId !== "string") {
        return badRequest({
          formError: `Form not submitted correctly.`,
        });
      }

      const fieldErrors = {
        content: validateNoteContent(content),
      };
      const fields = { content };

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fieldErrors, fields });
      }

      await updateNote({
        noteId: Number(noteId),
        content,
      });

      return redirect(`recipes/${recipeId}`);
    }
    case actionIds.addNote: {
      const content = form.get("content");

      if (typeof content !== "string") {
        return badRequest({
          formError: `Form not submitted correctly.`,
        });
      }

      const fieldErrors = {
        content: validateNoteContent(content),
      };
      const fields = { content };

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fieldErrors, fields });
      }

      await createNote({
        userId,
        recipeId,
        content,
      });

      return redirect(`recipes/${recipeId}`);
    }
    case actionIds.unfavorite: {
      await unfavoriteRecipe({
        userId,
        recipeId,
      });
    }
    case actionIds.favorite: {
      const response = await favoriteRecipe({
        userId,
        recipeId,
      });
    }
    default: {
      throw new Error(`Invalid actionId: ${actionId}`);
    }
  }
};

export default function Recipe() {
  const { notes, recipeData, userId } = useLoaderData<LoaderData>();

  const [editNoteFormData, setEditNoteForm] = useState<Note | null>(null);
  const editNoteFormRef = useRef<HTMLFormElement>(null);
  const editNoteContentRef = useRef<HTMLTextAreaElement>(null);
  const createNoteFormRef = useRef<HTMLFormElement>(null);
  const createNoteContentRef = useRef<HTMLTextAreaElement>(null);

  const transition = useTransition();
  const actionId = transition.submission?.formData.get("actionId");
  const isCreatingNote = actionId === actionIds.addNote;
  const isEditingNote = actionId === actionIds.updateNote;

  // after saving new note, reset and focus back into the new note input
  useEffect(() => {
    if (transition.state === "loading" && isCreatingNote) {
      createNoteContentRef.current?.focus();
      createNoteFormRef.current?.reset();
    }
  }, [isCreatingNote, transition.state]);

  // after saving note update, reset and change out of edit mode
  useEffect(() => {
    if (transition.state === "loading" && isEditingNote) {
      editNoteFormRef.current && editNoteFormRef.current.reset();
      setEditNoteForm(null);
    }
  }, [transition.state, isEditingNote]);

  // focus the input after opening edit form
  useEffect(() => {
    if (transition.state === "idle" && editNoteFormData) {
      editNoteContentRef.current?.focus();
    }
  }, [transition.state, editNoteFormData]);

  const actionData = useActionData<ActionData>();

  const isRecipeFavorited = recipeData.favoritedUsers.some(
    (item) => item.userId === userId
  );
  const favoriteButtonText = isRecipeFavorited
    ? "REMOVE FROM FAVORITES"
    : "FAVORITE THIS RECIPE";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl mb-8">{recipeData.title}</h1>
        <Form method="post">
          <input
            type="hidden"
            name="actionId"
            value={
              isRecipeFavorited ? actionIds.unfavorite : actionIds.favorite
            }
          />
          <button type="submit">{favoriteButtonText}</button>
        </Form>
      </div>
      <ul className="pl-8">
        <h3>Ingredients</h3>
        {recipeData.ingredients?.map((ingredient) => (
          <li key={ingredient.id} className="text-xl mb-4">
            <p>{`${ingredient.quantity} ${ingredient.name}`}</p>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl">Instructions</h3>
      <p>{recipeData.instructions}</p>
      <br />
      <div>
        <Outlet />
        <h3 className="text-2xl">Notes</h3>
        {userId ? (
          <Form method="post" ref={createNoteFormRef}>
            <fieldset disabled={transition.state === "submitting"}>
              <div className="flex flex-nowrap ">
                <div className="flex flex-col ">
                  <label className="font-bold" htmlFor="content">
                    Note:{" "}
                  </label>
                  <textarea
                    ref={createNoteContentRef}
                    id="content"
                    className="border-2 border-solid border-gray-400 rounded-md"
                    name="content"
                    defaultValue={actionData?.fields?.content}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.content) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.content
                        ? "content-error"
                        : undefined
                    }
                  />
                  {actionData?.fieldErrors?.content ? (
                    <p className="text-red-600" role="alert" id="content-error">
                      {actionData.fieldErrors.content}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="border-2 border-solid border-gray-400 rounded-md  ml-2 py-1 px-2 self-end"
                  name="actionId"
                  value="addNote"
                >
                  {isCreatingNote ? "..." : "+"}
                </button>
              </div>
            </fieldset>
          </Form>
        ) : (
          <Form method="post">
            <button
              type="submit"
              name="actionId"
              value="login"
              className="text-xl text-blue-700"
            >
              Login
            </button>
          </Form>
        )}
        <div className="mt-4">
          <ul>
            {notes.length ? (
              notes?.map((note) => {
                return (
                  <li key={note.id} className="m-2 p-2 bg-stone-200">
                    {/* TODO -- add metadata and make sure we sort the data on server in reverse chronological order */}
                    {editNoteFormData?.id !== note.id ? (
                      // static
                      <div className="flex flex-nowrap justify-between">
                        <p>{note.content}</p>
                        <button
                          onClick={() => {
                            setEditNoteForm(note);
                          }}
                          disabled={transition.state === "loading"}
                        >
                          edit
                        </button>
                      </div>
                    ) : (
                      <Form method="post" ref={editNoteFormRef}>
                        <div className="flex flex-nowrap justify-between">
                          <div>
                            <input
                              hidden
                              name="noteId"
                              defaultValue={note.id}
                            />
                            <textarea
                              disabled={transition.state === "submitting"}
                              ref={editNoteContentRef}
                              id="content"
                              className="border-2 border-solid border-gray-400 rounded-md"
                              name="content"
                              defaultValue={editNoteFormData.content}
                              aria-invalid={
                                Boolean(actionData?.fieldErrors?.content) ||
                                undefined
                              }
                              aria-describedby={
                                actionData?.fieldErrors?.content
                                  ? "content-error"
                                  : undefined
                              }
                            />
                            {actionData?.fieldErrors?.content ? (
                              <p
                                className="text-red-600"
                                role="alert"
                                id="content-error"
                              >
                                {actionData.fieldErrors.content}
                              </p>
                            ) : null}
                          </div>
                          <button
                            onClick={() => setEditNoteForm(null)}
                            type="button"
                          >
                            cancel
                          </button>
                          <button
                            type="submit"
                            name="actionId"
                            value="updateNote"
                            disabled={transition.state === "submitting"}
                          >
                            {isEditingNote ? "saving..." : "save"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </li>
                );
              })
            ) : (
              <p>No notes for this recipe</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
