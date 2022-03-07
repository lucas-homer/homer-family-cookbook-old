import {
  Form,
  Link,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import { User } from "@prisma/client";
import { getSession, getUser } from "~/utils/auth.server";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type LoaderData = {
  user: User | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session) {
    return {
      user: null,
    } as LoaderData;
  }

  const user = await getUser(request);

  return {
    user,
  } as LoaderData;
};

export default function App() {
  const data = useLoaderData<LoaderData>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="flex flex-nowrap justify-between">
          <h1>
            <Link
              to="/"
              title="Homer Family Cookbook"
              aria-label="Homer Family Cookbook"
            >
              Home
            </Link>
          </h1>

          {data.user ? (
            <div className="flex">
              <p>{`Welcome ${data.user?.firstName || ""}`}</p>
              <Form action="/logout" method="post">
                <button className="text-3xl">Logout</button>
              </Form>
            </div>
          ) : (
            <Form action="/auth0" method="post">
              <button>Login</button>
            </Form>
          )}
        </header>
        <hr />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
