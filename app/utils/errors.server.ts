import { json } from "remix";

export function badRequest<TActionData>(data: TActionData) {
  return json(data, { status: 400 });
}
