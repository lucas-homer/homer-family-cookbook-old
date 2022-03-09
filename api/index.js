var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/lucashomer/homer-family-cookbook/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/utils/auth.server.ts
init_react();
var import_remix_auth = require("remix-auth");
var import_remix_auth_auth0 = require("remix-auth-auth0");
var import_remix2 = __toESM(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
} else {
  if (!global.db) {
    global.db = new import_client.PrismaClient();
  }
  db = global.db;
  db.$connect();
}

// app/constants/index.server.ts
init_react();
var AUTH0_RETURN_TO_URL = process.env.AUTH0_RETURN_TO_URL;
var AUTH0_CALLBACK_URL = process.env.AUTH0_CALLBACK_URL;
var AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
var AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
var AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
var AUTH0_LOGOUT_URL = process.env.AUTH0_LOGOUT_URL;
var SECRETS = process.env.SECRETS;

// app/utils/auth.server.ts
if (!SECRETS) {
  throw new Error("SECRETS must be set");
}
var sessionStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "_remix_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    secrets: [SECRETS],
    secure: false
  }
});
var auth = new import_remix_auth.Authenticator(sessionStorage);
var auth0Strategy = new import_remix_auth_auth0.Auth0Strategy({
  callbackURL: AUTH0_CALLBACK_URL,
  clientID: AUTH0_CLIENT_ID,
  clientSecret: AUTH0_CLIENT_SECRET,
  domain: AUTH0_DOMAIN
}, async ({ profile }) => {
  const email = profile.emails[0].value;
  const userExists = await db.user.findUnique({
    where: { email }
  });
  if (!userExists) {
    const newUser = await db.user.create({
      data: {
        email
      }
    });
    return __spreadProps(__spreadValues({}, profile), { userId: newUser.id });
  }
  return __spreadProps(__spreadValues({}, profile), { userId: userExists.id });
});
auth.use(auth0Strategy);
var { getSession, commitSession, destroySession } = sessionStorage;
async function getUserId(request) {
  const profile = await auth.isAuthenticated(request);
  const userId = profile == null ? void 0 : profile.userId;
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }
  try {
    const user = await db.user.findUnique({
      where: { id: userId }
    });
    return user;
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  const session = await getSession(request.headers.get("Cookie"));
  return (0, import_remix2.redirect)("/auth0", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/styles/app.css
var app_default = "/build/_assets/app-VYVWQRN5.css";

// route:/Users/lucashomer/homer-family-cookbook/app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
var links = () => [{ rel: "stylesheet", href: app_default }];
var loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session) {
    return {
      user: null
    };
  }
  const user = await getUser(request);
  return {
    user
  };
};
function App() {
  var _a;
  const data = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("header", {
    className: "flex flex-nowrap justify-between"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    title: "Homer Family Cookbook",
    "aria-label": "Homer Family Cookbook"
  }, "Home")), data.user ? /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement("p", null, `Welcome ${((_a = data.user) == null ? void 0 : _a.firstName) || ""}`), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Logout"))) : /* @__PURE__ */ React.createElement(import_remix3.Form, {
    action: "/auth0",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Login"))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/auth/auth0/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  loader: () => loader2
});
init_react();
var loader2 = ({ request }) => {
  return auth.authenticate("auth0", request, {
    successRedirect: "/profile",
    failureRedirect: "/"
  });
};

// route:/Users/lucashomer/homer-family-cookbook/app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Screen,
  loader: () => loader3
});
init_react();
var import_remix4 = __toESM(require_remix());
var loader3 = async ({ request }) => {
  const profile = await auth.isAuthenticated(request, {
    failureRedirect: "/"
  });
  const userRecord = await db.user.findUnique({
    where: { id: profile.userId }
  });
  return (0, import_remix4.json)({ profile, userRecord });
};
function Screen() {
  const { profile, userRecord } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(profile, null, 2)), /* @__PURE__ */ React.createElement("code", null, JSON.stringify(userRecord, null, 2))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
init_react();
var import_remix5 = __toESM(require_remix());
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const logoutURL = new URL(AUTH0_LOGOUT_URL);
  logoutURL.searchParams.set("client_id", AUTH0_CLIENT_ID);
  logoutURL.searchParams.set("returnTo", AUTH0_RETURN_TO_URL);
  return (0, import_remix5.redirect)(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// route:/Users/lucashomer/homer-family-cookbook/app/routes/auth0.tsx
var auth0_exports = {};
__export(auth0_exports, {
  action: () => action2,
  loader: () => loader4
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader4 = () => (0, import_remix6.redirect)("/");
var action2 = ({ request }) => {
  return auth.authenticate("auth0", request);
};

// route:/Users/lucashomer/homer-family-cookbook/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5
});
init_react();
var import_remix7 = __toESM(require_remix());
var loader5 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const error = session.get(auth.sessionErrorKey);
  return (0, import_remix7.json)({ error });
};
function Index() {
  const { error } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, error ? /* @__PURE__ */ React.createElement("div", null, error.message) : null, /* @__PURE__ */ React.createElement("div", null, "index page"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "a04098f6", "entry": { "module": "/build/entry.client-GRGJU5FK.js", "imports": ["/build/_shared/chunk-BHEGAI2Y.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-L74QCEE6.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/auth0/callback": { "id": "routes/auth/auth0/callback", "parentId": "root", "path": "auth/auth0/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/auth0/callback-7YSAPPZQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth0": { "id": "routes/auth0", "parentId": "root", "path": "auth0", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth0-TT2YK4I3.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-G2GBVOGN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-ZFPJIBPZ.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-MTIEZGH4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A04098F6.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/auth0/callback": {
    id: "routes/auth/auth0/callback",
    parentId: "root",
    path: "auth/auth0/callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/auth0": {
    id: "routes/auth0",
    parentId: "root",
    path: "auth0",
    index: void 0,
    caseSensitive: void 0,
    module: auth0_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3V0aWxzL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAiLi4vYXBwL2NvbnN0YW50cy9pbmRleC5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjay50c3giLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcHJvZmlsZS50c3giLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoMC50c3giLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcHJvZmlsZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoMC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvYXV0aDAvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3Byb2ZpbGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2ZpbGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvZmlsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoMFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aDBcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aDBcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGdldFNlc3Npb24sIGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBudWxsLFxuICAgIH0gYXMgTG9hZGVyRGF0YTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgfSBhcyBMb2FkZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJIb21lciBGYW1pbHkgQ29va2Jvb2tcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiSG9tZXIgRmFtaWx5IENvb2tib29rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICB7ZGF0YS51c2VyID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgIDxwPntgV2VsY29tZSAke2RhdGEudXNlcj8uZmlyc3ROYW1lIHx8IFwiXCJ9YH08L3A+XG4gICAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIi9hdXRoMFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBBdXRoMFN0cmF0ZWd5IH0gZnJvbSBcInJlbWl4LWF1dGgtYXV0aDBcIjtcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgQXV0aDBQcm9maWxlIH0gZnJvbSBcInJlbWl4LWF1dGgtYXV0aDBcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQge1xuICBBVVRIMF9DQUxMQkFDS19VUkwsXG4gIEFVVEgwX0NMSUVOVF9JRCxcbiAgQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgQVVUSDBfRE9NQUlOLFxuICBTRUNSRVRTLFxufSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5cbmlmICghU0VDUkVUUykge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRUNSRVRTIG11c3QgYmUgc2V0XCIpO1xufVxuXG5jb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfcmVtaXhfc2Vzc2lvblwiLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgc2VjcmV0czogW1NFQ1JFVFNdLFxuICAgIC8vIG5vcm1hbGx5IHlvdSB3YW50IHRoaXMgdG8gYmUgYHNlY3VyZTogdHJ1ZWBcbiAgICAvLyBidXQgdGhhdCBkb2Vzbid0IHdvcmsgb24gbG9jYWxob3N0IGZvciBTYWZhcmlcbiAgICAvLyBodHRwczovL3dlYi5kZXYvd2hlbi10by11c2UtbG9jYWwtaHR0cHMvXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGF1dGggPSBuZXcgQXV0aGVudGljYXRvcjxBdXRoMFByb2ZpbGUgJiB7IHVzZXJJZDogVXNlcltcImlkXCJdIH0+KFxuICBzZXNzaW9uU3RvcmFnZVxuKTtcblxuY29uc3QgYXV0aDBTdHJhdGVneSA9IG5ldyBBdXRoMFN0cmF0ZWd5KFxuICB7XG4gICAgY2FsbGJhY2tVUkw6IEFVVEgwX0NBTExCQUNLX1VSTCxcbiAgICBjbGllbnRJRDogQVVUSDBfQ0xJRU5UX0lELFxuICAgIGNsaWVudFNlY3JldDogQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICBkb21haW46IEFVVEgwX0RPTUFJTixcbiAgfSxcbiAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSBwcm9maWxlLmVtYWlsc1swXS52YWx1ZTtcbiAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXJFeGlzdHMpIHtcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyAuLi5wcm9maWxlLCB1c2VySWQ6IG5ld1VzZXIuaWQgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5wcm9maWxlLCB1c2VySWQ6IHVzZXJFeGlzdHMuaWQgfTtcbiAgfVxuKTtcblxuYXV0aC51c2UoYXV0aDBTdHJhdGVneSk7XG5cbmV4cG9ydCBjb25zdCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBzZXNzaW9uU3RvcmFnZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBhdXRoLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gcHJvZmlsZT8udXNlcklkO1xuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICh0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHJldHVybiB1c2VyO1xuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBsb2dvdXQocmVxdWVzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICByZXR1cm4gcmVkaXJlY3QoXCIvYXV0aDBcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIGRiOiBQcmlzbWFDbGllbnQ7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5kYikge1xuICAgIGdsb2JhbC5kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5kYjtcbiAgZGIuJGNvbm5lY3QoKTtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJleHBvcnQgY29uc3QgQVVUSDBfUkVUVVJOX1RPX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX1JFVFVSTl9UT19VUkwhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0NBTExCQUNLX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX0NBTExCQUNLX1VSTCE7XG5leHBvcnQgY29uc3QgQVVUSDBfQ0xJRU5UX0lEID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lEITtcbmV4cG9ydCBjb25zdCBBVVRIMF9DTElFTlRfU0VDUkVUID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCE7XG5leHBvcnQgY29uc3QgQVVUSDBfRE9NQUlOID0gcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOITtcbmV4cG9ydCBjb25zdCBBVVRIMF9MT0dPVVRfVVJMID0gcHJvY2Vzcy5lbnYuQVVUSDBfTE9HT1VUX1VSTCE7XG5leHBvcnQgY29uc3QgU0VDUkVUUyA9IHByb2Nlc3MuZW52LlNFQ1JFVFMhO1xuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGguYXV0aGVudGljYXRlKFwiYXV0aDBcIiwgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogXCIvcHJvZmlsZVwiLFxuICAgIGZhaWx1cmVSZWRpcmVjdDogXCIvXCJcbiAgfSk7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRm9ybSwganNvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBdXRoMFByb2ZpbGUgfSBmcm9tIFwicmVtaXgtYXV0aC1hdXRoMFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IHByb2ZpbGU6IEF1dGgwUHJvZmlsZTsgdXNlclJlY29yZDogVXNlciB8IG51bGwgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGF1dGguaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcblxuICBjb25zdCB1c2VyUmVjb3JkID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogcHJvZmlsZS51c2VySWQgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oeyBwcm9maWxlLCB1c2VyUmVjb3JkIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyZWVuKCkge1xuICBjb25zdCB7IHByb2ZpbGUsIHVzZXJSZWNvcmQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHByb2ZpbGUsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHVzZXJSZWNvcmQsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBkZXN0cm95U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQge1xuICBBVVRIMF9DTElFTlRfSUQsXG4gIEFVVEgwX0xPR09VVF9VUkwsXG4gIEFVVEgwX1JFVFVSTl9UT19VUkxcbn0gZnJvbSBcIn4vY29uc3RhbnRzL2luZGV4LnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgY29uc3QgbG9nb3V0VVJMID0gbmV3IFVSTChBVVRIMF9MT0dPVVRfVVJMISk7XG5cbiAgbG9nb3V0VVJMLnNlYXJjaFBhcmFtcy5zZXQoXCJjbGllbnRfaWRcIiwgQVVUSDBfQ0xJRU5UX0lEISk7XG4gIGxvZ291dFVSTC5zZWFyY2hQYXJhbXMuc2V0KFwicmV0dXJuVG9cIiwgQVVUSDBfUkVUVVJOX1RPX1VSTCEpO1xuXG4gIHJldHVybiByZWRpcmVjdChsb2dvdXRVUkwudG9TdHJpbmcoKSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKVxuICAgIH1cbiAgfSk7XG59O1xuIiwgIi8vIGFwcC9yb3V0ZXMvYXV0aC9hdXRoMC50c3hcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL1wiKTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhdXRoLmF1dGhlbnRpY2F0ZShcImF1dGgwXCIsIHJlcXVlc3QpO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBhdXRoLCBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBlcnJvcjogeyBtZXNzYWdlOiBzdHJpbmcgfSB8IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgY29uc3QgZXJyb3IgPSBzZXNzaW9uLmdldChhdXRoLnNlc3Npb25FcnJvcktleSkgYXMgTG9hZGVyRGF0YVtcImVycm9yXCJdO1xuICByZXR1cm4ganNvbjxMb2FkZXJEYXRhPih7IGVycm9yIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZXJyb3IgPyA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PiA6IG51bGx9XG5cbiAgICAgIDxkaXY+aW5kZXggcGFnZTwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2EwNDA5OGY2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1HUkdKVTVGSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQkhFR0FJMlkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTDc0UUNFRTYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2F1dGgwL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2stN1lTQVBQWlEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgwJzp7J2lkJzoncm91dGVzL2F1dGgwJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgwJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgwLVRUMllLNEkzLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUcyR0JWT0dOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtWkZQSklCUFouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2ZpbGUnOnsnaWQnOidyb3V0ZXMvcHJvZmlsZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9maWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2ZpbGUtTVRJRVpHSDQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1BMDQwOThGNi5qcyd9OyJdLAogICJt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
