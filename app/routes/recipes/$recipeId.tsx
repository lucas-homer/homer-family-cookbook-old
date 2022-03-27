import { Note, User } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useActionData,
  useFetcher,
  useLoaderData,
} from "remix";
import {
  createNote,
  deleteNote,
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

export const actionIds = {
  favorite: "favorite",
  unfavorite: "unfavorite",
  addNote: "addNote",
  updateNote: "updateNote",
  deleteNote: "deleteNote",
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
    case actionIds.deleteNote: {
      const noteId = form.get("noteId");

      if (typeof noteId !== "string") {
        return badRequest({
          formError: `Form not submitted correctly.`,
        });
      }

      return deleteNote(parseInt(noteId));
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

      return updateNote({
        noteId: Number(noteId),
        content,
      });
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
      console.log("UNFAVORITE CASE");
      await unfavoriteRecipe({
        userId,
        recipeId,
      });
      return null;
    }
    case actionIds.favorite: {
      await favoriteRecipe({
        userId,
        recipeId,
      });
      return null;
    }
    default: {
      throw new Error(`Invalid actionId: ${actionId}`);
    }
  }
};

export default function Recipe() {
  const { notes, recipeData, userId } = useLoaderData<LoaderData>();

  const createNoteFormRef = useRef<HTMLFormElement>(null);
  const createNoteContentRef = useRef<HTMLTextAreaElement>(null);

  const fetcher = useFetcher();
  const actionId = fetcher.submission?.formData.get("actionId");
  const isCreatingNote = actionId === actionIds.addNote;
  const isUpdatingFavorite =
    actionId === actionIds.favorite || actionId === actionIds.unfavorite;

  // after saving new note, reset and focus back into the new note input
  useEffect(() => {
    if (!isCreatingNote && fetcher.type !== "init") {
      createNoteContentRef.current?.focus();
      createNoteFormRef.current?.reset();
    }
  }, [isCreatingNote, fetcher.type]);

  const actionData = useActionData<ActionData>();
  const isRecipeFavorited = recipeData.favoritedUsers.some(
    (item) => item.userId === userId
  );
  const favoriteButtonText = isUpdatingFavorite
    ? "Saving..."
    : isRecipeFavorited
    ? "REMOVE FROM FAVORITES"
    : "FAVORITE THIS RECIPE";

  return (
    <div className="p-8">
      {/* ****RECIPE*** */}
      <section className="">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">{recipeData.title}</h1>
          <fetcher.Form method="post">
            <button
              disabled={isUpdatingFavorite}
              type="submit"
              name="actionId"
              value={
                isRecipeFavorited ? actionIds.unfavorite : actionIds.favorite
              }
            >
              {favoriteButtonText}
            </button>
          </fetcher.Form>
        </div>
        <ul>
          <h3 className="text-2xl mb-2">Ingredients</h3>
          {recipeData.ingredients?.map((ingredient) => (
            <li key={ingredient.id} className="text-lg mb-3">
              <p>{`-- ${ingredient.quantity} ${ingredient.name}`}</p>
            </li>
          ))}
        </ul>
        <br />
        <h3 className="text-2xl mb-2">Instructions</h3>
        <p>{recipeData.instructions}</p>
      </section>

      <hr className="my-12" />

      {/* ****NOTES*** */}
      <section>
        <h3 className="text-2xl mb-2">Notes</h3>
        {userId ? (
          <fetcher.Form method="post" ref={createNoteFormRef}>
            <fieldset disabled={fetcher.state === "submitting"}>
              <div className="flex flex-nowrap ">
                <div className="flex flex-col ">
                  <label className="font-bold" htmlFor="content">
                    Add:{" "}
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
          </fetcher.Form>
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
        <ul className="mt-4">
          {notes.length ? (
            notes?.map((note) => {
              return (
                <li key={note.id} className="my-2 p-2 bg-stone-200">
                  {/* TODO -- add metadata and make sure we sort the data on server in reverse chronological order */}
                  <NoteItem note={note} userId={userId} />
                </li>
              );
            })
          ) : (
            <p>No notes for this recipe</p>
          )}
        </ul>
      </section>
    </div>
  );
}

type NoteProps = {
  note: Note;
  userId: User["id"] | null;
};

function NoteItem({ note, userId }: NoteProps) {
  const fetcher = useFetcher();
  const actionId = fetcher.submission?.formData.get("actionId");
  const isSpecificNote =
    Number(fetcher.submission?.formData.get("noteId")) === note.id;
  const isUpdating = isSpecificNote && actionId === actionIds.updateNote;
  const isDeleting = isSpecificNote && actionId === actionIds.deleteNote;

  const showEditButton = userId === note.authorId;
  const actionData = useActionData();

  const [editNoteFormData, setEditNoteForm] = useState<Note | null>(null);
  const editNoteFormRef = useRef<HTMLFormElement>(null);
  const editNoteContentRef = useRef<HTMLTextAreaElement>(null);
  console.log("fetcher.state", fetcher.state);

  // after saving note update, reset and change out of edit mode
  useEffect(() => {
    if (!isUpdating) {
      editNoteFormRef.current && editNoteFormRef.current.reset();
      setEditNoteForm(null);
    }
  }, [isUpdating]);

  // focus the input after opening edit form
  useEffect(() => {
    if (fetcher.state === "idle" && editNoteFormData) {
      editNoteContentRef.current?.focus();
    }
  }, [fetcher.state, editNoteFormData]);

  return (
    <>
      {editNoteFormData?.id !== note.id ? (
        <div className="flex flex-nowrap justify-between">
          <p>{note.content}</p>
          {showEditButton ? (
            <button
              onClick={() => {
                setEditNoteForm(note);
              }}
              disabled={isUpdating}
            >
              {isUpdating ? "..." : "edit"}
            </button>
          ) : null}
        </div>
      ) : (
        <fetcher.Form method="post" ref={editNoteFormRef}>
          <div className="flex flex-nowrap justify-between">
            <div>
              <input hidden name="noteId" defaultValue={note.id} />
              <textarea
                disabled={isUpdating || isDeleting}
                ref={editNoteContentRef}
                id="content"
                className="border-2 border-solid border-gray-400 rounded-md"
                name="content"
                defaultValue={editNoteFormData.content}
                aria-invalid={
                  Boolean(actionData?.fieldErrors?.content) || undefined
                }
                aria-describedby={
                  actionData?.fieldErrors?.content ? "content-error" : undefined
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
              name="actionId"
              value="updateNote"
              disabled={isDeleting || isUpdating}
            >
              {isUpdating ? "saving..." : "save"}
            </button>
            <button
              type="submit"
              name="actionId"
              value="deleteNote"
              disabled={isDeleting || isUpdating}
            >
              {isDeleting ? "deleting... " : "delete"}
            </button>
            <button onClick={() => setEditNoteForm(null)} type="button">
              cancel
            </button>
          </div>
        </fetcher.Form>
      )}
    </>
  );
}
