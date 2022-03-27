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
    className: "text-xl text-blue-700"
  }, "Login")), /* @__PURE__ */ React.createElement("ul", {
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
  console.log("fetcher.state", fetcher.state);
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
var assets_manifest_default = { "version": "f19a0a58", "entry": { "module": "/build/entry.client-WAYLZR2Z.js", "imports": ["/build/_shared/chunk-RXLELZTY.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JN32JJFT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/auth0/callback": { "id": "routes/auth/auth0/callback", "parentId": "root", "path": "auth/auth0/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/auth0/callback-7Q6TAE6F.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IAECS6Z3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-WYUD3X6A.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-WSY7RAHD.js", "imports": ["/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meal-type/$mealTypeId": { "id": "routes/meal-type/$mealTypeId", "parentId": "root", "path": "meal-type/:mealTypeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/meal-type/$mealTypeId-URVULQQY.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-3JM4A6GF.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recently-viewed": { "id": "routes/recently-viewed", "parentId": "root", "path": "recently-viewed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recently-viewed-M44IDXQV.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recipes/$recipeId": { "id": "routes/recipes/$recipeId", "parentId": "root", "path": "recipes/:recipeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recipes/$recipeId-QAVOO5I5.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F19A0A58.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL21vZGVscy91c2VyLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Nvb2tpZXMuc2VydmVyLnRzIiwgIi4uL2FwcC9jb25zdGFudHMvaW5kZXguc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9tZWFsVHlwZS50cyIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9ub3RlLnNlcnZlci50cyIsICIuLi9hcHAvbW9kZWxzL3JlY2lwZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Vycm9ycy5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjZW50bHktdmlld2VkLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9wcm9maWxlLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNlbnRseS12aWV3ZWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3Byb2ZpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVhbC10eXBlLzptZWFsVHlwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvYXV0aDAvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGVzLzpyZWNpcGVJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVjZW50bHktdmlld2VkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNlbnRseS12aWV3ZWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVjZW50bHktdmlld2VkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9maWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9maWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2ZpbGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTGluayxcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgfSBhcyBMb2FkZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiSG9tZXIgRmFtaWx5IENvb2tib29rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkhvbWVyIEZhbWlseSBDb29rYm9va1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhGQ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICB7ZGF0YS51c2VyID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgIDxwPntgV2VsY29tZSAke2RhdGEudXNlcj8uZmlyc3ROYW1lIHx8IFwiXCJ9YH08L3A+XG4gICAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIi9sb2dpblwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IGF1dGhQcm9maWxlID0gYXdhaXQgYXV0aC5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJJZCA9IGF1dGhQcm9maWxlPy51c2VySWQ7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyUHJvZmlsZShyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcmVjaXBlczogdHJ1ZSxcbiAgICAgIGZhdm9yaXRlUmVjaXBlczoge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgcmVjaXBlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlY2lwZVJlYWRzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICByZWNpcGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZW50bHlWaWV3ZWQodXNlcklkOiBVc2VyW1wiaWRcIl0pIHtcbiAgcmV0dXJuIGRiLnJlY2lwZVJlYWQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VySWQsXG4gICAgfSxcbiAgICBvcmRlckJ5OiBbXG4gICAgICB7XG4gICAgICAgIHVwZGF0ZWRBdDogXCJkZXNjXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcmVjaXBlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SWQodXNlcklkOiBVc2VyW1wiaWRcIl0pOiBQcm9taXNlPFVzZXIgfCBudWxsPiB7XG4gIHJldHVybiBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBBdXRoMFByb2ZpbGUsIEF1dGgwU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1hdXRoMFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIHNlc3Npb25TdG9yYWdlLFxuICBnZXRTZXNzaW9uLFxuICBkZXN0cm95U2Vzc2lvbixcbn0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmltcG9ydCB7XG4gIEFVVEgwX0NBTExCQUNLX1VSTCxcbiAgQVVUSDBfQ0xJRU5UX0lELFxuICBBVVRIMF9DTElFTlRfU0VDUkVULFxuICBBVVRIMF9ET01BSU4sXG59IGZyb20gXCJ+L2NvbnN0YW50cy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgQXBwQXV0aCA9IEF1dGgwUHJvZmlsZSAmIHsgdXNlcklkOiBVc2VyW1wiaWRcIl0gfTtcbmV4cG9ydCBjb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8QXBwQXV0aD4oc2Vzc2lvblN0b3JhZ2UpO1xuXG5jb25zdCBhdXRoMFN0cmF0ZWd5ID0gbmV3IEF1dGgwU3RyYXRlZ3koXG4gIHtcbiAgICBjYWxsYmFja1VSTDogQVVUSDBfQ0FMTEJBQ0tfVVJMLFxuICAgIGNsaWVudElEOiBBVVRIMF9DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBBVVRIMF9DTElFTlRfU0VDUkVULFxuICAgIGRvbWFpbjogQVVUSDBfRE9NQUlOLFxuICB9LFxuICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICBjb25zdCBlbWFpbCA9IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcm9maWxlLFxuICAgICAgICB1c2VySWQ6IG5ld1VzZXIuaWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJvZmlsZSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9O1xuICB9XG4pO1xuXG5hdXRoLnVzZShhdXRoMFN0cmF0ZWd5KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICByZXR1cm4gcmVkaXJlY3QoXCIvbG9naW5cIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJldHVyblRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJldHVyblRvXCIsIHJldHVyblRvXV0pO1xuICAgIHRocm93IHJlZGlyZWN0KGAvbG9naW4/JHtzZWFyY2hQYXJhbXN9YCk7XG4gIH1cbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZGlyZWN0VG9Mb2dpbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHJldHVyblRvID0gbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWU7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJldHVyblRvXCIsIHJldHVyblRvXV0pO1xuICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZSwgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNFQ1JFVFMgfSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5cbmlmICghU0VDUkVUUykge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRUNSRVRTIG11c3QgYmUgc2V0XCIpO1xufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX3JlbWl4X3Nlc3Npb25cIixcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIHNlY3JldHM6IFtTRUNSRVRTXSxcbiAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIG9uIGxvY2FsaG9zdCBmb3IgU2FmYXJpXG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L3doZW4tdG8tdXNlLWxvY2FsLWh0dHBzL1xuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBzZXNzaW9uU3RvcmFnZTtcblxuZXhwb3J0IGNvbnN0IHJldHVyblRvQ29va2llID0gY3JlYXRlQ29va2llKFwicmV0dXJuLXRvXCIsIHtcbiAgcGF0aDogXCIvXCIsXG4gIGh0dHBPbmx5OiB0cnVlLFxuICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgbWF4QWdlOiA2MCwgLy8gMSBtaW51dGUgYmVjYXVzZSBpdCBtYWtlcyBubyBzZW5zZSB0byBrZWVwIGl0IGZvciBhIGxvbmcgdGltZVxuICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbn0pO1xuIiwgImV4cG9ydCBjb25zdCBBVVRIMF9SRVRVUk5fVE9fVVJMID0gcHJvY2Vzcy5lbnYuQVVUSDBfUkVUVVJOX1RPX1VSTCE7XG5leHBvcnQgY29uc3QgQVVUSDBfQ0FMTEJBQ0tfVVJMID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0FMTEJBQ0tfVVJMITtcbmV4cG9ydCBjb25zdCBBVVRIMF9DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0NMSUVOVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVUITtcbmV4cG9ydCBjb25zdCBBVVRIMF9ET01BSU4gPSBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4hO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0xPR09VVF9VUkwgPSBwcm9jZXNzLmVudi5BVVRIMF9MT0dPVVRfVVJMITtcbmV4cG9ydCBjb25zdCBTRUNSRVRTID0gcHJvY2Vzcy5lbnYuU0VDUkVUUyE7XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBkYjogUHJpc21hQ2xpZW50O1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuZGIpIHtcbiAgICBnbG9iYWwuZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuZGI7XG4gIGRiLiRjb25uZWN0KCk7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHR5cGUgeyBNZWFsVHlwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldE1lYWxUeXBlV2l0aFJlY2lwZXMsIE1lYWxUeXBlV2l0aFJlY2lwZXMgfSBmcm9tIFwifi9tb2RlbHMvbWVhbFR5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBtZWFsVHlwZVdpdGhSZWNpcGVzID0gYXdhaXQgZ2V0TWVhbFR5cGVXaXRoUmVjaXBlcyhcbiAgICBOdW1iZXIocGFyYW1zLm1lYWxUeXBlSWQpXG4gICk7XG5cbiAgaWYgKCFtZWFsVHlwZVdpdGhSZWNpcGVzKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiV2hhdCBhIGpva2UhIE5vdCBmb3VuZC5cIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWVhbFR5cGVXaXRoUmVjaXBlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYWxUeXBlKCkge1xuICBjb25zdCBtZWFsVHlwZSA9IHVzZUxvYWRlckRhdGE8TWVhbFR5cGVXaXRoUmVjaXBlcz4oKTtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi04XCI+e21lYWxUeXBlLm5hbWV9PC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgIHttZWFsVHlwZS5yZWNpcGVzPy5tYXAoKHJlY2lwZSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3JlY2lwZS5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaD1cImludGVudFwiIHRvPXtgL3JlY2lwZXMvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIHtyZWNpcGUudGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBNZWFsVHlwZSwgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYWxUeXBlcygpIHtcbiAgcmV0dXJuIGRiLm1lYWxUeXBlLmZpbmRNYW55KHt9KTtcbn1cblxuZXhwb3J0IHR5cGUgTWVhbFR5cGVXaXRoUmVjaXBlcyA9IE1lYWxUeXBlICYgeyByZWNpcGVzOiBSZWNpcGVbXSB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhbFR5cGVXaXRoUmVjaXBlcyhpZDogTWVhbFR5cGVbXCJpZFwiXSkge1xuICByZXR1cm4gZGIubWVhbFR5cGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBpbmNsdWRlOiB7IHJlY2lwZXM6IHRydWUgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyByZXR1cm5Ub0Nvb2tpZSB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAvLyBnZXQgdGhlIHJldHVyblRvIGZyb20gdGhlIGNvb2tpZVxuICBsZXQgcmV0dXJuVG8gPVxuICAgIChhd2FpdCByZXR1cm5Ub0Nvb2tpZS5wYXJzZShyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKSkgPz8gXCIvcHJvZmlsZVwiO1xuXG4gIC8vIGNhbGwgYXV0aGVudGljYXRlIHRvIGNvbXBsZXRlIHRoZSBsb2dpbiBhbmQgc2V0IHJldHVyblRvIGFzIHRoZSBzdWNjZXNzUmVkaXJlY3RcbiAgcmV0dXJuIGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFwiYXV0aDBcIiwgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogcmV0dXJuVG8sXG4gICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9cIixcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IE5vdGUsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlRmV0Y2hlcixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBjcmVhdGVOb3RlLFxuICBkZWxldGVOb3RlLFxuICBnZXROb3Rlc0J5UmVjaXBlSWQsXG4gIHVwZGF0ZU5vdGUsXG59IGZyb20gXCJ+L21vZGVscy9ub3RlLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgZmF2b3JpdGVSZWNpcGUsXG4gIHVuZmF2b3JpdGVSZWNpcGUsXG4gIGdldFJlY2lwZSxcbiAgR2V0UmVjaXBlUmVzcG9uc2UsXG4gIHJlY29yZFJlY2lwZVZpZXcsXG59IGZyb20gXCJ+L21vZGVscy9yZWNpcGUuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgYmFkUmVxdWVzdCB9IGZyb20gXCJ+L3V0aWxzL2Vycm9ycy5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICByZWNpcGVEYXRhOiBHZXRSZWNpcGVSZXNwb25zZTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl0gfCBudWxsO1xuICBub3RlczogTm90ZVtdO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCByZWNpcGVJZCA9IE51bWJlcihwYXJhbXMucmVjaXBlSWQpO1xuXG4gIGNvbnN0IHJlY2lwZURhdGEgPSBhd2FpdCBnZXRSZWNpcGUocmVjaXBlSWQpO1xuICBjb25zdCBub3RlcyA9IGF3YWl0IGdldE5vdGVzQnlSZWNpcGVJZChyZWNpcGVJZCk7XG5cbiAgaWYgKCFyZWNpcGVEYXRhKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiV2hhdCBhIGpva2UhIE5vdCBmb3VuZC5cIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICBpZiAodXNlcklkKSB7XG4gICAgYXdhaXQgcmVjb3JkUmVjaXBlVmlldyh7XG4gICAgICB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXNlcklkLFxuICAgIHJlY2lwZURhdGEsXG4gICAgbm90ZXMsXG4gIH07XG59O1xuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRFcnJvcnM/OiB7XG4gICAgY29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgY29udGVudDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbklkcyA9IHtcbiAgZmF2b3JpdGU6IFwiZmF2b3JpdGVcIixcbiAgdW5mYXZvcml0ZTogXCJ1bmZhdm9yaXRlXCIsXG4gIGFkZE5vdGU6IFwiYWRkTm90ZVwiLFxuICB1cGRhdGVOb3RlOiBcInVwZGF0ZU5vdGVcIixcbiAgZGVsZXRlTm90ZTogXCJkZWxldGVOb3RlXCIsXG4gIGxvZ2luOiBcImxvZ2luXCIsXG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU5vdGVDb250ZW50KGNvbnRlbnQ6IE5vdGVbXCJjb250ZW50XCJdKSB7XG4gIGlmIChjb250ZW50Lmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gYFRoYXQgbm90ZSBpcyB0b28gc2hvcnQuYDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHJlY2lwZUlkID0gTnVtYmVyKHBhcmFtcy5yZWNpcGVJZCk7XG5cbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgYWN0aW9uSWQgPSBmb3JtLmdldChcImFjdGlvbklkXCIpO1xuXG4gIHN3aXRjaCAoYWN0aW9uSWQpIHtcbiAgICBjYXNlIGFjdGlvbklkcy5sb2dpbjoge1xuICAgICAgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMuZGVsZXRlTm90ZToge1xuICAgICAgY29uc3Qgbm90ZUlkID0gZm9ybS5nZXQoXCJub3RlSWRcIik7XG5cbiAgICAgIGlmICh0eXBlb2Ygbm90ZUlkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVsZXRlTm90ZShwYXJzZUludChub3RlSWQpKTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMudXBkYXRlTm90ZToge1xuICAgICAgY29uc3Qgbm90ZUlkID0gZm9ybS5nZXQoXCJub3RlSWRcIik7XG4gICAgICBjb25zdCBjb250ZW50ID0gZm9ybS5nZXQoXCJjb250ZW50XCIpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG5vdGVJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudCksXG4gICAgICB9O1xuICAgICAgY29uc3QgZmllbGRzID0geyBjb250ZW50IH07XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVwZGF0ZU5vdGUoe1xuICAgICAgICBub3RlSWQ6IE51bWJlcihub3RlSWQpLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uSWRzLmFkZE5vdGU6IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtLmdldChcImNvbnRlbnRcIik7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudCksXG4gICAgICB9O1xuICAgICAgY29uc3QgZmllbGRzID0geyBjb250ZW50IH07XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgY3JlYXRlTm90ZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlZGlyZWN0KGByZWNpcGVzLyR7cmVjaXBlSWR9YCk7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uSWRzLnVuZmF2b3JpdGU6IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5GQVZPUklURSBDQVNFXCIpO1xuICAgICAgYXdhaXQgdW5mYXZvcml0ZVJlY2lwZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvbklkcy5mYXZvcml0ZToge1xuICAgICAgYXdhaXQgZmF2b3JpdGVSZWNpcGUoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFjdGlvbklkOiAke2FjdGlvbklkfWApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlKCkge1xuICBjb25zdCB7IG5vdGVzLCByZWNpcGVEYXRhLCB1c2VySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBjcmVhdGVOb3RlRm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjcmVhdGVOb3RlQ29udGVudFJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuICBjb25zdCBhY3Rpb25JZCA9IGZldGNoZXIuc3VibWlzc2lvbj8uZm9ybURhdGEuZ2V0KFwiYWN0aW9uSWRcIik7XG4gIGNvbnN0IGlzQ3JlYXRpbmdOb3RlID0gYWN0aW9uSWQgPT09IGFjdGlvbklkcy5hZGROb3RlO1xuICBjb25zdCBpc1VwZGF0aW5nRmF2b3JpdGUgPVxuICAgIGFjdGlvbklkID09PSBhY3Rpb25JZHMuZmF2b3JpdGUgfHwgYWN0aW9uSWQgPT09IGFjdGlvbklkcy51bmZhdm9yaXRlO1xuXG4gIC8vIGFmdGVyIHNhdmluZyBuZXcgbm90ZSwgcmVzZXQgYW5kIGZvY3VzIGJhY2sgaW50byB0aGUgbmV3IG5vdGUgaW5wdXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQ3JlYXRpbmdOb3RlICYmIGZldGNoZXIudHlwZSAhPT0gXCJpbml0XCIpIHtcbiAgICAgIGNyZWF0ZU5vdGVDb250ZW50UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICBjcmVhdGVOb3RlRm9ybVJlZi5jdXJyZW50Py5yZXNldCgpO1xuICAgIH1cbiAgfSwgW2lzQ3JlYXRpbmdOb3RlLCBmZXRjaGVyLnR5cGVdKTtcblxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zdCBpc1JlY2lwZUZhdm9yaXRlZCA9IHJlY2lwZURhdGEuZmF2b3JpdGVkVXNlcnMuc29tZShcbiAgICAoaXRlbSkgPT4gaXRlbS51c2VySWQgPT09IHVzZXJJZFxuICApO1xuICBjb25zdCBmYXZvcml0ZUJ1dHRvblRleHQgPSBpc1VwZGF0aW5nRmF2b3JpdGVcbiAgICA/IFwiU2F2aW5nLi4uXCJcbiAgICA6IGlzUmVjaXBlRmF2b3JpdGVkXG4gICAgPyBcIlJFTU9WRSBGUk9NIEZBVk9SSVRFU1wiXG4gICAgOiBcIkZBVk9SSVRFIFRISVMgUkVDSVBFXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgey8qICoqKipSRUNJUEUqKiogKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTJcIj57cmVjaXBlRGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgIDxmZXRjaGVyLkZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ0Zhdm9yaXRlfVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgIGlzUmVjaXBlRmF2b3JpdGVkID8gYWN0aW9uSWRzLnVuZmF2b3JpdGUgOiBhY3Rpb25JZHMuZmF2b3JpdGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZmF2b3JpdGVCdXR0b25UZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mZXRjaGVyLkZvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTJcIj5JbmdyZWRpZW50czwvaDM+XG4gICAgICAgICAge3JlY2lwZURhdGEuaW5ncmVkaWVudHM/Lm1hcCgoaW5ncmVkaWVudCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5ncmVkaWVudC5pZH0gY2xhc3NOYW1lPVwidGV4dC1sZyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxwPntgLS0gJHtpbmdyZWRpZW50LnF1YW50aXR5fSAke2luZ3JlZGllbnQubmFtZX1gfTwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMlwiPkluc3RydWN0aW9uczwvaDM+XG4gICAgICAgIDxwPntyZWNpcGVEYXRhLmluc3RydWN0aW9uc308L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxociBjbGFzc05hbWU9XCJteS0xMlwiIC8+XG5cbiAgICAgIHsvKiAqKioqTk9URVMqKiogKi99XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTJcIj5Ob3RlczwvaDM+XG4gICAgICAgIHt1c2VySWQgPyAoXG4gICAgICAgICAgPGZldGNoZXIuRm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXtjcmVhdGVOb3RlRm9ybVJlZn0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2ZldGNoZXIuc3RhdGUgPT09IFwic3VibWl0dGluZ1wifT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBodG1sRm9yPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICBBZGQ6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICByZWY9e2NyZWF0ZU5vdGVDb250ZW50UmVmfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnQpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29udGVudC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIiByb2xlPVwiYWxlcnRcIiBpZD1cImNvbnRlbnQtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCAgbWwtMiBweS0xIHB4LTIgc2VsZi1lbmRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYWRkTm90ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2lzQ3JlYXRpbmdOb3RlID8gXCIuLi5cIiA6IFwiK1wifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mZXRjaGVyLkZvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJsb2dpblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ibHVlLTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAge25vdGVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIG5vdGVzPy5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtub3RlLmlkfSBjbGFzc05hbWU9XCJteS0yIHAtMiBiZy1zdG9uZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBUT0RPIC0tIGFkZCBtZXRhZGF0YSBhbmQgbWFrZSBzdXJlIHdlIHNvcnQgdGhlIGRhdGEgb24gc2VydmVyIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlciAqL31cbiAgICAgICAgICAgICAgICAgIDxOb3RlSXRlbSBub3RlPXtub3RlfSB1c2VySWQ9e3VzZXJJZH0gLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+Tm8gbm90ZXMgZm9yIHRoaXMgcmVjaXBlPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnR5cGUgTm90ZVByb3BzID0ge1xuICBub3RlOiBOb3RlO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXSB8IG51bGw7XG59O1xuXG5mdW5jdGlvbiBOb3RlSXRlbSh7IG5vdGUsIHVzZXJJZCB9OiBOb3RlUHJvcHMpIHtcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcbiAgY29uc3QgYWN0aW9uSWQgPSBmZXRjaGVyLnN1Ym1pc3Npb24/LmZvcm1EYXRhLmdldChcImFjdGlvbklkXCIpO1xuICBjb25zdCBpc1NwZWNpZmljTm90ZSA9XG4gICAgTnVtYmVyKGZldGNoZXIuc3VibWlzc2lvbj8uZm9ybURhdGEuZ2V0KFwibm90ZUlkXCIpKSA9PT0gbm90ZS5pZDtcbiAgY29uc3QgaXNVcGRhdGluZyA9IGlzU3BlY2lmaWNOb3RlICYmIGFjdGlvbklkID09PSBhY3Rpb25JZHMudXBkYXRlTm90ZTtcbiAgY29uc3QgaXNEZWxldGluZyA9IGlzU3BlY2lmaWNOb3RlICYmIGFjdGlvbklkID09PSBhY3Rpb25JZHMuZGVsZXRlTm90ZTtcblxuICBjb25zdCBzaG93RWRpdEJ1dHRvbiA9IHVzZXJJZCA9PT0gbm90ZS5hdXRob3JJZDtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICBjb25zdCBbZWRpdE5vdGVGb3JtRGF0YSwgc2V0RWRpdE5vdGVGb3JtXSA9IHVzZVN0YXRlPE5vdGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZWRpdE5vdGVGb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVkaXROb3RlQ29udGVudFJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcbiAgY29uc29sZS5sb2coXCJmZXRjaGVyLnN0YXRlXCIsIGZldGNoZXIuc3RhdGUpO1xuXG4gIC8vIGFmdGVyIHNhdmluZyBub3RlIHVwZGF0ZSwgcmVzZXQgYW5kIGNoYW5nZSBvdXQgb2YgZWRpdCBtb2RlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1VwZGF0aW5nKSB7XG4gICAgICBlZGl0Tm90ZUZvcm1SZWYuY3VycmVudCAmJiBlZGl0Tm90ZUZvcm1SZWYuY3VycmVudC5yZXNldCgpO1xuICAgICAgc2V0RWRpdE5vdGVGb3JtKG51bGwpO1xuICAgIH1cbiAgfSwgW2lzVXBkYXRpbmddKTtcblxuICAvLyBmb2N1cyB0aGUgaW5wdXQgYWZ0ZXIgb3BlbmluZyBlZGl0IGZvcm1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmV0Y2hlci5zdGF0ZSA9PT0gXCJpZGxlXCIgJiYgZWRpdE5vdGVGb3JtRGF0YSkge1xuICAgICAgZWRpdE5vdGVDb250ZW50UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbZmV0Y2hlci5zdGF0ZSwgZWRpdE5vdGVGb3JtRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtlZGl0Tm90ZUZvcm1EYXRhPy5pZCAhPT0gbm90ZS5pZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxwPntub3RlLmNvbnRlbnR9PC9wPlxuICAgICAgICAgIHtzaG93RWRpdEJ1dHRvbiA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEVkaXROb3RlRm9ybShub3RlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc1VwZGF0aW5nID8gXCIuLi5cIiA6IFwiZWRpdFwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGZldGNoZXIuRm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXtlZGl0Tm90ZUZvcm1SZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCBoaWRkZW4gbmFtZT1cIm5vdGVJZFwiIGRlZmF1bHRWYWx1ZT17bm90ZS5pZH0gLz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmcgfHwgaXNEZWxldGluZ31cbiAgICAgICAgICAgICAgICByZWY9e2VkaXROb3RlQ29udGVudFJlZn1cbiAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdE5vdGVGb3JtRGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17XG4gICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50KSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCA/IFwiY29udGVudC1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnQgPyAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJjb250ZW50LWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25JZFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwidXBkYXRlTm90ZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0RlbGV0aW5nIHx8IGlzVXBkYXRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc1VwZGF0aW5nID8gXCJzYXZpbmcuLi5cIiA6IFwic2F2ZVwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uSWRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cImRlbGV0ZU5vdGVcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEZWxldGluZyB8fCBpc1VwZGF0aW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNEZWxldGluZyA/IFwiZGVsZXRpbmcuLi4gXCIgOiBcImRlbGV0ZVwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXROb3RlRm9ybShudWxsKX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICBjYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZldGNoZXIuRm9ybT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTm90ZSwgTWVhbFR5cGUsIFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9tb2RlbHMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3Rlc0J5UmVjaXBlSWQocmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5ub3RlLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWQsXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICBjcmVhdGVkQXQ6IFwiZGVzY1wiLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90ZSh7XG4gIGNvbnRlbnQsXG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIGNvbnRlbnQ6IE5vdGVbXCJjb250ZW50XCJdO1xuICByZWNpcGVJZDogTm90ZVtcInJlY2lwZUlkXCJdO1xuICB1c2VySWQ6IE5vdGVbXCJhdXRob3JJZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLm5vdGUuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBjb250ZW50LFxuICAgICAgYXV0aG9ySWQ6IHVzZXJJZCxcbiAgICAgIHJlY2lwZUlkLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTm90ZSh7XG4gIGNvbnRlbnQsXG4gIG5vdGVJZCxcbn06IHtcbiAgY29udGVudDogTm90ZVtcImNvbnRlbnRcIl07XG4gIG5vdGVJZDogTm90ZVtcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIubm90ZS51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogbm90ZUlkLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgY29udGVudCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGF1dGhvcjogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGUobm90ZUlkOiBOb3RlW1wiaWRcIl0pIHtcbiAgcmV0dXJuIGRiLm5vdGUuZGVsZXRlKHtcbiAgICB3aGVyZTogeyBpZDogbm90ZUlkIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIEluZ3JlZGllbnQsXG4gIE1lYWxUeXBlLFxuICBOb3RlLFxuICBSZWNpcGUsXG4gIFVzZXIsXG4gIFVzZXJzRmF2b3JpdGVSZWNpcGVzLFxufSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBHZXRSZWNpcGVSZXNwb25zZSA9IFJlY2lwZSAmIHtcbiAgbWVhbFR5cGVzOiBNZWFsVHlwZVtdO1xuICBpbmdyZWRpZW50czogSW5ncmVkaWVudFtdO1xuICB1c2VyOiBVc2VyO1xuICBmYXZvcml0ZWRVc2VyczogVXNlcnNGYXZvcml0ZVJlY2lwZXNbXTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGUocmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5yZWNpcGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHJlY2lwZUlkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgbWVhbFR5cGVzOiB0cnVlLFxuICAgICAgaW5ncmVkaWVudHM6IHRydWUsXG4gICAgICBhdXRob3I6IHRydWUsXG4gICAgICBmYXZvcml0ZWRVc2VyczogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZhdm9yaXRlUmVjaXBlKHtcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLnVzZXJzRmF2b3JpdGVSZWNpcGVzLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgcmVjaXBlSWQsXG4gICAgICB1c2VySWQsXG4gICAgfSxcbiAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5mYXZvcml0ZVJlY2lwZSh7XG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi51c2Vyc0Zhdm9yaXRlUmVjaXBlcy5kZWxldGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICByZWNpcGVJZF91c2VySWQ6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICByZWNpcGVJZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIFRPRE8gLS0gbWF5YmUgaW1wbGVtZW50IHNvbWUgc29ydCBvZiBjbGVhbnVwIGZvciAnZXhwaXJlZCcgcmVjb3Jkc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29yZFJlY2lwZVZpZXcoe1xuICByZWNpcGVJZCxcbiAgdXNlcklkLFxufToge1xuICByZWNpcGVJZDogUmVjaXBlW1wiaWRcIl07XG4gIHVzZXJJZDogVXNlcltcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIucmVjaXBlUmVhZC51cHNlcnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICByZWNpcGVJZF91c2VySWQ6IHtcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICAgIHVzZXJJZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB1cGRhdGU6IHtcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9LFxuICAgIGNyZWF0ZToge1xuICAgICAgcmVjaXBlSWQsXG4gICAgICB1c2VySWQsXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYmFkUmVxdWVzdDxUQWN0aW9uRGF0YT4oZGF0YTogVEFjdGlvbkRhdGEpIHtcbiAgcmV0dXJuIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIFJlY2lwZSxcbiAgUmVjaXBlUmVhZCxcbiAgVXNlcixcbiAgVXNlcnNGYXZvcml0ZVJlY2lwZXMsXG59IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRSZWNlbnRseVZpZXdlZCB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSBBcnJheTxSZWNpcGVSZWFkICYgUmVjaXBlPjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFJlY2VudGx5Vmlld2VkKHVzZXJJZCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+cmVjZW50bHkgdmlld2VkPC9oMj5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIFJlY2lwZSxcbiAgUmVjaXBlUmVhZCxcbiAgVXNlcixcbiAgVXNlcnNGYXZvcml0ZVJlY2lwZXMsXG59IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VyUHJvZmlsZSB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHVzZXI6IFVzZXI7XG4gIHJlY2lwZXM6IFJlY2lwZVtdO1xuICBmYXZvcml0ZVJlY2lwZXM6IFVzZXJzRmF2b3JpdGVSZWNpcGVzW107XG4gIHJlY2lwZVJlYWRzOiBSZWNpcGVSZWFkW107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VXNlclByb2ZpbGUocmVxdWVzdCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICBjb25zdCB7IGZhdm9yaXRlUmVjaXBlcywgcmVjaXBlUmVhZHMsIHJlY2lwZXMsIC4uLnVzZXIgfSA9XG4gICAgdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5NeSBVc2VyIEluZm88L2gyPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHVzZXIsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDI+TXkgQXV0aG9yZWQgUmVjaXBlczwvaDI+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkocmVjaXBlcywgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5mYXZvcml0ZXM8L2gzPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGZhdm9yaXRlUmVjaXBlcywgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5yZWNlbnRseSB2aWV3ZWQ8L2gzPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHJlY2lwZVJlYWRzLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZGVzdHJveVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwifi91dGlscy9jb29raWVzLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgQVVUSDBfQ0xJRU5UX0lELFxuICBBVVRIMF9MT0dPVVRfVVJMLFxuICBBVVRIMF9SRVRVUk5fVE9fVVJMLFxufSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICBjb25zdCBsb2dvdXRVUkwgPSBuZXcgVVJMKEFVVEgwX0xPR09VVF9VUkwhKTtcblxuICBsb2dvdXRVUkwuc2VhcmNoUGFyYW1zLnNldChcImNsaWVudF9pZFwiLCBBVVRIMF9DTElFTlRfSUQhKTtcbiAgbG9nb3V0VVJMLnNlYXJjaFBhcmFtcy5zZXQoXCJyZXR1cm5Ub1wiLCBBVVRIMF9SRVRVUk5fVE9fVVJMISk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KGxvZ291dFVSTC50b1N0cmluZygpLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBNZWFsVHlwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsganNvbiwgTGluaywgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldE1lYWxUeXBlcyB9IGZyb20gXCJ+L21vZGVscy9tZWFsVHlwZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWVhbFR5cGVzID0gYXdhaXQgZ2V0TWVhbFR5cGVzKCk7XG4gIHJldHVybiBqc29uPE1lYWxUeXBlW10+KG1lYWxUeXBlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgbWVhbFR5cGVzID0gdXNlTG9hZGVyRGF0YTxNZWFsVHlwZVtdPigpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicC04XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPk1lYWwgVHlwZXM8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLThcIj5cbiAgICAgICAge21lYWxUeXBlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoPVwiaW50ZW50XCIgdG89e2AvbWVhbC10eXBlLyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9tYWluPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyByZXR1cm5Ub0Nvb2tpZSB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4gbG9naW4ocmVxdWVzdCk7XG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ2luKHJlcXVlc3QpO1xuXG5hc3luYyBmdW5jdGlvbiBsb2dpbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgbGV0IHJldHVyblRvID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJyZXR1cm5Ub1wiKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFwiYXV0aDBcIiwgcmVxdWVzdCwge1xuICAgICAgc3VjY2Vzc1JlZGlyZWN0OiByZXR1cm5UbyA/PyBcIi9wcm9maWxlXCIsXG4gICAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL1wiLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICghcmV0dXJuVG8pIHRocm93IGVycm9yO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlICYmIGlzUmVkaXJlY3QoZXJyb3IpKSB7XG4gICAgICBlcnJvci5oZWFkZXJzLmFwcGVuZChcbiAgICAgICAgXCJTZXQtQ29va2llXCIsXG4gICAgICAgIGF3YWl0IHJldHVyblRvQ29va2llLnNlcmlhbGl6ZShyZXR1cm5UbylcbiAgICAgICk7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3QocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPCAzMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDQwMCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5oYXMoXCJMb2NhdGlvblwiKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidmMTlhMGE1OCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtV0FZTFpSMlouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJYTEVMWlRZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUpOMzJKSkZULmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9hdXRoMC9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLTdRNlRBRTZGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVHRDJZS1FKLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUlBRUNTNlozLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1XWVVEM1g2QS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FR0QyWUtRSi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1XU1k3UkFIRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdEMllLUUouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkJzp7J2lkJzoncm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWFsLXR5cGUvOm1lYWxUeXBlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkLVVSVlVMUVFZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9maWxlJzp7J2lkJzoncm91dGVzL3Byb2ZpbGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvZmlsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcm9maWxlLTNKTTRBNkdGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlY2VudGx5LXZpZXdlZCc6eydpZCc6J3JvdXRlcy9yZWNlbnRseS12aWV3ZWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVjZW50bHktdmlld2VkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlY2VudGx5LXZpZXdlZC1NNDRJRFhRVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlBUTlZZSE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZCc6eydpZCc6J3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWNpcGVzLzpyZWNpcGVJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZC1RQVZPTzVJNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlBUTlZZSE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1GMTlBMEE1OC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNa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
