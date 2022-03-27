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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var import_remix4 = __toESM(require_remix());

// app/models/user.server.ts
init_react();

// app/utils/auth.server.ts
init_react();
var import_remix_auth = require("remix-auth");
var import_remix_auth_auth0 = require("remix-auth-auth0");
var import_remix3 = __toESM(require_remix());

// app/utils/cookies.server.ts
init_react();
var import_remix2 = __toESM(require_remix());

// app/constants/index.server.ts
init_react();
var AUTH0_RETURN_TO_URL = process.env.AUTH0_RETURN_TO_URL;
var AUTH0_CALLBACK_URL = process.env.AUTH0_CALLBACK_URL;
var AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
var AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
var AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
var AUTH0_LOGOUT_URL = process.env.AUTH0_LOGOUT_URL;
var SECRETS = process.env.SECRETS;

// app/utils/cookies.server.ts
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
var { getSession, commitSession, destroySession } = sessionStorage;
var returnToCookie = (0, import_remix2.createCookie)("return-to", {
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  maxAge: 60,
  secure: false
});

// app/models/db.server.ts
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

// app/utils/auth.server.ts
var auth = new import_remix_auth.Authenticator(sessionStorage);
var auth0Strategy = new import_remix_auth_auth0.Auth0Strategy({
  callbackURL: AUTH0_CALLBACK_URL,
  clientID: AUTH0_CLIENT_ID,
  clientSecret: AUTH0_CLIENT_SECRET,
  domain: AUTH0_DOMAIN
}, async ({ profile }) => {
  const email = profile.emails[0].value;
  const user = await db.user.findUnique({
    where: { email }
  });
  if (!user) {
    const newUser = await db.user.create({
      data: {
        email
      }
    });
    return __spreadProps(__spreadValues({}, profile), {
      userId: newUser.id
    });
  }
  return __spreadProps(__spreadValues({}, profile), {
    userId: user.id
  });
});
auth.use(auth0Strategy);
async function requireUserId(request, returnTo = new URL(request.url).pathname) {
  const userId = await getUserId(request);
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["returnTo", returnTo]]);
    throw (0, import_remix3.redirect)(`/login?${searchParams}`);
  }
  return userId;
}

// app/models/user.server.ts
async function getUserId(request) {
  const authProfile = await auth.isAuthenticated(request);
  const userId = authProfile == null ? void 0 : authProfile.userId;
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (!userId || typeof userId !== "string") {
    return null;
  }
  return db.user.findUnique({
    where: { id: userId }
  });
}
async function getUserProfile(request) {
  const userId = await getUserId(request);
  if (!userId || typeof userId !== "string") {
    return null;
  }
  return db.user.findUnique({
    where: { id: userId },
    include: {
      recipes: true,
      favoriteRecipes: {
        include: {
          recipe: true
        }
      },
      recipeReads: {
        include: {
          recipe: true
        }
      }
    }
  });
}
async function getRecentlyViewed(userId) {
  return db.recipeRead.findMany({
    where: {
      userId
    },
    orderBy: [
      {
        updatedAt: "desc"
      }
    ],
    include: {
      recipe: true
    }
  });
}

// app/styles/app.css
var app_default = "/build/_assets/app-LHQXN6OU.css";

// route:/Users/lucashomer/homer-family-cookbook/app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
var links = () => [{ rel: "stylesheet", href: app_default }];
var loader = async ({ request }) => {
  const user = await getUser(request);
  return {
    user
  };
};
function App() {
  var _a;
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("header", {
    className: "flex flex-nowrap justify-between items-center p-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Homer Family Cookbook",
    "aria-label": "Homer Family Cookbook"
  }, "HFC")), data.user ? /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement("p", null, `Welcome ${((_a = data.user) == null ? void 0 : _a.firstName) || ""}`), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Logout"))) : /* @__PURE__ */ React.createElement(import_remix4.Form, {
    action: "/login",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Login"))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/meal-type/$mealTypeId.tsx
var mealTypeId_exports = {};
__export(mealTypeId_exports, {
  default: () => MealType,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/models/mealType.ts
init_react();
async function getMealTypes() {
  return db.mealType.findMany({});
}
async function getMealTypeWithRecipes(id) {
  return db.mealType.findUnique({
    where: { id },
    include: { recipes: true }
  });
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/meal-type/$mealTypeId.tsx
var loader2 = async ({ params }) => {
  const mealTypeWithRecipes = await getMealTypeWithRecipes(Number(params.mealTypeId));
  if (!mealTypeWithRecipes) {
    throw new Response("What a joke! Not found.", {
      status: 404
    });
  }
  return mealTypeWithRecipes;
};
function MealType() {
  var _a;
  const mealType = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl mb-8"
  }, mealType.name), /* @__PURE__ */ React.createElement("ul", {
    className: "pl-8"
  }, (_a = mealType.recipes) == null ? void 0 : _a.map((recipe) => /* @__PURE__ */ React.createElement("li", {
    key: recipe.id,
    className: "text-xl mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    prefetch: "intent",
    to: `/recipes/${recipe.id}`
  }, recipe.title)))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/auth/auth0/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  loader: () => loader3
});
init_react();
var loader3 = async ({ request }) => {
  let returnTo = await returnToCookie.parse(request.headers.get("Cookie")) ?? "/profile";
  return await auth.authenticate("auth0", request, {
    successRedirect: returnTo,
    failureRedirect: "/"
  });
};

// route:/Users/lucashomer/homer-family-cookbook/app/routes/recipes/$recipeId.tsx
var recipeId_exports = {};
__export(recipeId_exports, {
  action: () => action,
  actionIds: () => actionIds,
  default: () => Recipe,
  loader: () => loader4
});
init_react();
var import_react = require("react");
var import_remix7 = __toESM(require_remix());

// app/models/note.server.ts
init_react();
async function getNotesByRecipeId(recipeId) {
  return db.note.findMany({
    where: {
      recipeId
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      author: true
    }
  });
}
async function createNote({
  content,
  recipeId,
  userId
}) {
  return db.note.create({
    data: {
      content,
      authorId: userId,
      recipeId
    }
  });
}
async function updateNote({
  content,
  noteId
}) {
  return db.note.update({
    where: {
      id: noteId
    },
    data: {
      content
    },
    include: {
      author: true
    }
  });
}
async function deleteNote(noteId) {
  return db.note.delete({
    where: { id: noteId }
  });
}

// app/models/recipe.server.ts
init_react();
async function getRecipe(recipeId) {
  return db.recipe.findUnique({
    where: { id: recipeId },
    include: {
      mealTypes: true,
      ingredients: true,
      author: true,
      favoritedUsers: true
    }
  });
}
async function favoriteRecipe({
  recipeId,
  userId
}) {
  return db.usersFavoriteRecipes.create({
    data: {
      recipeId,
      userId
    }
  });
}
async function unfavoriteRecipe({
  recipeId,
  userId
}) {
  return db.usersFavoriteRecipes.delete({
    where: {
      recipeId_userId: {
        userId,
        recipeId
      }
    }
  });
}
async function recordRecipeView({
  recipeId,
  userId
}) {
  return db.recipeRead.upsert({
    where: {
      recipeId_userId: {
        recipeId,
        userId
      }
    },
    update: {
      updatedAt: new Date()
    },
    create: {
      recipeId,
      userId
    }
  });
}

// app/utils/errors.server.ts
init_react();
var import_remix6 = __toESM(require_remix());
function badRequest(data) {
  return (0, import_remix6.json)(data, { status: 400 });
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/recipes/$recipeId.tsx
var loader4 = async ({ params, request }) => {
  const userId = await getUserId(request);
  const recipeId = Number(params.recipeId);
  const recipeData = await getRecipe(recipeId);
  const notes = await getNotesByRecipeId(recipeId);
  if (!recipeData) {
    throw new Response("What a joke! Not found.", {
      status: 404
    });
  }
  if (userId) {
    await recordRecipeView({
      userId,
      recipeId
    });
  }
  return {
    userId,
    recipeData,
    notes
  };
};
var actionIds = {
  favorite: "favorite",
  unfavorite: "unfavorite",
  addNote: "addNote",
  updateNote: "updateNote",
  deleteNote: "deleteNote",
  login: "login"
};
function validateNoteContent(content) {
  if (content.length < 3) {
    return `That note is too short.`;
  }
}
var action = async ({ request, params }) => {
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
          formError: `Form not submitted correctly.`
        });
      }
      return deleteNote(parseInt(noteId));
    }
    case actionIds.updateNote: {
      const noteId = form.get("noteId");
      const content = form.get("content");
      if (typeof content !== "string" || typeof noteId !== "string") {
        return badRequest({
          formError: `Form not submitted correctly.`
        });
      }
      const fieldErrors = {
        content: validateNoteContent(content)
      };
      const fields = { content };
      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fieldErrors, fields });
      }
      return updateNote({
        noteId: Number(noteId),
        content
      });
    }
    case actionIds.addNote: {
      const content = form.get("content");
      if (typeof content !== "string") {
        return badRequest({
          formError: `Form not submitted correctly.`
        });
      }
      const fieldErrors = {
        content: validateNoteContent(content)
      };
      const fields = { content };
      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fieldErrors, fields });
      }
      await createNote({
        userId,
        recipeId,
        content
      });
      return (0, import_remix7.redirect)(`recipes/${recipeId}`);
    }
    case actionIds.unfavorite: {
      console.log("UNFAVORITE CASE");
      await unfavoriteRecipe({
        userId,
        recipeId
      });
      return null;
    }
    case actionIds.favorite: {
      await favoriteRecipe({
        userId,
        recipeId
      });
      return null;
    }
    default: {
      throw new Error(`Invalid actionId: ${actionId}`);
    }
  }
};
function Recipe() {
  var _a, _b, _c, _d, _e, _f;
  const { notes, recipeData, userId } = (0, import_remix7.useLoaderData)();
  const createNoteFormRef = (0, import_react.useRef)(null);
  const createNoteContentRef = (0, import_react.useRef)(null);
  const fetcher = (0, import_remix7.useFetcher)();
  const actionId = (_a = fetcher.submission) == null ? void 0 : _a.formData.get("actionId");
  const isCreatingNote = actionId === actionIds.addNote;
  const isUpdatingFavorite = actionId === actionIds.favorite || actionId === actionIds.unfavorite;
  (0, import_react.useEffect)(() => {
    var _a2, _b2;
    if (!isCreatingNote && fetcher.type !== "init") {
      (_a2 = createNoteContentRef.current) == null ? void 0 : _a2.focus();
      (_b2 = createNoteFormRef.current) == null ? void 0 : _b2.reset();
    }
  }, [isCreatingNote, fetcher.type]);
  const actionData = (0, import_remix7.useActionData)();
  const isRecipeFavorited = recipeData.favoritedUsers.some((item) => item.userId === userId);
  const favoriteButtonText = isUpdatingFavorite ? "Saving..." : isRecipeFavorited ? "REMOVE FROM FAVORITES" : "FAVORITE THIS RECIPE";
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("section", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl mb-2"
  }, recipeData.title), /* @__PURE__ */ React.createElement(fetcher.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: isUpdatingFavorite,
    type: "submit",
    name: "actionId",
    value: isRecipeFavorited ? actionIds.unfavorite : actionIds.favorite
  }, favoriteButtonText))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl mb-2"
  }, "Ingredients"), (_b = recipeData.ingredients) == null ? void 0 : _b.map((ingredient) => /* @__PURE__ */ React.createElement("li", {
    key: ingredient.id,
    className: "text-lg mb-3"
  }, /* @__PURE__ */ React.createElement("p", null, `-- ${ingredient.quantity} ${ingredient.name}`)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl mb-2"
  }, "Instructions"), /* @__PURE__ */ React.createElement("p", null, recipeData.instructions)), /* @__PURE__ */ React.createElement("hr", {
    className: "my-12"
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl mb-2"
  }, "Notes"), userId ? /* @__PURE__ */ React.createElement(fetcher.Form, {
    method: "post",
    ref: createNoteFormRef
  }, /* @__PURE__ */ React.createElement("fieldset", {
    disabled: fetcher.state === "submitting"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-nowrap "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ React.createElement("label", {
    className: "font-bold",
    htmlFor: "content"
  }, "Add:", " "), /* @__PURE__ */ React.createElement("textarea", {
    ref: createNoteContentRef,
    id: "content",
    className: "border-2 border-solid border-gray-400 rounded-md",
    name: "content",
    defaultValue: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.content,
    "aria-invalid": Boolean((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.content) || void 0,
    "aria-describedby": ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.content) ? "content-error" : void 0
  }), ((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-red-600",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "border-2 border-solid border-gray-400 rounded-md  ml-2 py-1 px-2 self-end",
    name: "actionId",
    value: "addNote"
  }, isCreatingNote ? "..." : "+")))) : /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "actionId",
    value: "login",
    className: "text-lg text-blue-700"
  }, "Login to add note")), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-4"
  }, notes.length ? notes == null ? void 0 : notes.map((note) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: note.id,
      className: "my-2 p-2 bg-stone-200"
    }, /* @__PURE__ */ React.createElement(NoteItem, {
      note,
      userId
    }));
  }) : /* @__PURE__ */ React.createElement("p", null, "No notes for this recipe"))));
}
function NoteItem({ note, userId }) {
  var _a, _b, _c, _d, _e;
  const fetcher = (0, import_remix7.useFetcher)();
  const actionId = (_a = fetcher.submission) == null ? void 0 : _a.formData.get("actionId");
  const isSpecificNote = Number((_b = fetcher.submission) == null ? void 0 : _b.formData.get("noteId")) === note.id;
  const isUpdating = isSpecificNote && actionId === actionIds.updateNote;
  const isDeleting = isSpecificNote && actionId === actionIds.deleteNote;
  const showEditButton = userId === note.authorId;
  const actionData = (0, import_remix7.useActionData)();
  const [editNoteFormData, setEditNoteForm] = (0, import_react.useState)(null);
  const editNoteFormRef = (0, import_react.useRef)(null);
  const editNoteContentRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!isUpdating) {
      editNoteFormRef.current && editNoteFormRef.current.reset();
      setEditNoteForm(null);
    }
  }, [isUpdating]);
  (0, import_react.useEffect)(() => {
    var _a2;
    if (fetcher.state === "idle" && editNoteFormData) {
      (_a2 = editNoteContentRef.current) == null ? void 0 : _a2.focus();
    }
  }, [fetcher.state, editNoteFormData]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, (editNoteFormData == null ? void 0 : editNoteFormData.id) !== note.id ? /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-nowrap justify-between"
  }, /* @__PURE__ */ React.createElement("p", null, note.content), showEditButton ? /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setEditNoteForm(note);
    },
    disabled: isUpdating
  }, isUpdating ? "..." : "edit") : null) : /* @__PURE__ */ React.createElement(fetcher.Form, {
    method: "post",
    ref: editNoteFormRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-nowrap justify-between"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    name: "noteId",
    defaultValue: note.id
  }), /* @__PURE__ */ React.createElement("textarea", {
    disabled: isUpdating || isDeleting,
    ref: editNoteContentRef,
    id: "content",
    className: "border-2 border-solid border-gray-400 rounded-md",
    name: "content",
    defaultValue: editNoteFormData.content,
    "aria-invalid": Boolean((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.content) || void 0,
    "aria-describedby": ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.content) ? "content-error" : void 0
  }), ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-red-600",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "actionId",
    value: "updateNote",
    disabled: isDeleting || isUpdating
  }, isUpdating ? "saving..." : "save"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "actionId",
    value: "deleteNote",
    disabled: isDeleting || isUpdating
  }, isDeleting ? "deleting... " : "delete"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setEditNoteForm(null),
    type: "button"
  }, "cancel"))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/recently-viewed.tsx
var recently_viewed_exports = {};
__export(recently_viewed_exports, {
  default: () => Profile,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());
var loader5 = async ({ request }) => {
  const userId = await requireUserId(request);
  const data = await getRecentlyViewed(userId);
  return data;
};
function Profile() {
  const data = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "recently viewed"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(data, null, 2))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile2,
  loader: () => loader6
});
init_react();
var import_remix9 = __toESM(require_remix());
var loader6 = async ({ request }) => {
  await requireUserId(request);
  const data = await getUserProfile(request);
  return data;
};
function Profile2() {
  const _a = (0, import_remix9.useLoaderData)(), { favoriteRecipes, recipeReads, recipes } = _a, user = __objRest(_a, ["favoriteRecipes", "recipeReads", "recipes"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "My User Info"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(user, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h2", null, "My Authored Recipes"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(recipes, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "favorites"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(favoriteRecipes, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "recently viewed"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(recipeReads, null, 2))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
init_react();
var import_remix10 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const logoutURL = new URL(AUTH0_LOGOUT_URL);
  logoutURL.searchParams.set("client_id", AUTH0_CLIENT_ID);
  logoutURL.searchParams.set("returnTo", AUTH0_RETURN_TO_URL);
  return (0, import_remix10.redirect)(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// route:/Users/lucashomer/homer-family-cookbook/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader7
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_remix12 = __toESM(require_remix());
var loader7 = async () => {
  const mealTypes = await getMealTypes();
  return (0, import_remix11.json)(mealTypes);
};
function Index() {
  const mealTypes = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl mb-8"
  }, "Meal Types"), /* @__PURE__ */ React.createElement("ul", {
    className: "pl-8"
  }, mealTypes.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.id,
    className: "text-xl mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    prefetch: "intent",
    to: `/meal-type/${item.id}`
  }, item.name)))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  loader: () => loader8
});
init_react();
var action3 = ({ request }) => login(request);
var loader8 = ({ request }) => login(request);
async function login(request) {
  let url = new URL(request.url);
  let returnTo = url.searchParams.get("returnTo");
  try {
    return await auth.authenticate("auth0", request, {
      successRedirect: returnTo ?? "/profile",
      failureRedirect: "/"
    });
  } catch (error) {
    if (!returnTo)
      throw error;
    if (error instanceof Response && isRedirect(error)) {
      error.headers.append("Set-Cookie", await returnToCookie.serialize(returnTo));
      return error;
    }
    throw error;
  }
}
function isRedirect(response) {
  if (response.status < 300 || response.status >= 400)
    return false;
  return response.headers.has("Location");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5df06e8c", "entry": { "module": "/build/entry.client-WAYLZR2Z.js", "imports": ["/build/_shared/chunk-RXLELZTY.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JN32JJFT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/auth0/callback": { "id": "routes/auth/auth0/callback", "parentId": "root", "path": "auth/auth0/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/auth0/callback-7Q6TAE6F.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IAECS6Z3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-WYUD3X6A.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-WSY7RAHD.js", "imports": ["/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meal-type/$mealTypeId": { "id": "routes/meal-type/$mealTypeId", "parentId": "root", "path": "meal-type/:mealTypeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/meal-type/$mealTypeId-URVULQQY.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-3JM4A6GF.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recently-viewed": { "id": "routes/recently-viewed", "parentId": "root", "path": "recently-viewed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recently-viewed-M44IDXQV.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recipes/$recipeId": { "id": "routes/recipes/$recipeId", "parentId": "root", "path": "recipes/:recipeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recipes/$recipeId-7RV4BQI6.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5DF06E8C.js" };

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
  "routes/meal-type/$mealTypeId": {
    id: "routes/meal-type/$mealTypeId",
    parentId: "root",
    path: "meal-type/:mealTypeId",
    index: void 0,
    caseSensitive: void 0,
    module: mealTypeId_exports
  },
  "routes/auth/auth0/callback": {
    id: "routes/auth/auth0/callback",
    parentId: "root",
    path: "auth/auth0/callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/recipes/$recipeId": {
    id: "routes/recipes/$recipeId",
    parentId: "root",
    path: "recipes/:recipeId",
    index: void 0,
    caseSensitive: void 0,
    module: recipeId_exports
  },
  "routes/recently-viewed": {
    id: "routes/recently-viewed",
    parentId: "root",
    path: "recently-viewed",
    index: void 0,
    caseSensitive: void 0,
    module: recently_viewed_exports
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
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL21vZGVscy91c2VyLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Nvb2tpZXMuc2VydmVyLnRzIiwgIi4uL2FwcC9jb25zdGFudHMvaW5kZXguc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9tZWFsVHlwZS50cyIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9ub3RlLnNlcnZlci50cyIsICIuLi9hcHAvbW9kZWxzL3JlY2lwZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Vycm9ycy5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjZW50bHktdmlld2VkLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9wcm9maWxlLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNlbnRseS12aWV3ZWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3Byb2ZpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVhbC10eXBlLzptZWFsVHlwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvYXV0aDAvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGVzLzpyZWNpcGVJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVjZW50bHktdmlld2VkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNlbnRseS12aWV3ZWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVjZW50bHktdmlld2VkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9maWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9maWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2ZpbGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTGluayxcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgfSBhcyBMb2FkZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiSG9tZXIgRmFtaWx5IENvb2tib29rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkhvbWVyIEZhbWlseSBDb29rYm9va1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhGQ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICB7ZGF0YS51c2VyID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgIDxwPntgV2VsY29tZSAke2RhdGEudXNlcj8uZmlyc3ROYW1lIHx8IFwiXCJ9YH08L3A+XG4gICAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIi9sb2dpblwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IGF1dGhQcm9maWxlID0gYXdhaXQgYXV0aC5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJJZCA9IGF1dGhQcm9maWxlPy51c2VySWQ7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyUHJvZmlsZShyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcmVjaXBlczogdHJ1ZSxcbiAgICAgIGZhdm9yaXRlUmVjaXBlczoge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgcmVjaXBlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlY2lwZVJlYWRzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICByZWNpcGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZW50bHlWaWV3ZWQodXNlcklkOiBVc2VyW1wiaWRcIl0pIHtcbiAgcmV0dXJuIGRiLnJlY2lwZVJlYWQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VySWQsXG4gICAgfSxcbiAgICBvcmRlckJ5OiBbXG4gICAgICB7XG4gICAgICAgIHVwZGF0ZWRBdDogXCJkZXNjXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcmVjaXBlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SWQodXNlcklkOiBVc2VyW1wiaWRcIl0pOiBQcm9taXNlPFVzZXIgfCBudWxsPiB7XG4gIHJldHVybiBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBBdXRoMFByb2ZpbGUsIEF1dGgwU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1hdXRoMFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIHNlc3Npb25TdG9yYWdlLFxuICBnZXRTZXNzaW9uLFxuICBkZXN0cm95U2Vzc2lvbixcbn0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmltcG9ydCB7XG4gIEFVVEgwX0NBTExCQUNLX1VSTCxcbiAgQVVUSDBfQ0xJRU5UX0lELFxuICBBVVRIMF9DTElFTlRfU0VDUkVULFxuICBBVVRIMF9ET01BSU4sXG59IGZyb20gXCJ+L2NvbnN0YW50cy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgQXBwQXV0aCA9IEF1dGgwUHJvZmlsZSAmIHsgdXNlcklkOiBVc2VyW1wiaWRcIl0gfTtcbmV4cG9ydCBjb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8QXBwQXV0aD4oc2Vzc2lvblN0b3JhZ2UpO1xuXG5jb25zdCBhdXRoMFN0cmF0ZWd5ID0gbmV3IEF1dGgwU3RyYXRlZ3koXG4gIHtcbiAgICBjYWxsYmFja1VSTDogQVVUSDBfQ0FMTEJBQ0tfVVJMLFxuICAgIGNsaWVudElEOiBBVVRIMF9DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBBVVRIMF9DTElFTlRfU0VDUkVULFxuICAgIGRvbWFpbjogQVVUSDBfRE9NQUlOLFxuICB9LFxuICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICBjb25zdCBlbWFpbCA9IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcm9maWxlLFxuICAgICAgICB1c2VySWQ6IG5ld1VzZXIuaWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJvZmlsZSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9O1xuICB9XG4pO1xuXG5hdXRoLnVzZShhdXRoMFN0cmF0ZWd5KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICByZXR1cm4gcmVkaXJlY3QoXCIvbG9naW5cIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJldHVyblRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJldHVyblRvXCIsIHJldHVyblRvXV0pO1xuICAgIHRocm93IHJlZGlyZWN0KGAvbG9naW4/JHtzZWFyY2hQYXJhbXN9YCk7XG4gIH1cbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZGlyZWN0VG9Mb2dpbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHJldHVyblRvID0gbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWU7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJldHVyblRvXCIsIHJldHVyblRvXV0pO1xuICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZSwgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNFQ1JFVFMgfSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5cbmlmICghU0VDUkVUUykge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRUNSRVRTIG11c3QgYmUgc2V0XCIpO1xufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX3JlbWl4X3Nlc3Npb25cIixcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIHNlY3JldHM6IFtTRUNSRVRTXSxcbiAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIG9uIGxvY2FsaG9zdCBmb3IgU2FmYXJpXG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L3doZW4tdG8tdXNlLWxvY2FsLWh0dHBzL1xuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBzZXNzaW9uU3RvcmFnZTtcblxuZXhwb3J0IGNvbnN0IHJldHVyblRvQ29va2llID0gY3JlYXRlQ29va2llKFwicmV0dXJuLXRvXCIsIHtcbiAgcGF0aDogXCIvXCIsXG4gIGh0dHBPbmx5OiB0cnVlLFxuICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgbWF4QWdlOiA2MCwgLy8gMSBtaW51dGUgYmVjYXVzZSBpdCBtYWtlcyBubyBzZW5zZSB0byBrZWVwIGl0IGZvciBhIGxvbmcgdGltZVxuICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbn0pO1xuIiwgImV4cG9ydCBjb25zdCBBVVRIMF9SRVRVUk5fVE9fVVJMID0gcHJvY2Vzcy5lbnYuQVVUSDBfUkVUVVJOX1RPX1VSTCE7XG5leHBvcnQgY29uc3QgQVVUSDBfQ0FMTEJBQ0tfVVJMID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0FMTEJBQ0tfVVJMITtcbmV4cG9ydCBjb25zdCBBVVRIMF9DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0NMSUVOVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVUITtcbmV4cG9ydCBjb25zdCBBVVRIMF9ET01BSU4gPSBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4hO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0xPR09VVF9VUkwgPSBwcm9jZXNzLmVudi5BVVRIMF9MT0dPVVRfVVJMITtcbmV4cG9ydCBjb25zdCBTRUNSRVRTID0gcHJvY2Vzcy5lbnYuU0VDUkVUUyE7XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBkYjogUHJpc21hQ2xpZW50O1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuZGIpIHtcbiAgICBnbG9iYWwuZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuZGI7XG4gIGRiLiRjb25uZWN0KCk7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHR5cGUgeyBNZWFsVHlwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldE1lYWxUeXBlV2l0aFJlY2lwZXMsIE1lYWxUeXBlV2l0aFJlY2lwZXMgfSBmcm9tIFwifi9tb2RlbHMvbWVhbFR5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBtZWFsVHlwZVdpdGhSZWNpcGVzID0gYXdhaXQgZ2V0TWVhbFR5cGVXaXRoUmVjaXBlcyhcbiAgICBOdW1iZXIocGFyYW1zLm1lYWxUeXBlSWQpXG4gICk7XG5cbiAgaWYgKCFtZWFsVHlwZVdpdGhSZWNpcGVzKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiV2hhdCBhIGpva2UhIE5vdCBmb3VuZC5cIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWVhbFR5cGVXaXRoUmVjaXBlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYWxUeXBlKCkge1xuICBjb25zdCBtZWFsVHlwZSA9IHVzZUxvYWRlckRhdGE8TWVhbFR5cGVXaXRoUmVjaXBlcz4oKTtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi04XCI+e21lYWxUeXBlLm5hbWV9PC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgIHttZWFsVHlwZS5yZWNpcGVzPy5tYXAoKHJlY2lwZSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3JlY2lwZS5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaD1cImludGVudFwiIHRvPXtgL3JlY2lwZXMvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIHtyZWNpcGUudGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBNZWFsVHlwZSwgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYWxUeXBlcygpIHtcbiAgcmV0dXJuIGRiLm1lYWxUeXBlLmZpbmRNYW55KHt9KTtcbn1cblxuZXhwb3J0IHR5cGUgTWVhbFR5cGVXaXRoUmVjaXBlcyA9IE1lYWxUeXBlICYgeyByZWNpcGVzOiBSZWNpcGVbXSB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhbFR5cGVXaXRoUmVjaXBlcyhpZDogTWVhbFR5cGVbXCJpZFwiXSkge1xuICByZXR1cm4gZGIubWVhbFR5cGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBpbmNsdWRlOiB7IHJlY2lwZXM6IHRydWUgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyByZXR1cm5Ub0Nvb2tpZSB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAvLyBnZXQgdGhlIHJldHVyblRvIGZyb20gdGhlIGNvb2tpZVxuICBsZXQgcmV0dXJuVG8gPVxuICAgIChhd2FpdCByZXR1cm5Ub0Nvb2tpZS5wYXJzZShyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKSkgPz8gXCIvcHJvZmlsZVwiO1xuXG4gIC8vIGNhbGwgYXV0aGVudGljYXRlIHRvIGNvbXBsZXRlIHRoZSBsb2dpbiBhbmQgc2V0IHJldHVyblRvIGFzIHRoZSBzdWNjZXNzUmVkaXJlY3RcbiAgcmV0dXJuIGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFwiYXV0aDBcIiwgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogcmV0dXJuVG8sXG4gICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9cIixcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IE5vdGUsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlRmV0Y2hlcixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBjcmVhdGVOb3RlLFxuICBkZWxldGVOb3RlLFxuICBnZXROb3Rlc0J5UmVjaXBlSWQsXG4gIHVwZGF0ZU5vdGUsXG59IGZyb20gXCJ+L21vZGVscy9ub3RlLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgZmF2b3JpdGVSZWNpcGUsXG4gIHVuZmF2b3JpdGVSZWNpcGUsXG4gIGdldFJlY2lwZSxcbiAgR2V0UmVjaXBlUmVzcG9uc2UsXG4gIHJlY29yZFJlY2lwZVZpZXcsXG59IGZyb20gXCJ+L21vZGVscy9yZWNpcGUuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgYmFkUmVxdWVzdCB9IGZyb20gXCJ+L3V0aWxzL2Vycm9ycy5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICByZWNpcGVEYXRhOiBHZXRSZWNpcGVSZXNwb25zZTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl0gfCBudWxsO1xuICBub3RlczogTm90ZVtdO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCByZWNpcGVJZCA9IE51bWJlcihwYXJhbXMucmVjaXBlSWQpO1xuXG4gIGNvbnN0IHJlY2lwZURhdGEgPSBhd2FpdCBnZXRSZWNpcGUocmVjaXBlSWQpO1xuICBjb25zdCBub3RlcyA9IGF3YWl0IGdldE5vdGVzQnlSZWNpcGVJZChyZWNpcGVJZCk7XG5cbiAgaWYgKCFyZWNpcGVEYXRhKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiV2hhdCBhIGpva2UhIE5vdCBmb3VuZC5cIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICBpZiAodXNlcklkKSB7XG4gICAgYXdhaXQgcmVjb3JkUmVjaXBlVmlldyh7XG4gICAgICB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXNlcklkLFxuICAgIHJlY2lwZURhdGEsXG4gICAgbm90ZXMsXG4gIH07XG59O1xuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRFcnJvcnM/OiB7XG4gICAgY29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgY29udGVudDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbklkcyA9IHtcbiAgZmF2b3JpdGU6IFwiZmF2b3JpdGVcIixcbiAgdW5mYXZvcml0ZTogXCJ1bmZhdm9yaXRlXCIsXG4gIGFkZE5vdGU6IFwiYWRkTm90ZVwiLFxuICB1cGRhdGVOb3RlOiBcInVwZGF0ZU5vdGVcIixcbiAgZGVsZXRlTm90ZTogXCJkZWxldGVOb3RlXCIsXG4gIGxvZ2luOiBcImxvZ2luXCIsXG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU5vdGVDb250ZW50KGNvbnRlbnQ6IE5vdGVbXCJjb250ZW50XCJdKSB7XG4gIGlmIChjb250ZW50Lmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gYFRoYXQgbm90ZSBpcyB0b28gc2hvcnQuYDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHJlY2lwZUlkID0gTnVtYmVyKHBhcmFtcy5yZWNpcGVJZCk7XG5cbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgYWN0aW9uSWQgPSBmb3JtLmdldChcImFjdGlvbklkXCIpO1xuXG4gIHN3aXRjaCAoYWN0aW9uSWQpIHtcbiAgICBjYXNlIGFjdGlvbklkcy5sb2dpbjoge1xuICAgICAgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMuZGVsZXRlTm90ZToge1xuICAgICAgY29uc3Qgbm90ZUlkID0gZm9ybS5nZXQoXCJub3RlSWRcIik7XG5cbiAgICAgIGlmICh0eXBlb2Ygbm90ZUlkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVsZXRlTm90ZShwYXJzZUludChub3RlSWQpKTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMudXBkYXRlTm90ZToge1xuICAgICAgY29uc3Qgbm90ZUlkID0gZm9ybS5nZXQoXCJub3RlSWRcIik7XG4gICAgICBjb25zdCBjb250ZW50ID0gZm9ybS5nZXQoXCJjb250ZW50XCIpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG5vdGVJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudCksXG4gICAgICB9O1xuICAgICAgY29uc3QgZmllbGRzID0geyBjb250ZW50IH07XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVwZGF0ZU5vdGUoe1xuICAgICAgICBub3RlSWQ6IE51bWJlcihub3RlSWQpLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uSWRzLmFkZE5vdGU6IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtLmdldChcImNvbnRlbnRcIik7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudCksXG4gICAgICB9O1xuICAgICAgY29uc3QgZmllbGRzID0geyBjb250ZW50IH07XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgY3JlYXRlTm90ZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlZGlyZWN0KGByZWNpcGVzLyR7cmVjaXBlSWR9YCk7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uSWRzLnVuZmF2b3JpdGU6IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5GQVZPUklURSBDQVNFXCIpO1xuICAgICAgYXdhaXQgdW5mYXZvcml0ZVJlY2lwZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvbklkcy5mYXZvcml0ZToge1xuICAgICAgYXdhaXQgZmF2b3JpdGVSZWNpcGUoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFjdGlvbklkOiAke2FjdGlvbklkfWApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlKCkge1xuICBjb25zdCB7IG5vdGVzLCByZWNpcGVEYXRhLCB1c2VySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBjcmVhdGVOb3RlRm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjcmVhdGVOb3RlQ29udGVudFJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuICBjb25zdCBhY3Rpb25JZCA9IGZldGNoZXIuc3VibWlzc2lvbj8uZm9ybURhdGEuZ2V0KFwiYWN0aW9uSWRcIik7XG4gIGNvbnN0IGlzQ3JlYXRpbmdOb3RlID0gYWN0aW9uSWQgPT09IGFjdGlvbklkcy5hZGROb3RlO1xuICBjb25zdCBpc1VwZGF0aW5nRmF2b3JpdGUgPVxuICAgIGFjdGlvbklkID09PSBhY3Rpb25JZHMuZmF2b3JpdGUgfHwgYWN0aW9uSWQgPT09IGFjdGlvbklkcy51bmZhdm9yaXRlO1xuXG4gIC8vIGFmdGVyIHNhdmluZyBuZXcgbm90ZSwgcmVzZXQgYW5kIGZvY3VzIGJhY2sgaW50byB0aGUgbmV3IG5vdGUgaW5wdXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQ3JlYXRpbmdOb3RlICYmIGZldGNoZXIudHlwZSAhPT0gXCJpbml0XCIpIHtcbiAgICAgIGNyZWF0ZU5vdGVDb250ZW50UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICBjcmVhdGVOb3RlRm9ybVJlZi5jdXJyZW50Py5yZXNldCgpO1xuICAgIH1cbiAgfSwgW2lzQ3JlYXRpbmdOb3RlLCBmZXRjaGVyLnR5cGVdKTtcblxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zdCBpc1JlY2lwZUZhdm9yaXRlZCA9IHJlY2lwZURhdGEuZmF2b3JpdGVkVXNlcnMuc29tZShcbiAgICAoaXRlbSkgPT4gaXRlbS51c2VySWQgPT09IHVzZXJJZFxuICApO1xuICBjb25zdCBmYXZvcml0ZUJ1dHRvblRleHQgPSBpc1VwZGF0aW5nRmF2b3JpdGVcbiAgICA/IFwiU2F2aW5nLi4uXCJcbiAgICA6IGlzUmVjaXBlRmF2b3JpdGVkXG4gICAgPyBcIlJFTU9WRSBGUk9NIEZBVk9SSVRFU1wiXG4gICAgOiBcIkZBVk9SSVRFIFRISVMgUkVDSVBFXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgey8qICoqKipSRUNJUEUqKiogKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTJcIj57cmVjaXBlRGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgIDxmZXRjaGVyLkZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ0Zhdm9yaXRlfVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgIGlzUmVjaXBlRmF2b3JpdGVkID8gYWN0aW9uSWRzLnVuZmF2b3JpdGUgOiBhY3Rpb25JZHMuZmF2b3JpdGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZmF2b3JpdGVCdXR0b25UZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mZXRjaGVyLkZvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTJcIj5JbmdyZWRpZW50czwvaDM+XG4gICAgICAgICAge3JlY2lwZURhdGEuaW5ncmVkaWVudHM/Lm1hcCgoaW5ncmVkaWVudCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5ncmVkaWVudC5pZH0gY2xhc3NOYW1lPVwidGV4dC1sZyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxwPntgLS0gJHtpbmdyZWRpZW50LnF1YW50aXR5fSAke2luZ3JlZGllbnQubmFtZX1gfTwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMlwiPkluc3RydWN0aW9uczwvaDM+XG4gICAgICAgIDxwPntyZWNpcGVEYXRhLmluc3RydWN0aW9uc308L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxociBjbGFzc05hbWU9XCJteS0xMlwiIC8+XG5cbiAgICAgIHsvKiAqKioqTk9URVMqKiogKi99XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTJcIj5Ob3RlczwvaDM+XG4gICAgICAgIHt1c2VySWQgPyAoXG4gICAgICAgICAgPGZldGNoZXIuRm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXtjcmVhdGVOb3RlRm9ybVJlZn0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2ZldGNoZXIuc3RhdGUgPT09IFwic3VibWl0dGluZ1wifT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBodG1sRm9yPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICBBZGQ6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICByZWY9e2NyZWF0ZU5vdGVDb250ZW50UmVmfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnQpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29udGVudC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIiByb2xlPVwiYWxlcnRcIiBpZD1cImNvbnRlbnQtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCAgbWwtMiBweS0xIHB4LTIgc2VsZi1lbmRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYWRkTm90ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2lzQ3JlYXRpbmdOb3RlID8gXCIuLi5cIiA6IFwiK1wifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mZXRjaGVyLkZvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJsb2dpblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ibHVlLTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ2luIHRvIGFkZCBub3RlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAge25vdGVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIG5vdGVzPy5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtub3RlLmlkfSBjbGFzc05hbWU9XCJteS0yIHAtMiBiZy1zdG9uZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBUT0RPIC0tIGFkZCBtZXRhZGF0YSBhbmQgbWFrZSBzdXJlIHdlIHNvcnQgdGhlIGRhdGEgb24gc2VydmVyIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlciAqL31cbiAgICAgICAgICAgICAgICAgIDxOb3RlSXRlbSBub3RlPXtub3RlfSB1c2VySWQ9e3VzZXJJZH0gLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+Tm8gbm90ZXMgZm9yIHRoaXMgcmVjaXBlPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnR5cGUgTm90ZVByb3BzID0ge1xuICBub3RlOiBOb3RlO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXSB8IG51bGw7XG59O1xuXG5mdW5jdGlvbiBOb3RlSXRlbSh7IG5vdGUsIHVzZXJJZCB9OiBOb3RlUHJvcHMpIHtcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcbiAgY29uc3QgYWN0aW9uSWQgPSBmZXRjaGVyLnN1Ym1pc3Npb24/LmZvcm1EYXRhLmdldChcImFjdGlvbklkXCIpO1xuICBjb25zdCBpc1NwZWNpZmljTm90ZSA9XG4gICAgTnVtYmVyKGZldGNoZXIuc3VibWlzc2lvbj8uZm9ybURhdGEuZ2V0KFwibm90ZUlkXCIpKSA9PT0gbm90ZS5pZDtcbiAgY29uc3QgaXNVcGRhdGluZyA9IGlzU3BlY2lmaWNOb3RlICYmIGFjdGlvbklkID09PSBhY3Rpb25JZHMudXBkYXRlTm90ZTtcbiAgY29uc3QgaXNEZWxldGluZyA9IGlzU3BlY2lmaWNOb3RlICYmIGFjdGlvbklkID09PSBhY3Rpb25JZHMuZGVsZXRlTm90ZTtcblxuICBjb25zdCBzaG93RWRpdEJ1dHRvbiA9IHVzZXJJZCA9PT0gbm90ZS5hdXRob3JJZDtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICBjb25zdCBbZWRpdE5vdGVGb3JtRGF0YSwgc2V0RWRpdE5vdGVGb3JtXSA9IHVzZVN0YXRlPE5vdGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZWRpdE5vdGVGb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVkaXROb3RlQ29udGVudFJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcblxuICAvLyBhZnRlciBzYXZpbmcgbm90ZSB1cGRhdGUsIHJlc2V0IGFuZCBjaGFuZ2Ugb3V0IG9mIGVkaXQgbW9kZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgZWRpdE5vdGVGb3JtUmVmLmN1cnJlbnQgJiYgZWRpdE5vdGVGb3JtUmVmLmN1cnJlbnQucmVzZXQoKTtcbiAgICAgIHNldEVkaXROb3RlRm9ybShudWxsKTtcbiAgICB9XG4gIH0sIFtpc1VwZGF0aW5nXSk7XG5cbiAgLy8gZm9jdXMgdGhlIGlucHV0IGFmdGVyIG9wZW5pbmcgZWRpdCBmb3JtXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwiaWRsZVwiICYmIGVkaXROb3RlRm9ybURhdGEpIHtcbiAgICAgIGVkaXROb3RlQ29udGVudFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2ZldGNoZXIuc3RhdGUsIGVkaXROb3RlRm9ybURhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZWRpdE5vdGVGb3JtRGF0YT8uaWQgIT09IG5vdGUuaWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8cD57bm90ZS5jb250ZW50fTwvcD5cbiAgICAgICAgICB7c2hvd0VkaXRCdXR0b24gPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRFZGl0Tm90ZUZvcm0obm90ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNVcGRhdGluZyA/IFwiLi4uXCIgOiBcImVkaXRcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxmZXRjaGVyLkZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17ZWRpdE5vdGVGb3JtUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgaGlkZGVuIG5hbWU9XCJub3RlSWRcIiBkZWZhdWx0VmFsdWU9e25vdGUuaWR9IC8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nIHx8IGlzRGVsZXRpbmd9XG4gICAgICAgICAgICAgICAgcmVmPXtlZGl0Tm90ZUNvbnRlbnRSZWZ9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXROb3RlRm9ybURhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnQgPyBcImNvbnRlbnQtZXJyb3JcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50ID8gKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiIHJvbGU9XCJhbGVydFwiIGlkPVwiY29udGVudC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMuY29udGVudH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uSWRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInVwZGF0ZU5vdGVcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEZWxldGluZyB8fCBpc1VwZGF0aW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNVcGRhdGluZyA/IFwic2F2aW5nLi4uXCIgOiBcInNhdmVcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJkZWxldGVOb3RlXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGVsZXRpbmcgfHwgaXNVcGRhdGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzRGVsZXRpbmcgPyBcImRlbGV0aW5nLi4uIFwiIDogXCJkZWxldGVcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0Tm90ZUZvcm0obnVsbCl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgY2FuY2VsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mZXRjaGVyLkZvcm0+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IE5vdGUsIE1lYWxUeXBlLCBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Tm90ZXNCeVJlY2lwZUlkKHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXSkge1xuICByZXR1cm4gZGIubm90ZS5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgIH0sXG4gICAgb3JkZXJCeToge1xuICAgICAgY3JlYXRlZEF0OiBcImRlc2NcIixcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGF1dGhvcjogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5vdGUoe1xuICBjb250ZW50LFxuICByZWNpcGVJZCxcbiAgdXNlcklkLFxufToge1xuICBjb250ZW50OiBOb3RlW1wiY29udGVudFwiXTtcbiAgcmVjaXBlSWQ6IE5vdGVbXCJyZWNpcGVJZFwiXTtcbiAgdXNlcklkOiBOb3RlW1wiYXV0aG9ySWRcIl07XG59KSB7XG4gIHJldHVybiBkYi5ub3RlLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcklkOiB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU5vdGUoe1xuICBjb250ZW50LFxuICBub3RlSWQsXG59OiB7XG4gIGNvbnRlbnQ6IE5vdGVbXCJjb250ZW50XCJdO1xuICBub3RlSWQ6IE5vdGVbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLm5vdGUudXBkYXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IG5vdGVJZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBhdXRob3I6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVOb3RlKG5vdGVJZDogTm90ZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5ub3RlLmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IG5vdGVJZCB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBJbmdyZWRpZW50LFxuICBNZWFsVHlwZSxcbiAgTm90ZSxcbiAgUmVjaXBlLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgR2V0UmVjaXBlUmVzcG9uc2UgPSBSZWNpcGUgJiB7XG4gIG1lYWxUeXBlczogTWVhbFR5cGVbXTtcbiAgaW5ncmVkaWVudHM6IEluZ3JlZGllbnRbXTtcbiAgdXNlcjogVXNlcjtcbiAgZmF2b3JpdGVkVXNlcnM6IFVzZXJzRmF2b3JpdGVSZWNpcGVzW107XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlKHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXSkge1xuICByZXR1cm4gZGIucmVjaXBlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiByZWNpcGVJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIG1lYWxUeXBlczogdHJ1ZSxcbiAgICAgIGluZ3JlZGllbnRzOiB0cnVlLFxuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgICAgZmF2b3JpdGVkVXNlcnM6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmYXZvcml0ZVJlY2lwZSh7XG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi51c2Vyc0Zhdm9yaXRlUmVjaXBlcy5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVuZmF2b3JpdGVSZWNpcGUoe1xuICByZWNpcGVJZCxcbiAgdXNlcklkLFxufToge1xuICByZWNpcGVJZDogUmVjaXBlW1wiaWRcIl07XG4gIHVzZXJJZDogVXNlcltcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIudXNlcnNGYXZvcml0ZVJlY2lwZXMuZGVsZXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBUT0RPIC0tIG1heWJlIGltcGxlbWVudCBzb21lIHNvcnQgb2YgY2xlYW51cCBmb3IgJ2V4cGlyZWQnIHJlY29yZHNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNvcmRSZWNpcGVWaWV3KHtcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLnJlY2lwZVJlYWQudXBzZXJ0KHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgICB1c2VySWQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdXBkYXRlOiB7XG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgICBjcmVhdGU6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJhZFJlcXVlc3Q8VEFjdGlvbkRhdGE+KGRhdGE6IFRBY3Rpb25EYXRhKSB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBSZWNpcGUsXG4gIFJlY2lwZVJlYWQsXG4gIFVzZXIsXG4gIFVzZXJzRmF2b3JpdGVSZWNpcGVzLFxufSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0UmVjZW50bHlWaWV3ZWQgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0gQXJyYXk8UmVjaXBlUmVhZCAmIFJlY2lwZT47XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSZWNlbnRseVZpZXdlZCh1c2VySWQpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPnJlY2VudGx5IHZpZXdlZDwvaDI+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBSZWNpcGUsXG4gIFJlY2lwZVJlYWQsXG4gIFVzZXIsXG4gIFVzZXJzRmF2b3JpdGVSZWNpcGVzLFxufSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlclByb2ZpbGUgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB1c2VyOiBVc2VyO1xuICByZWNpcGVzOiBSZWNpcGVbXTtcbiAgZmF2b3JpdGVSZWNpcGVzOiBVc2Vyc0Zhdm9yaXRlUmVjaXBlc1tdO1xuICByZWNpcGVSZWFkczogUmVjaXBlUmVhZFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFVzZXJQcm9maWxlKHJlcXVlc3QpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgeyBmYXZvcml0ZVJlY2lwZXMsIHJlY2lwZVJlYWRzLCByZWNpcGVzLCAuLi51c2VyIH0gPVxuICAgIHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+TXkgVXNlciBJbmZvPC9oMj5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeSh1c2VyLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPk15IEF1dGhvcmVkIFJlY2lwZXM8L2gyPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHJlY2lwZXMsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDM+ZmF2b3JpdGVzPC9oMz5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShmYXZvcml0ZVJlY2lwZXMsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDM+cmVjZW50bHkgdmlld2VkPC9oMz5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShyZWNpcGVSZWFkcywgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGRlc3Ryb3lTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEFVVEgwX0NMSUVOVF9JRCxcbiAgQVVUSDBfTE9HT1VUX1VSTCxcbiAgQVVUSDBfUkVUVVJOX1RPX1VSTCxcbn0gZnJvbSBcIn4vY29uc3RhbnRzL2luZGV4LnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgY29uc3QgbG9nb3V0VVJMID0gbmV3IFVSTChBVVRIMF9MT0dPVVRfVVJMISk7XG5cbiAgbG9nb3V0VVJMLnNlYXJjaFBhcmFtcy5zZXQoXCJjbGllbnRfaWRcIiwgQVVUSDBfQ0xJRU5UX0lEISk7XG4gIGxvZ291dFVSTC5zZWFyY2hQYXJhbXMuc2V0KFwicmV0dXJuVG9cIiwgQVVUSDBfUkVUVVJOX1RPX1VSTCEpO1xuXG4gIHJldHVybiByZWRpcmVjdChsb2dvdXRVUkwudG9TdHJpbmcoKSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgTWVhbFR5cGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGpzb24sIExpbmssIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRNZWFsVHlwZXMgfSBmcm9tIFwifi9tb2RlbHMvbWVhbFR5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1lYWxUeXBlcyA9IGF3YWl0IGdldE1lYWxUeXBlcygpO1xuICByZXR1cm4ganNvbjxNZWFsVHlwZVtdPihtZWFsVHlwZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IG1lYWxUeXBlcyA9IHVzZUxvYWRlckRhdGE8TWVhbFR5cGVbXT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLThcIj5NZWFsIFR5cGVzPC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgIHttZWFsVHlwZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaD1cImludGVudFwiIHRvPXtgL21lYWwtdHlwZS8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgcmV0dXJuVG9Db29raWUgfSBmcm9tIFwifi91dGlscy9jb29raWVzLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ2luKHJlcXVlc3QpO1xuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiBsb2dpbihyZXF1ZXN0KTtcblxuYXN5bmMgZnVuY3Rpb24gbG9naW4ocmVxdWVzdDogUmVxdWVzdCkge1xuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGxldCByZXR1cm5UbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwicmV0dXJuVG9cIikgYXMgc3RyaW5nIHwgbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBhdXRoLmF1dGhlbnRpY2F0ZShcImF1dGgwXCIsIHJlcXVlc3QsIHtcbiAgICAgIHN1Y2Nlc3NSZWRpcmVjdDogcmV0dXJuVG8gPz8gXCIvcHJvZmlsZVwiLFxuICAgICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9cIixcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoIXJldHVyblRvKSB0aHJvdyBlcnJvcjtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSAmJiBpc1JlZGlyZWN0KGVycm9yKSkge1xuICAgICAgZXJyb3IuaGVhZGVycy5hcHBlbmQoXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiLFxuICAgICAgICBhd2FpdCByZXR1cm5Ub0Nvb2tpZS5zZXJpYWxpemUocmV0dXJuVG8pXG4gICAgICApO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1JlZGlyZWN0KHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgMzAwIHx8IHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuaGFzKFwiTG9jYXRpb25cIik7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNWRmMDZlOGMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVdBWUxaUjJaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SWExFTFpUWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1KTjMySkpGVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvYXV0aDAvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjay03UTZUQUU2Ri5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FR0QyWUtRSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1JQUVDUzZaMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tV1lVRDNYNkEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdEMllLUUouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtV1NZN1JBSEQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVHRDJZS1FKLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZCc6eydpZCc6J3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVhbC10eXBlLzptZWFsVHlwZUlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC1VUlZVTFFRWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvZmlsZSc6eydpZCc6J3JvdXRlcy9wcm9maWxlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2ZpbGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZmlsZS0zSk00QTZHRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlBUTlZZSE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWNlbnRseS12aWV3ZWQnOnsnaWQnOidyb3V0ZXMvcmVjZW50bHktdmlld2VkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlY2VudGx5LXZpZXdlZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWNlbnRseS12aWV3ZWQtTTQ0SURYUVYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJQVE5WWUhPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVjaXBlcy8kcmVjaXBlSWQnOnsnaWQnOidyb3V0ZXMvcmVjaXBlcy8kcmVjaXBlSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVjaXBlcy86cmVjaXBlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVjaXBlcy8kcmVjaXBlSWQtN1JWNEJRSTYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJQVE5WWUhPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNURGMDZFOEMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FB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
