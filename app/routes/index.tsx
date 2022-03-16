import { MealType } from "@prisma/client";
import { json, Link, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getMealTypes } from "~/models/mealType";

export const loader: LoaderFunction = async () => {
  const mealTypes = await getMealTypes();
  return json<MealType[]>(mealTypes);
};

export default function Index() {
  const mealTypes = useLoaderData<MealType[]>();

  return (
    <main>
      <section>
        <h2 className="text-4xl mb-8">Meal Types</h2>
        <ul className="pl-8">
          {mealTypes.map((item) => (
            <li key={item.id} className="text-xl mb-4">
              <Link prefetch="intent" to={`/meal-type/${item.id}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
