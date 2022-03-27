import { useEffect, useRef, useState } from "react";
import { useActionData, useFetcher } from "remix";
import { Note } from "@prisma/client";
import { actionIds } from "~/routes/recipes/$recipeId";

type NoteProps = {
  note: Note;
};

export default function Note({ note }: NoteProps) {
  const fetcher = useFetcher();
  const actionId = fetcher.submission?.formData.get("actionId");
  const isEditingNote = actionId === actionIds.updateNote;

  const actionData = useActionData();

  const [editNoteFormData, setEditNoteForm] = useState<Note | null>(null);
  const editNoteFormRef = useRef<HTMLFormElement>(null);
  const editNoteContentRef = useRef<HTMLTextAreaElement>(null);
  console.log("fetcher.state", fetcher.state);

  // after saving note update, reset and change out of edit mode
  useEffect(() => {
    if (!isEditingNote) {
      editNoteFormRef.current && editNoteFormRef.current.reset();
      setEditNoteForm(null);
    }
  }, [isEditingNote]);

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
          <button
            onClick={() => {
              setEditNoteForm(note);
            }}
            disabled={fetcher.state === "loading"}
          >
            edit
          </button>
        </div>
      ) : (
        <fetcher.Form method="post" ref={editNoteFormRef}>
          <div className="flex flex-nowrap justify-between">
            <div>
              <input hidden name="noteId" defaultValue={note.id} />
              <textarea
                disabled={fetcher.state === "submitting"}
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
            <button onClick={() => setEditNoteForm(null)} type="button">
              cancel
            </button>
            <button
              type="submit"
              name="actionId"
              value="updateNote"
              disabled={fetcher.state === "submitting"}
            >
              {isEditingNote ? "saving..." : "save"}
            </button>
          </div>
        </fetcher.Form>
      )}
    </>
  );
}
