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
import type { User } from "@prisma/client";

import { getUser } from "./models/user.server";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type LoaderData = {
  user: User | null;
};

export const loader: LoaderFunction = async ({ request }) => {
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
        <header className="flex flex-nowrap justify-between items-center p-2">
          <h1 className="text-3xl">
            <Link
              to="/"
              title="Homer Family Cookbook"
              aria-label="Homer Family Cookbook"
            >
              HFC
            </Link>
          </h1>

          {data.user ? (
            <div className="flex gap-4">
              <p>{`Welcome ${data.user?.firstName || ""}`}</p>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </div>
          ) : (
            <Form action="/login" method="post">
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
