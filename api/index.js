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
var app_default = "/build/_assets/app-MEM6MXB2.css";

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
    className: "flex flex-nowrap justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Homer Family Cookbook",
    "aria-label": "Homer Family Cookbook"
  }, "Home")), data.user ? /* @__PURE__ */ React.createElement("div", {
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
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
      await updateNote({
        noteId: Number(noteId),
        content
      });
      return (0, import_remix7.redirect)(`recipes/${recipeId}`);
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
  const [editNoteFormData, setEditNoteForm] = (0, import_react.useState)(null);
  const editNoteFormRef = (0, import_react.useRef)(null);
  const editNoteContentRef = (0, import_react.useRef)(null);
  const createNoteFormRef = (0, import_react.useRef)(null);
  const createNoteContentRef = (0, import_react.useRef)(null);
  const transition = (0, import_remix7.useTransition)();
  const actionId = (_a = transition.submission) == null ? void 0 : _a.formData.get("actionId");
  const isCreatingNote = actionId === actionIds.addNote;
  const isEditingNote = actionId === actionIds.updateNote;
  (0, import_react.useEffect)(() => {
    var _a2, _b2;
    if (transition.state === "loading" && isCreatingNote) {
      (_a2 = createNoteContentRef.current) == null ? void 0 : _a2.focus();
      (_b2 = createNoteFormRef.current) == null ? void 0 : _b2.reset();
    }
  }, [isCreatingNote, transition.state]);
  (0, import_react.useEffect)(() => {
    if (transition.state === "loading" && isEditingNote) {
      editNoteFormRef.current && editNoteFormRef.current.reset();
      setEditNoteForm(null);
    }
  }, [transition.state, isEditingNote]);
  (0, import_react.useEffect)(() => {
    var _a2;
    if (transition.state === "idle" && editNoteFormData) {
      (_a2 = editNoteContentRef.current) == null ? void 0 : _a2.focus();
    }
  }, [transition.state, editNoteFormData]);
  const actionData = (0, import_remix7.useActionData)();
  const isRecipeFavorited = recipeData.favoritedUsers.some((item) => item.userId === userId);
  const favoriteButtonText = isRecipeFavorited ? "REMOVE FROM FAVORITES" : "FAVORITE THIS RECIPE";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl mb-8"
  }, recipeData.title), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "actionId",
    value: isRecipeFavorited ? actionIds.unfavorite : actionIds.favorite
  }, favoriteButtonText))), /* @__PURE__ */ React.createElement("ul", {
    className: "pl-8"
  }, /* @__PURE__ */ React.createElement("h3", null, "Ingredients"), (_b = recipeData.ingredients) == null ? void 0 : _b.map((ingredient) => /* @__PURE__ */ React.createElement("li", {
    key: ingredient.id,
    className: "text-xl mb-4"
  }, /* @__PURE__ */ React.createElement("p", null, `${ingredient.quantity} ${ingredient.name}`)))), /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl"
  }, "Instructions"), /* @__PURE__ */ React.createElement("p", null, recipeData.instructions), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null), /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl"
  }, "Notes"), userId ? /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post",
    ref: createNoteFormRef
  }, /* @__PURE__ */ React.createElement("fieldset", {
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-nowrap "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ React.createElement("label", {
    className: "font-bold",
    htmlFor: "content"
  }, "Note:", " "), /* @__PURE__ */ React.createElement("textarea", {
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
  }, "Login")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("ul", null, notes.length ? notes == null ? void 0 : notes.map((note) => {
    var _a2, _b2, _c2;
    return /* @__PURE__ */ React.createElement("li", {
      key: note.id,
      className: "m-2 p-2 bg-stone-200"
    }, (editNoteFormData == null ? void 0 : editNoteFormData.id) !== note.id ? /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-nowrap justify-between"
    }, /* @__PURE__ */ React.createElement("p", null, note.content), /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        setEditNoteForm(note);
      },
      disabled: transition.state === "loading"
    }, "edit")) : /* @__PURE__ */ React.createElement(import_remix7.Form, {
      method: "post",
      ref: editNoteFormRef
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-nowrap justify-between"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      hidden: true,
      name: "noteId",
      defaultValue: note.id
    }), /* @__PURE__ */ React.createElement("textarea", {
      disabled: transition.state === "submitting",
      ref: editNoteContentRef,
      id: "content",
      className: "border-2 border-solid border-gray-400 rounded-md",
      name: "content",
      defaultValue: editNoteFormData.content,
      "aria-invalid": Boolean((_a2 = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a2.content) || void 0,
      "aria-describedby": ((_b2 = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b2.content) ? "content-error" : void 0
    }), ((_c2 = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c2.content) ? /* @__PURE__ */ React.createElement("p", {
      className: "text-red-600",
      role: "alert",
      id: "content-error"
    }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("button", {
      onClick: () => setEditNoteForm(null),
      type: "button"
    }, "cancel"), /* @__PURE__ */ React.createElement("button", {
      type: "submit",
      name: "actionId",
      value: "updateNote",
      disabled: transition.state === "submitting"
    }, isEditingNote ? "saving..." : "save"))));
  }) : /* @__PURE__ */ React.createElement("p", null, "No notes for this recipe")))));
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
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl mb-8"
  }, "Meal Types"), /* @__PURE__ */ React.createElement("ul", {
    className: "pl-8"
  }, mealTypes.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.id,
    className: "text-xl mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    prefetch: "intent",
    to: `/meal-type/${item.id}`
  }, item.name))))));
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
var assets_manifest_default = { "version": "29445733", "entry": { "module": "/build/entry.client-7GTHFN6H.js", "imports": ["/build/_shared/chunk-NQ3W4X4X.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JKSXD7NA.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/auth0/callback": { "id": "routes/auth/auth0/callback", "parentId": "root", "path": "auth/auth0/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/auth0/callback-7Q6TAE6F.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UXU4QDW7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-WYUD3X6A.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-6YKCMTCU.js", "imports": ["/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meal-type/$mealTypeId": { "id": "routes/meal-type/$mealTypeId", "parentId": "root", "path": "meal-type/:mealTypeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/meal-type/$mealTypeId-JAMO7ATT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-V4FHHTHH.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recently-viewed": { "id": "routes/recently-viewed", "parentId": "root", "path": "recently-viewed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recently-viewed-3D47NN7A.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recipes/$recipeId": { "id": "routes/recipes/$recipeId", "parentId": "root", "path": "recipes/:recipeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recipes/$recipeId-AWW34VXC.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-29445733.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL21vZGVscy91c2VyLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Nvb2tpZXMuc2VydmVyLnRzIiwgIi4uL2FwcC9jb25zdGFudHMvaW5kZXguc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9tZWFsVHlwZS50cyIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9ub3RlLnNlcnZlci50cyIsICIuLi9hcHAvbW9kZWxzL3JlY2lwZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Vycm9ycy5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjZW50bHktdmlld2VkLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9wcm9maWxlLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNlbnRseS12aWV3ZWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3Byb2ZpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVhbC10eXBlLzptZWFsVHlwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvYXV0aDAvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGVzLzpyZWNpcGVJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVjZW50bHktdmlld2VkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNlbnRseS12aWV3ZWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVjZW50bHktdmlld2VkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9maWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9maWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2ZpbGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTGluayxcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgfSBhcyBMb2FkZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICB0aXRsZT1cIkhvbWVyIEZhbWlseSBDb29rYm9va1wiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJIb21lciBGYW1pbHkgQ29va2Jvb2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIHtkYXRhLnVzZXIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPHA+e2BXZWxjb21lICR7ZGF0YS51c2VyPy5maXJzdE5hbWUgfHwgXCJcIn1gfTwvcD5cbiAgICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL2xvZ2luXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgYXV0aFByb2ZpbGUgPSBhd2FpdCBhdXRoLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gYXV0aFByb2ZpbGU/LnVzZXJJZDtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICByZWNpcGVzOiB0cnVlLFxuICAgICAgZmF2b3JpdGVSZWNpcGVzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICByZWNpcGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVjaXBlUmVhZHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHJlY2lwZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNlbnRseVZpZXdlZCh1c2VySWQ6IFVzZXJbXCJpZFwiXSkge1xuICByZXR1cm4gZGIucmVjaXBlUmVhZC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJJZCxcbiAgICB9LFxuICAgIG9yZGVyQnk6IFtcbiAgICAgIHtcbiAgICAgICAgdXBkYXRlZEF0OiBcImRlc2NcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICByZWNpcGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlJZCh1c2VySWQ6IFVzZXJbXCJpZFwiXSk6IFByb21pc2U8VXNlciB8IG51bGw+IHtcbiAgcmV0dXJuIGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB7IEF1dGgwUHJvZmlsZSwgQXV0aDBTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWF1dGgwXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtcbiAgc2Vzc2lvblN0b3JhZ2UsXG4gIGdldFNlc3Npb24sXG4gIGRlc3Ryb3lTZXNzaW9uLFxufSBmcm9tIFwifi91dGlscy9jb29raWVzLnNlcnZlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9tb2RlbHMvZGIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgQVVUSDBfQ0FMTEJBQ0tfVVJMLFxuICBBVVRIMF9DTElFTlRfSUQsXG4gIEFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gIEFVVEgwX0RPTUFJTixcbn0gZnJvbSBcIn4vY29uc3RhbnRzL2luZGV4LnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBBcHBBdXRoID0gQXV0aDBQcm9maWxlICYgeyB1c2VySWQ6IFVzZXJbXCJpZFwiXSB9O1xuZXhwb3J0IGNvbnN0IGF1dGggPSBuZXcgQXV0aGVudGljYXRvcjxBcHBBdXRoPihzZXNzaW9uU3RvcmFnZSk7XG5cbmNvbnN0IGF1dGgwU3RyYXRlZ3kgPSBuZXcgQXV0aDBTdHJhdGVneShcbiAge1xuICAgIGNhbGxiYWNrVVJMOiBBVVRIMF9DQUxMQkFDS19VUkwsXG4gICAgY2xpZW50SUQ6IEFVVEgwX0NMSUVOVF9JRCxcbiAgICBjbGllbnRTZWNyZXQ6IEFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gICAgZG9tYWluOiBBVVRIMF9ET01BSU4sXG4gIH0sXG4gIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgIGNvbnN0IGVtYWlsID0gcHJvZmlsZS5lbWFpbHNbMF0udmFsdWU7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBlbWFpbCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZW1haWwsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb2ZpbGUsXG4gICAgICAgIHVzZXJJZDogbmV3VXNlci5pZCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm9maWxlLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgIH07XG4gIH1cbik7XG5cbmF1dGgudXNlKGF1dGgwU3RyYXRlZ3kpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG4gIHJldHVybiByZWRpcmVjdChcIi9sb2dpblwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVVzZXJJZChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmV0dXJuVG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmV0dXJuVG9cIiwgcmV0dXJuVG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9sb2dpbj8ke3NlYXJjaFBhcmFtc31gKTtcbiAgfVxuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkaXJlY3RUb0xvZ2luKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgcmV0dXJuVG8gPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZTtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmV0dXJuVG9cIiwgcmV0dXJuVG9dXSk7XG4gIHRocm93IHJlZGlyZWN0KGAvbG9naW4/JHtzZWFyY2hQYXJhbXN9YCk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llLCBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgU0VDUkVUUyB9IGZyb20gXCJ+L2NvbnN0YW50cy9pbmRleC5zZXJ2ZXJcIjtcblxuaWYgKCFTRUNSRVRTKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlNFQ1JFVFMgbXVzdCBiZSBzZXRcIik7XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfcmVtaXhfc2Vzc2lvblwiLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgc2VjcmV0czogW1NFQ1JFVFNdLFxuICAgIC8vIG5vcm1hbGx5IHlvdSB3YW50IHRoaXMgdG8gYmUgYHNlY3VyZTogdHJ1ZWBcbiAgICAvLyBidXQgdGhhdCBkb2Vzbid0IHdvcmsgb24gbG9jYWxob3N0IGZvciBTYWZhcmlcbiAgICAvLyBodHRwczovL3dlYi5kZXYvd2hlbi10by11c2UtbG9jYWwtaHR0cHMvXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IHNlc3Npb25TdG9yYWdlO1xuXG5leHBvcnQgY29uc3QgcmV0dXJuVG9Db29raWUgPSBjcmVhdGVDb29raWUoXCJyZXR1cm4tdG9cIiwge1xuICBwYXRoOiBcIi9cIixcbiAgaHR0cE9ubHk6IHRydWUsXG4gIHNhbWVTaXRlOiBcImxheFwiLFxuICBtYXhBZ2U6IDYwLCAvLyAxIG1pbnV0ZSBiZWNhdXNlIGl0IG1ha2VzIG5vIHNlbnNlIHRvIGtlZXAgaXQgZm9yIGEgbG9uZyB0aW1lXG4gIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufSk7XG4iLCAiZXhwb3J0IGNvbnN0IEFVVEgwX1JFVFVSTl9UT19VUkwgPSBwcm9jZXNzLmVudi5BVVRIMF9SRVRVUk5fVE9fVVJMITtcbmV4cG9ydCBjb25zdCBBVVRIMF9DQUxMQkFDS19VUkwgPSBwcm9jZXNzLmVudi5BVVRIMF9DQUxMQkFDS19VUkwhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0NMSUVOVF9JRCA9IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCE7XG5leHBvcnQgY29uc3QgQVVUSDBfQ0xJRU5UX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0RPTUFJTiA9IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTiE7XG5leHBvcnQgY29uc3QgQVVUSDBfTE9HT1VUX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX0xPR09VVF9VUkwhO1xuZXhwb3J0IGNvbnN0IFNFQ1JFVFMgPSBwcm9jZXNzLmVudi5TRUNSRVRTITtcbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIGRiOiBQcmlzbWFDbGllbnQ7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5kYikge1xuICAgIGdsb2JhbC5kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5kYjtcbiAgZGIuJGNvbm5lY3QoKTtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgdHlwZSB7IE1lYWxUeXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0TWVhbFR5cGVXaXRoUmVjaXBlcywgTWVhbFR5cGVXaXRoUmVjaXBlcyB9IGZyb20gXCJ+L21vZGVscy9tZWFsVHlwZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG1lYWxUeXBlV2l0aFJlY2lwZXMgPSBhd2FpdCBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzKFxuICAgIE51bWJlcihwYXJhbXMubWVhbFR5cGVJZClcbiAgKTtcblxuICBpZiAoIW1lYWxUeXBlV2l0aFJlY2lwZXMpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJXaGF0IGEgam9rZSEgTm90IGZvdW5kLlwiLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtZWFsVHlwZVdpdGhSZWNpcGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVhbFR5cGUoKSB7XG4gIGNvbnN0IG1lYWxUeXBlID0gdXNlTG9hZGVyRGF0YTxNZWFsVHlwZVdpdGhSZWNpcGVzPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPnttZWFsVHlwZS5uYW1lfTwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGwtOFwiPlxuICAgICAgICB7bWVhbFR5cGUucmVjaXBlcz8ubWFwKChyZWNpcGUpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtyZWNpcGUuaWR9IGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2g9XCJpbnRlbnRcIiB0bz17YC9yZWNpcGVzLyR7cmVjaXBlLmlkfWB9PlxuICAgICAgICAgICAgICB7cmVjaXBlLnRpdGxlfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBNZWFsVHlwZSwgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYWxUeXBlcygpIHtcbiAgcmV0dXJuIGRiLm1lYWxUeXBlLmZpbmRNYW55KHt9KTtcbn1cblxuZXhwb3J0IHR5cGUgTWVhbFR5cGVXaXRoUmVjaXBlcyA9IE1lYWxUeXBlICYgeyByZWNpcGVzOiBSZWNpcGVbXSB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhbFR5cGVXaXRoUmVjaXBlcyhpZDogTWVhbFR5cGVbXCJpZFwiXSkge1xuICByZXR1cm4gZGIubWVhbFR5cGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBpbmNsdWRlOiB7IHJlY2lwZXM6IHRydWUgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyByZXR1cm5Ub0Nvb2tpZSB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAvLyBnZXQgdGhlIHJldHVyblRvIGZyb20gdGhlIGNvb2tpZVxuICBsZXQgcmV0dXJuVG8gPVxuICAgIChhd2FpdCByZXR1cm5Ub0Nvb2tpZS5wYXJzZShyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKSkgPz8gXCIvcHJvZmlsZVwiO1xuXG4gIC8vIGNhbGwgYXV0aGVudGljYXRlIHRvIGNvbXBsZXRlIHRoZSBsb2dpbiBhbmQgc2V0IHJldHVyblRvIGFzIHRoZSBzdWNjZXNzUmVkaXJlY3RcbiAgcmV0dXJuIGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFwiYXV0aDBcIiwgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogcmV0dXJuVG8sXG4gICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9cIixcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IE5vdGUsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBPdXRsZXQsXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZU5vdGUsXG4gIGdldE5vdGVzQnlSZWNpcGVJZCxcbiAgdXBkYXRlTm90ZSxcbn0gZnJvbSBcIn4vbW9kZWxzL25vdGUuc2VydmVyXCI7XG5pbXBvcnQge1xuICBmYXZvcml0ZVJlY2lwZSxcbiAgdW5mYXZvcml0ZVJlY2lwZSxcbiAgZ2V0UmVjaXBlLFxuICBHZXRSZWNpcGVSZXNwb25zZSxcbiAgcmVjb3JkUmVjaXBlVmlldyxcbn0gZnJvbSBcIn4vbW9kZWxzL3JlY2lwZS5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBiYWRSZXF1ZXN0IH0gZnJvbSBcIn4vdXRpbHMvZXJyb3JzLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHJlY2lwZURhdGE6IEdldFJlY2lwZVJlc3BvbnNlO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXSB8IG51bGw7XG4gIG5vdGVzOiBOb3RlW107XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMsIHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHJlY2lwZUlkID0gTnVtYmVyKHBhcmFtcy5yZWNpcGVJZCk7XG5cbiAgY29uc3QgcmVjaXBlRGF0YSA9IGF3YWl0IGdldFJlY2lwZShyZWNpcGVJZCk7XG4gIGNvbnN0IG5vdGVzID0gYXdhaXQgZ2V0Tm90ZXNCeVJlY2lwZUlkKHJlY2lwZUlkKTtcblxuICBpZiAoIXJlY2lwZURhdGEpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJXaGF0IGEgam9rZSEgTm90IGZvdW5kLlwiLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh1c2VySWQpIHtcbiAgICBhd2FpdCByZWNvcmRSZWNpcGVWaWV3KHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJlY2lwZUlkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VySWQsXG4gICAgcmVjaXBlRGF0YSxcbiAgICBub3RlcyxcbiAgfTtcbn07XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gIH07XG59O1xuXG5jb25zdCBhY3Rpb25JZHMgPSB7XG4gIGZhdm9yaXRlOiBcImZhdm9yaXRlXCIsXG4gIHVuZmF2b3JpdGU6IFwidW5mYXZvcml0ZVwiLFxuICBhZGROb3RlOiBcImFkZE5vdGVcIixcbiAgdXBkYXRlTm90ZTogXCJ1cGRhdGVOb3RlXCIsXG4gIGxvZ2luOiBcImxvZ2luXCIsXG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU5vdGVDb250ZW50KGNvbnRlbnQ6IE5vdGVbXCJjb250ZW50XCJdKSB7XG4gIGlmIChjb250ZW50Lmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gYFRoYXQgbm90ZSBpcyB0b28gc2hvcnQuYDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHJlY2lwZUlkID0gTnVtYmVyKHBhcmFtcy5yZWNpcGVJZCk7XG5cbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgYWN0aW9uSWQgPSBmb3JtLmdldChcImFjdGlvbklkXCIpO1xuXG4gIHN3aXRjaCAoYWN0aW9uSWQpIHtcbiAgICBjYXNlIGFjdGlvbklkcy5sb2dpbjoge1xuICAgICAgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMudXBkYXRlTm90ZToge1xuICAgICAgY29uc3Qgbm90ZUlkID0gZm9ybS5nZXQoXCJub3RlSWRcIik7XG4gICAgICBjb25zdCBjb250ZW50ID0gZm9ybS5nZXQoXCJjb250ZW50XCIpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG5vdGVJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudCksXG4gICAgICB9O1xuICAgICAgY29uc3QgZmllbGRzID0geyBjb250ZW50IH07XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdXBkYXRlTm90ZSh7XG4gICAgICAgIG5vdGVJZDogTnVtYmVyKG5vdGVJZCksXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlZGlyZWN0KGByZWNpcGVzLyR7cmVjaXBlSWR9YCk7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uSWRzLmFkZE5vdGU6IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtLmdldChcImNvbnRlbnRcIik7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudCksXG4gICAgICB9O1xuICAgICAgY29uc3QgZmllbGRzID0geyBjb250ZW50IH07XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgY3JlYXRlTm90ZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlZGlyZWN0KGByZWNpcGVzLyR7cmVjaXBlSWR9YCk7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uSWRzLnVuZmF2b3JpdGU6IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5GQVZPUklURSBDQVNFXCIpO1xuICAgICAgYXdhaXQgdW5mYXZvcml0ZVJlY2lwZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvbklkcy5mYXZvcml0ZToge1xuICAgICAgYXdhaXQgZmF2b3JpdGVSZWNpcGUoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFjdGlvbklkOiAke2FjdGlvbklkfWApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlKCkge1xuICBjb25zdCB7IG5vdGVzLCByZWNpcGVEYXRhLCB1c2VySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBbZWRpdE5vdGVGb3JtRGF0YSwgc2V0RWRpdE5vdGVGb3JtXSA9IHVzZVN0YXRlPE5vdGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZWRpdE5vdGVGb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVkaXROb3RlQ29udGVudFJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcbiAgY29uc3QgY3JlYXRlTm90ZUZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcbiAgY29uc3QgY3JlYXRlTm90ZUNvbnRlbnRSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgYWN0aW9uSWQgPSB0cmFuc2l0aW9uLnN1Ym1pc3Npb24/LmZvcm1EYXRhLmdldChcImFjdGlvbklkXCIpO1xuICBjb25zdCBpc0NyZWF0aW5nTm90ZSA9IGFjdGlvbklkID09PSBhY3Rpb25JZHMuYWRkTm90ZTtcbiAgY29uc3QgaXNFZGl0aW5nTm90ZSA9IGFjdGlvbklkID09PSBhY3Rpb25JZHMudXBkYXRlTm90ZTtcblxuICAvLyBhZnRlciBzYXZpbmcgbmV3IG5vdGUsIHJlc2V0IGFuZCBmb2N1cyBiYWNrIGludG8gdGhlIG5ldyBub3RlIGlucHV0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmIGlzQ3JlYXRpbmdOb3RlKSB7XG4gICAgICBjcmVhdGVOb3RlQ29udGVudFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgY3JlYXRlTm90ZUZvcm1SZWYuY3VycmVudD8ucmVzZXQoKTtcbiAgICB9XG4gIH0sIFtpc0NyZWF0aW5nTm90ZSwgdHJhbnNpdGlvbi5zdGF0ZV0pO1xuXG4gIC8vIGFmdGVyIHNhdmluZyBub3RlIHVwZGF0ZSwgcmVzZXQgYW5kIGNoYW5nZSBvdXQgb2YgZWRpdCBtb2RlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmIGlzRWRpdGluZ05vdGUpIHtcbiAgICAgIGVkaXROb3RlRm9ybVJlZi5jdXJyZW50ICYmIGVkaXROb3RlRm9ybVJlZi5jdXJyZW50LnJlc2V0KCk7XG4gICAgICBzZXRFZGl0Tm90ZUZvcm0obnVsbCk7XG4gICAgfVxuICB9LCBbdHJhbnNpdGlvbi5zdGF0ZSwgaXNFZGl0aW5nTm90ZV0pO1xuXG4gIC8vIGZvY3VzIHRoZSBpbnB1dCBhZnRlciBvcGVuaW5nIGVkaXQgZm9ybVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSBcImlkbGVcIiAmJiBlZGl0Tm90ZUZvcm1EYXRhKSB7XG4gICAgICBlZGl0Tm90ZUNvbnRlbnRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFt0cmFuc2l0aW9uLnN0YXRlLCBlZGl0Tm90ZUZvcm1EYXRhXSk7XG5cbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGE8QWN0aW9uRGF0YT4oKTtcblxuICBjb25zdCBpc1JlY2lwZUZhdm9yaXRlZCA9IHJlY2lwZURhdGEuZmF2b3JpdGVkVXNlcnMuc29tZShcbiAgICAoaXRlbSkgPT4gaXRlbS51c2VySWQgPT09IHVzZXJJZFxuICApO1xuICBjb25zdCBmYXZvcml0ZUJ1dHRvblRleHQgPSBpc1JlY2lwZUZhdm9yaXRlZFxuICAgID8gXCJSRU1PVkUgRlJPTSBGQVZPUklURVNcIlxuICAgIDogXCJGQVZPUklURSBUSElTIFJFQ0lQRVwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPntyZWNpcGVEYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25JZFwiXG4gICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgIGlzUmVjaXBlRmF2b3JpdGVkID8gYWN0aW9uSWRzLnVuZmF2b3JpdGUgOiBhY3Rpb25JZHMuZmF2b3JpdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZmF2b3JpdGVCdXR0b25UZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgIDxoMz5JbmdyZWRpZW50czwvaDM+XG4gICAgICAgIHtyZWNpcGVEYXRhLmluZ3JlZGllbnRzPy5tYXAoKGluZ3JlZGllbnQpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmdyZWRpZW50LmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgIDxwPntgJHtpbmdyZWRpZW50LnF1YW50aXR5fSAke2luZ3JlZGllbnQubmFtZX1gfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5JbnN0cnVjdGlvbnM8L2gzPlxuICAgICAgPHA+e3JlY2lwZURhdGEuaW5zdHJ1Y3Rpb25zfTwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5Ob3RlczwvaDM+XG4gICAgICAgIHt1c2VySWQgPyAoXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17Y3JlYXRlTm90ZUZvcm1SZWZ9PlxuICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vd3JhcCBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgaHRtbEZvcj1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgTm90ZTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHJlZj17Y3JlYXRlTm90ZUNvbnRlbnRSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17XG4gICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjb250ZW50LWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiIHJvbGU9XCJhbGVydFwiIGlkPVwiY29udGVudC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmZpZWxkRXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kICBtbC0yIHB5LTEgcHgtMiBzZWxmLWVuZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uSWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhZGROb3RlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXNDcmVhdGluZ05vdGUgPyBcIi4uLlwiIDogXCIrXCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJsb2dpblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ibHVlLTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtub3Rlcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIG5vdGVzPy5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17bm90ZS5pZH0gY2xhc3NOYW1lPVwibS0yIHAtMiBiZy1zdG9uZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIFRPRE8gLS0gYWRkIG1ldGFkYXRhIGFuZCBtYWtlIHN1cmUgd2Ugc29ydCB0aGUgZGF0YSBvbiBzZXJ2ZXIgaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyICovfVxuICAgICAgICAgICAgICAgICAgICB7ZWRpdE5vdGVGb3JtRGF0YT8uaWQgIT09IG5vdGUuaWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGljXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e25vdGUuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0Tm90ZUZvcm0obm90ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17ZWRpdE5vdGVGb3JtUmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdGVJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vdGUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdE5vdGVDb250ZW50UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXROb3RlRm9ybURhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNvbnRlbnQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXROb3RlRm9ybShudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25JZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ1cGRhdGVOb3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFZGl0aW5nTm90ZSA/IFwic2F2aW5nLi4uXCIgOiBcInNhdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5ObyBub3RlcyBmb3IgdGhpcyByZWNpcGU8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTm90ZSwgTWVhbFR5cGUsIFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9tb2RlbHMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3Rlc0J5UmVjaXBlSWQocmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5ub3RlLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWQsXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICBjcmVhdGVkQXQ6IFwiZGVzY1wiLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90ZSh7XG4gIGNvbnRlbnQsXG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIGNvbnRlbnQ6IE5vdGVbXCJjb250ZW50XCJdO1xuICByZWNpcGVJZDogTm90ZVtcInJlY2lwZUlkXCJdO1xuICB1c2VySWQ6IE5vdGVbXCJhdXRob3JJZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLm5vdGUuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBjb250ZW50LFxuICAgICAgYXV0aG9ySWQ6IHVzZXJJZCxcbiAgICAgIHJlY2lwZUlkLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTm90ZSh7XG4gIGNvbnRlbnQsXG4gIG5vdGVJZCxcbn06IHtcbiAgY29udGVudDogTm90ZVtcImNvbnRlbnRcIl07XG4gIG5vdGVJZDogTm90ZVtcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIubm90ZS51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogbm90ZUlkLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgY29udGVudCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGF1dGhvcjogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBJbmdyZWRpZW50LFxuICBNZWFsVHlwZSxcbiAgTm90ZSxcbiAgUmVjaXBlLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgR2V0UmVjaXBlUmVzcG9uc2UgPSBSZWNpcGUgJiB7XG4gIG1lYWxUeXBlczogTWVhbFR5cGVbXTtcbiAgaW5ncmVkaWVudHM6IEluZ3JlZGllbnRbXTtcbiAgdXNlcjogVXNlcjtcbiAgZmF2b3JpdGVkVXNlcnM6IFVzZXJzRmF2b3JpdGVSZWNpcGVzW107XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlKHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXSkge1xuICByZXR1cm4gZGIucmVjaXBlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiByZWNpcGVJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIG1lYWxUeXBlczogdHJ1ZSxcbiAgICAgIGluZ3JlZGllbnRzOiB0cnVlLFxuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgICAgZmF2b3JpdGVkVXNlcnM6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmYXZvcml0ZVJlY2lwZSh7XG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi51c2Vyc0Zhdm9yaXRlUmVjaXBlcy5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVuZmF2b3JpdGVSZWNpcGUoe1xuICByZWNpcGVJZCxcbiAgdXNlcklkLFxufToge1xuICByZWNpcGVJZDogUmVjaXBlW1wiaWRcIl07XG4gIHVzZXJJZDogVXNlcltcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIudXNlcnNGYXZvcml0ZVJlY2lwZXMuZGVsZXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBUT0RPIC0tIG1heWJlIGltcGxlbWVudCBzb21lIHNvcnQgb2YgY2xlYW51cCBmb3IgJ2V4cGlyZWQnIHJlY29yZHNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNvcmRSZWNpcGVWaWV3KHtcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLnJlY2lwZVJlYWQudXBzZXJ0KHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgICB1c2VySWQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdXBkYXRlOiB7XG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgICBjcmVhdGU6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJhZFJlcXVlc3Q8VEFjdGlvbkRhdGE+KGRhdGE6IFRBY3Rpb25EYXRhKSB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBSZWNpcGUsXG4gIFJlY2lwZVJlYWQsXG4gIFVzZXIsXG4gIFVzZXJzRmF2b3JpdGVSZWNpcGVzLFxufSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0UmVjZW50bHlWaWV3ZWQgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0gQXJyYXk8UmVjaXBlUmVhZCAmIFJlY2lwZT47XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSZWNlbnRseVZpZXdlZCh1c2VySWQpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPnJlY2VudGx5IHZpZXdlZDwvaDI+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBSZWNpcGUsXG4gIFJlY2lwZVJlYWQsXG4gIFVzZXIsXG4gIFVzZXJzRmF2b3JpdGVSZWNpcGVzLFxufSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlclByb2ZpbGUgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB1c2VyOiBVc2VyO1xuICByZWNpcGVzOiBSZWNpcGVbXTtcbiAgZmF2b3JpdGVSZWNpcGVzOiBVc2Vyc0Zhdm9yaXRlUmVjaXBlc1tdO1xuICByZWNpcGVSZWFkczogUmVjaXBlUmVhZFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFVzZXJQcm9maWxlKHJlcXVlc3QpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgeyBmYXZvcml0ZVJlY2lwZXMsIHJlY2lwZVJlYWRzLCByZWNpcGVzLCAuLi51c2VyIH0gPVxuICAgIHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+TXkgVXNlciBJbmZvPC9oMj5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeSh1c2VyLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPk15IEF1dGhvcmVkIFJlY2lwZXM8L2gyPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHJlY2lwZXMsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDM+ZmF2b3JpdGVzPC9oMz5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShmYXZvcml0ZVJlY2lwZXMsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDM+cmVjZW50bHkgdmlld2VkPC9oMz5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShyZWNpcGVSZWFkcywgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGRlc3Ryb3lTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEFVVEgwX0NMSUVOVF9JRCxcbiAgQVVUSDBfTE9HT1VUX1VSTCxcbiAgQVVUSDBfUkVUVVJOX1RPX1VSTCxcbn0gZnJvbSBcIn4vY29uc3RhbnRzL2luZGV4LnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgY29uc3QgbG9nb3V0VVJMID0gbmV3IFVSTChBVVRIMF9MT0dPVVRfVVJMISk7XG5cbiAgbG9nb3V0VVJMLnNlYXJjaFBhcmFtcy5zZXQoXCJjbGllbnRfaWRcIiwgQVVUSDBfQ0xJRU5UX0lEISk7XG4gIGxvZ291dFVSTC5zZWFyY2hQYXJhbXMuc2V0KFwicmV0dXJuVG9cIiwgQVVUSDBfUkVUVVJOX1RPX1VSTCEpO1xuXG4gIHJldHVybiByZWRpcmVjdChsb2dvdXRVUkwudG9TdHJpbmcoKSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgTWVhbFR5cGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGpzb24sIExpbmssIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRNZWFsVHlwZXMgfSBmcm9tIFwifi9tb2RlbHMvbWVhbFR5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1lYWxUeXBlcyA9IGF3YWl0IGdldE1lYWxUeXBlcygpO1xuICByZXR1cm4ganNvbjxNZWFsVHlwZVtdPihtZWFsVHlwZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IG1lYWxUeXBlcyA9IHVzZUxvYWRlckRhdGE8TWVhbFR5cGVbXT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi04XCI+TWVhbCBUeXBlczwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgICAge21lYWxUeXBlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaD1cImludGVudFwiIHRvPXtgL21lYWwtdHlwZS8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldHVyblRvQ29va2llIH0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiBsb2dpbihyZXF1ZXN0KTtcbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4gbG9naW4ocmVxdWVzdCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBsZXQgcmV0dXJuVG8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInJldHVyblRvXCIpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXCJhdXRoMFwiLCByZXF1ZXN0LCB7XG4gICAgICBzdWNjZXNzUmVkaXJlY3Q6IHJldHVyblRvID8/IFwiL3Byb2ZpbGVcIixcbiAgICAgIGZhaWx1cmVSZWRpcmVjdDogXCIvXCIsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKCFyZXR1cm5UbykgdGhyb3cgZXJyb3I7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UgJiYgaXNSZWRpcmVjdChlcnJvcikpIHtcbiAgICAgIGVycm9yLmhlYWRlcnMuYXBwZW5kKFxuICAgICAgICBcIlNldC1Db29raWVcIixcbiAgICAgICAgYXdhaXQgcmV0dXJuVG9Db29raWUuc2VyaWFsaXplKHJldHVyblRvKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNSZWRpcmVjdChyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDMwMCB8fCByZXNwb25zZS5zdGF0dXMgPj0gNDAwKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiByZXNwb25zZS5oZWFkZXJzLmhhcyhcIkxvY2F0aW9uXCIpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzI5NDQ1NzMzJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC03R1RIRk42SC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTlEzVzRYNFguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSktTWEQ3TkEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2F1dGgwL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2stN1E2VEFFNkYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdEMllLUUouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVVhVNFFEVzcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLVdZVUQzWDZBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVHRDJZS1FKLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LTZZS0NNVENVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FR0QyWUtRSi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQnOnsnaWQnOidyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lYWwtdHlwZS86bWVhbFR5cGVJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQtSkFNTzdBVFQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2ZpbGUnOnsnaWQnOidyb3V0ZXMvcHJvZmlsZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9maWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2ZpbGUtVjRGSEhUSEguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJQVE5WWUhPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVjZW50bHktdmlld2VkJzp7J2lkJzoncm91dGVzL3JlY2VudGx5LXZpZXdlZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWNlbnRseS12aWV3ZWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVjZW50bHktdmlld2VkLTNENDdOTjdBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkJzp7J2lkJzoncm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlY2lwZXMvOnJlY2lwZUlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkLUFXVzM0VlhDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTI5NDQ1NzMzLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZC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
