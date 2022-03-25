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
      await unfavoriteRecipe({
        userId,
        recipeId
      });
    }
    case actionIds.favorite: {
      const response = await favoriteRecipe({
        userId,
        recipeId
      });
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
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "actionId",
    value: isRecipeFavorited ? actionIds.unfavorite : actionIds.favorite
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
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

// route:/Users/lucashomer/homer-family-cookbook/app/routes/recipe/$recipeId.tsx
var recipeId_exports2 = {};
__export(recipeId_exports2, {
  action: () => action2,
  default: () => Recipe2,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());
var loader5 = async ({ params, request }) => {
  const userId = await getUserId(request);
  const recipeId = Number(params.recipeId);
  const recipeData = await getRecipe(recipeId);
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
    recipeData
  };
};
var actionIds2 = {
  favorite: "favorite",
  unfavorite: "unfavorite"
};
var action2 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const recipeId = Number(params.recipeId);
  const form = await request.formData();
  const actionId = form.get("actionId");
  if (actionId === actionIds2.favorite) {
    const response = await favoriteRecipe({
      userId,
      recipeId
    });
    console.log("response", response);
  }
  if (actionId === actionIds2.unfavorite) {
    await unfavoriteRecipe({
      userId,
      recipeId
    });
  }
  return null;
};
function Recipe2() {
  var _a;
  const { recipeData, userId } = (0, import_remix8.useLoaderData)();
  const isRecipeFavorited = recipeData.favoritedUsers.some((item) => item.userId === userId);
  const favoriteButtonText = isRecipeFavorited ? "REMOVE FROM FAVORITES" : "FAVORITE THIS RECIPE";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl mb-8"
  }, recipeData.title), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "actionId",
    value: isRecipeFavorited ? actionIds2.unfavorite : actionIds2.favorite
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, favoriteButtonText))), /* @__PURE__ */ React.createElement("ul", {
    className: "pl-8"
  }, (_a = recipeData.ingredients) == null ? void 0 : _a.map((ingredient) => /* @__PURE__ */ React.createElement("li", {
    key: ingredient.id,
    className: "text-xl mb-4"
  }, /* @__PURE__ */ React.createElement("p", null, `${ingredient.quantity} ${ingredient.description}`)))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/recently-viewed.tsx
var recently_viewed_exports = {};
__export(recently_viewed_exports, {
  default: () => Profile,
  loader: () => loader6
});
init_react();
var import_remix9 = __toESM(require_remix());
var loader6 = async ({ request }) => {
  const userId = await requireUserId(request);
  const data = await getRecentlyViewed(userId);
  return data;
};
function Profile() {
  const data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "recently viewed"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(data, null, 2))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile2,
  loader: () => loader7
});
init_react();
var import_remix10 = __toESM(require_remix());
var loader7 = async ({ request }) => {
  await requireUserId(request);
  const data = await getUserProfile(request);
  return data;
};
function Profile2() {
  const _a = (0, import_remix10.useLoaderData)(), { favoriteRecipes, recipeReads, recipes } = _a, user = __objRest(_a, ["favoriteRecipes", "recipeReads", "recipes"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "My User Info"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(user, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h2", null, "My Authored Recipes"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(recipes, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "favorites"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(favoriteRecipes, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "recently viewed"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(recipeReads, null, 2))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3
});
init_react();
var import_remix11 = __toESM(require_remix());
var action3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const logoutURL = new URL(AUTH0_LOGOUT_URL);
  logoutURL.searchParams.set("client_id", AUTH0_CLIENT_ID);
  logoutURL.searchParams.set("returnTo", AUTH0_RETURN_TO_URL);
  return (0, import_remix11.redirect)(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// route:/Users/lucashomer/homer-family-cookbook/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader8
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_remix13 = __toESM(require_remix());
var loader8 = async () => {
  const mealTypes = await getMealTypes();
  return (0, import_remix12.json)(mealTypes);
};
function Index() {
  const mealTypes = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl mb-8"
  }, "Meal Types"), /* @__PURE__ */ React.createElement("ul", {
    className: "pl-8"
  }, mealTypes.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.id,
    className: "text-xl mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    prefetch: "intent",
    to: `/meal-type/${item.id}`
  }, item.name))))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  loader: () => loader9
});
init_react();
var action4 = ({ request }) => login(request);
var loader9 = ({ request }) => login(request);
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
var assets_manifest_default = { "version": "fa5e7559", "entry": { "module": "/build/entry.client-JWYM6X4A.js", "imports": ["/build/_shared/chunk-TZ6XCVCF.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OM46YLSL.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/auth0/callback": { "id": "routes/auth/auth0/callback", "parentId": "root", "path": "auth/auth0/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/auth0/callback-K3NTBZPY.js", "imports": ["/build/_shared/chunk-EGD2YKQJ.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HK3A4AHP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-J6VOWQES.js", "imports": ["/build/_shared/chunk-EGD2YKQJ.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-RR4C2VGO.js", "imports": ["/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meal-type/$mealTypeId": { "id": "routes/meal-type/$mealTypeId", "parentId": "root", "path": "meal-type/:mealTypeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/meal-type/$mealTypeId-CEVMKQQN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-AP7A3VHO.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recently-viewed": { "id": "routes/recently-viewed", "parentId": "root", "path": "recently-viewed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recently-viewed-TQY6GW2P.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recipe/$recipeId": { "id": "routes/recipe/$recipeId", "parentId": "root", "path": "recipe/:recipeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recipe/$recipeId-QI5TH3YJ.js", "imports": ["/build/_shared/chunk-WPFWXZLM.js", "/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recipes/$recipeId": { "id": "routes/recipes/$recipeId", "parentId": "root", "path": "recipes/:recipeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recipes/$recipeId-LP5MS5EG.js", "imports": ["/build/_shared/chunk-WPFWXZLM.js", "/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FA5E7559.js" };

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
  "routes/recipe/$recipeId": {
    id: "routes/recipe/$recipeId",
    parentId: "root",
    path: "recipe/:recipeId",
    index: void 0,
    caseSensitive: void 0,
    module: recipeId_exports2
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL21vZGVscy91c2VyLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Nvb2tpZXMuc2VydmVyLnRzIiwgIi4uL2FwcC9jb25zdGFudHMvaW5kZXguc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9tZWFsVHlwZS50cyIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9ub3RlLnNlcnZlci50cyIsICIuLi9hcHAvbW9kZWxzL3JlY2lwZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Vycm9ycy5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZC50c3giLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjZW50bHktdmlld2VkLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9wcm9maWxlLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNlbnRseS12aWV3ZWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3Byb2ZpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVhbC10eXBlLzptZWFsVHlwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvYXV0aDAvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGVzLzpyZWNpcGVJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGUvOnJlY2lwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9yZWNlbnRseS12aWV3ZWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlY2VudGx5LXZpZXdlZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNlbnRseS12aWV3ZWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3Byb2ZpbGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2ZpbGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvZmlsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICB9IGFzIExvYWRlckRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiSG9tZXIgRmFtaWx5IENvb2tib29rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkhvbWVyIEZhbWlseSBDb29rYm9va1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAge2RhdGEudXNlciA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICA8cD57YFdlbGNvbWUgJHtkYXRhLnVzZXI/LmZpcnN0TmFtZSB8fCBcIlwifWB9PC9wPlxuICAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvbG9naW5cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9tb2RlbHMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBhdXRoUHJvZmlsZSA9IGF3YWl0IGF1dGguaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBhdXRoUHJvZmlsZT8udXNlcklkO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHJlY2lwZXM6IHRydWUsXG4gICAgICBmYXZvcml0ZVJlY2lwZXM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHJlY2lwZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZWNpcGVSZWFkczoge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgcmVjaXBlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudGx5Vmlld2VkKHVzZXJJZDogVXNlcltcImlkXCJdKSB7XG4gIHJldHVybiBkYi5yZWNpcGVSZWFkLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkLFxuICAgIH0sXG4gICAgb3JkZXJCeTogW1xuICAgICAge1xuICAgICAgICB1cGRhdGVkQXQ6IFwiZGVzY1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHJlY2lwZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUlkKHVzZXJJZDogVXNlcltcImlkXCJdKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHsgQXV0aDBQcm9maWxlLCBBdXRoMFN0cmF0ZWd5IH0gZnJvbSBcInJlbWl4LWF1dGgtYXV0aDBcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBzZXNzaW9uU3RvcmFnZSxcbiAgZ2V0U2Vzc2lvbixcbiAgZGVzdHJveVNlc3Npb24sXG59IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQge1xuICBBVVRIMF9DQUxMQkFDS19VUkwsXG4gIEFVVEgwX0NMSUVOVF9JRCxcbiAgQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgQVVUSDBfRE9NQUlOLFxufSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIEFwcEF1dGggPSBBdXRoMFByb2ZpbGUgJiB7IHVzZXJJZDogVXNlcltcImlkXCJdIH07XG5leHBvcnQgY29uc3QgYXV0aCA9IG5ldyBBdXRoZW50aWNhdG9yPEFwcEF1dGg+KHNlc3Npb25TdG9yYWdlKTtcblxuY29uc3QgYXV0aDBTdHJhdGVneSA9IG5ldyBBdXRoMFN0cmF0ZWd5KFxuICB7XG4gICAgY2FsbGJhY2tVUkw6IEFVVEgwX0NBTExCQUNLX1VSTCxcbiAgICBjbGllbnRJRDogQVVUSDBfQ0xJRU5UX0lELFxuICAgIGNsaWVudFNlY3JldDogQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICBkb21haW46IEFVVEgwX0RPTUFJTixcbiAgfSxcbiAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSBwcm9maWxlLmVtYWlsc1swXS52YWx1ZTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvZmlsZSxcbiAgICAgICAgdXNlcklkOiBuZXdVc2VyLmlkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByb2ZpbGUsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfTtcbiAgfVxuKTtcblxuYXV0aC51c2UoYXV0aDBTdHJhdGVneSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXR1cm5Ubzogc3RyaW5nID0gbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWVcbikge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZXR1cm5Ub1wiLCByZXR1cm5Ub11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWRpcmVjdFRvTG9naW4ocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCByZXR1cm5UbyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZXR1cm5Ub1wiLCByZXR1cm5Ub11dKTtcbiAgdGhyb3cgcmVkaXJlY3QoYC9sb2dpbj8ke3NlYXJjaFBhcmFtc31gKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWUsIGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBTRUNSRVRTIH0gZnJvbSBcIn4vY29uc3RhbnRzL2luZGV4LnNlcnZlclwiO1xuXG5pZiAoIVNFQ1JFVFMpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0VDUkVUUyBtdXN0IGJlIHNldFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIl9yZW1peF9zZXNzaW9uXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBzZWNyZXRzOiBbU0VDUkVUU10sXG4gICAgLy8gbm9ybWFsbHkgeW91IHdhbnQgdGhpcyB0byBiZSBgc2VjdXJlOiB0cnVlYFxuICAgIC8vIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBvbiBsb2NhbGhvc3QgZm9yIFNhZmFyaVxuICAgIC8vIGh0dHBzOi8vd2ViLmRldi93aGVuLXRvLXVzZS1sb2NhbC1odHRwcy9cbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2U7XG5cbmV4cG9ydCBjb25zdCByZXR1cm5Ub0Nvb2tpZSA9IGNyZWF0ZUNvb2tpZShcInJldHVybi10b1wiLCB7XG4gIHBhdGg6IFwiL1wiLFxuICBodHRwT25seTogdHJ1ZSxcbiAgc2FtZVNpdGU6IFwibGF4XCIsXG4gIG1heEFnZTogNjAsIC8vIDEgbWludXRlIGJlY2F1c2UgaXQgbWFrZXMgbm8gc2Vuc2UgdG8ga2VlcCBpdCBmb3IgYSBsb25nIHRpbWVcbiAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG59KTtcbiIsICJleHBvcnQgY29uc3QgQVVUSDBfUkVUVVJOX1RPX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX1JFVFVSTl9UT19VUkwhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0NBTExCQUNLX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX0NBTExCQUNLX1VSTCE7XG5leHBvcnQgY29uc3QgQVVUSDBfQ0xJRU5UX0lEID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lEITtcbmV4cG9ydCBjb25zdCBBVVRIMF9DTElFTlRfU0VDUkVUID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCE7XG5leHBvcnQgY29uc3QgQVVUSDBfRE9NQUlOID0gcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOITtcbmV4cG9ydCBjb25zdCBBVVRIMF9MT0dPVVRfVVJMID0gcHJvY2Vzcy5lbnYuQVVUSDBfTE9HT1VUX1VSTCE7XG5leHBvcnQgY29uc3QgU0VDUkVUUyA9IHByb2Nlc3MuZW52LlNFQ1JFVFMhO1xuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLmRiKSB7XG4gICAgZ2xvYmFsLmRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLmRiO1xuICBkYi4kY29ubmVjdCgpO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB0eXBlIHsgTWVhbFR5cGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzLCBNZWFsVHlwZVdpdGhSZWNpcGVzIH0gZnJvbSBcIn4vbW9kZWxzL21lYWxUeXBlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbWVhbFR5cGVXaXRoUmVjaXBlcyA9IGF3YWl0IGdldE1lYWxUeXBlV2l0aFJlY2lwZXMoXG4gICAgTnVtYmVyKHBhcmFtcy5tZWFsVHlwZUlkKVxuICApO1xuXG4gIGlmICghbWVhbFR5cGVXaXRoUmVjaXBlcykge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShcIldoYXQgYSBqb2tlISBOb3QgZm91bmQuXCIsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1lYWxUeXBlV2l0aFJlY2lwZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWFsVHlwZSgpIHtcbiAgY29uc3QgbWVhbFR5cGUgPSB1c2VMb2FkZXJEYXRhPE1lYWxUeXBlV2l0aFJlY2lwZXM+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi04XCI+e21lYWxUeXBlLm5hbWV9PC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgIHttZWFsVHlwZS5yZWNpcGVzPy5tYXAoKHJlY2lwZSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3JlY2lwZS5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaD1cImludGVudFwiIHRvPXtgL3JlY2lwZXMvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIHtyZWNpcGUudGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE1lYWxUeXBlLCBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhbFR5cGVzKCkge1xuICByZXR1cm4gZGIubWVhbFR5cGUuZmluZE1hbnkoe30pO1xufVxuXG5leHBvcnQgdHlwZSBNZWFsVHlwZVdpdGhSZWNpcGVzID0gTWVhbFR5cGUgJiB7IHJlY2lwZXM6IFJlY2lwZVtdIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzKGlkOiBNZWFsVHlwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5tZWFsVHlwZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGluY2x1ZGU6IHsgcmVjaXBlczogdHJ1ZSB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldHVyblRvQ29va2llIH0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIC8vIGdldCB0aGUgcmV0dXJuVG8gZnJvbSB0aGUgY29va2llXG4gIGxldCByZXR1cm5UbyA9XG4gICAgKGF3YWl0IHJldHVyblRvQ29va2llLnBhcnNlKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpKSA/PyBcIi9wcm9maWxlXCI7XG5cbiAgLy8gY2FsbCBhdXRoZW50aWNhdGUgdG8gY29tcGxldGUgdGhlIGxvZ2luIGFuZCBzZXQgcmV0dXJuVG8gYXMgdGhlIHN1Y2Nlc3NSZWRpcmVjdFxuICByZXR1cm4gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXCJhdXRoMFwiLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiByZXR1cm5UbyxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgTm90ZSwgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAgTGluayxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE91dGxldCxcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlTm90ZSxcbiAgZ2V0Tm90ZXNCeVJlY2lwZUlkLFxuICB1cGRhdGVOb3RlLFxufSBmcm9tIFwifi9tb2RlbHMvbm90ZS5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIGZhdm9yaXRlUmVjaXBlLFxuICB1bmZhdm9yaXRlUmVjaXBlLFxuICBnZXRSZWNpcGUsXG4gIEdldFJlY2lwZVJlc3BvbnNlLFxuICByZWNvcmRSZWNpcGVWaWV3LFxufSBmcm9tIFwifi9tb2RlbHMvcmVjaXBlLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGJhZFJlcXVlc3QgfSBmcm9tIFwifi91dGlscy9lcnJvcnMuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgcmVjaXBlRGF0YTogR2V0UmVjaXBlUmVzcG9uc2U7XG4gIHVzZXJJZDogVXNlcltcImlkXCJdIHwgbnVsbDtcbiAgbm90ZXM6IE5vdGVbXTtcbn07XG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgcmVjaXBlSWQgPSBOdW1iZXIocGFyYW1zLnJlY2lwZUlkKTtcblxuICBjb25zdCByZWNpcGVEYXRhID0gYXdhaXQgZ2V0UmVjaXBlKHJlY2lwZUlkKTtcbiAgY29uc3Qgbm90ZXMgPSBhd2FpdCBnZXROb3Rlc0J5UmVjaXBlSWQocmVjaXBlSWQpO1xuXG4gIGlmICghcmVjaXBlRGF0YSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShcIldoYXQgYSBqb2tlISBOb3QgZm91bmQuXCIsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHVzZXJJZCkge1xuICAgIGF3YWl0IHJlY29yZFJlY2lwZVZpZXcoe1xuICAgICAgdXNlcklkLFxuICAgICAgcmVjaXBlSWQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVzZXJJZCxcbiAgICByZWNpcGVEYXRhLFxuICAgIG5vdGVzLFxuICB9O1xufTtcblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGlvbklkcyA9IHtcbiAgZmF2b3JpdGU6IFwiZmF2b3JpdGVcIixcbiAgdW5mYXZvcml0ZTogXCJ1bmZhdm9yaXRlXCIsXG4gIGFkZE5vdGU6IFwiYWRkTm90ZVwiLFxuICB1cGRhdGVOb3RlOiBcInVwZGF0ZU5vdGVcIixcbiAgbG9naW46IFwibG9naW5cIixcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudDogTm90ZVtcImNvbnRlbnRcIl0pIHtcbiAgaWYgKGNvbnRlbnQubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVGhhdCBub3RlIGlzIHRvbyBzaG9ydC5gO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgcmVjaXBlSWQgPSBOdW1iZXIocGFyYW1zLnJlY2lwZUlkKTtcblxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBhY3Rpb25JZCA9IGZvcm0uZ2V0KFwiYWN0aW9uSWRcIik7XG5cbiAgc3dpdGNoIChhY3Rpb25JZCkge1xuICAgIGNhc2UgYWN0aW9uSWRzLmxvZ2luOiB7XG4gICAgICByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvbklkcy51cGRhdGVOb3RlOiB7XG4gICAgICBjb25zdCBub3RlSWQgPSBmb3JtLmdldChcIm5vdGVJZFwiKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtLmdldChcImNvbnRlbnRcIik7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2Ygbm90ZUlkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICAgICAgY29udGVudDogdmFsaWRhdGVOb3RlQ29udGVudChjb250ZW50KSxcbiAgICAgIH07XG4gICAgICBjb25zdCBmaWVsZHMgPSB7IGNvbnRlbnQgfTtcblxuICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB1cGRhdGVOb3RlKHtcbiAgICAgICAgbm90ZUlkOiBOdW1iZXIobm90ZUlkKSxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVkaXJlY3QoYHJlY2lwZXMvJHtyZWNpcGVJZH1gKTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMuYWRkTm90ZToge1xuICAgICAgY29uc3QgY29udGVudCA9IGZvcm0uZ2V0KFwiY29udGVudFwiKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICAgICAgY29udGVudDogdmFsaWRhdGVOb3RlQ29udGVudChjb250ZW50KSxcbiAgICAgIH07XG4gICAgICBjb25zdCBmaWVsZHMgPSB7IGNvbnRlbnQgfTtcblxuICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBjcmVhdGVOb3RlKHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICByZWNpcGVJZCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVkaXJlY3QoYHJlY2lwZXMvJHtyZWNpcGVJZH1gKTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMudW5mYXZvcml0ZToge1xuICAgICAgYXdhaXQgdW5mYXZvcml0ZVJlY2lwZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMuZmF2b3JpdGU6IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmF2b3JpdGVSZWNpcGUoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhY3Rpb25JZDogJHthY3Rpb25JZH1gKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZSgpIHtcbiAgY29uc3QgeyBub3RlcywgcmVjaXBlRGF0YSwgdXNlcklkIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgY29uc3QgW2VkaXROb3RlRm9ybURhdGEsIHNldEVkaXROb3RlRm9ybV0gPSB1c2VTdGF0ZTxOb3RlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGVkaXROb3RlRm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlZGl0Tm90ZUNvbnRlbnRSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNyZWF0ZU5vdGVGb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNyZWF0ZU5vdGVDb250ZW50UmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IGFjdGlvbklkID0gdHJhbnNpdGlvbi5zdWJtaXNzaW9uPy5mb3JtRGF0YS5nZXQoXCJhY3Rpb25JZFwiKTtcbiAgY29uc3QgaXNDcmVhdGluZ05vdGUgPSBhY3Rpb25JZCA9PT0gYWN0aW9uSWRzLmFkZE5vdGU7XG4gIGNvbnN0IGlzRWRpdGluZ05vdGUgPSBhY3Rpb25JZCA9PT0gYWN0aW9uSWRzLnVwZGF0ZU5vdGU7XG5cbiAgLy8gYWZ0ZXIgc2F2aW5nIG5ldyBub3RlLCByZXNldCBhbmQgZm9jdXMgYmFjayBpbnRvIHRoZSBuZXcgbm90ZSBpbnB1dFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiBpc0NyZWF0aW5nTm90ZSkge1xuICAgICAgY3JlYXRlTm90ZUNvbnRlbnRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICAgIGNyZWF0ZU5vdGVGb3JtUmVmLmN1cnJlbnQ/LnJlc2V0KCk7XG4gICAgfVxuICB9LCBbaXNDcmVhdGluZ05vdGUsIHRyYW5zaXRpb24uc3RhdGVdKTtcblxuICAvLyBhZnRlciBzYXZpbmcgbm90ZSB1cGRhdGUsIHJlc2V0IGFuZCBjaGFuZ2Ugb3V0IG9mIGVkaXQgbW9kZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiBpc0VkaXRpbmdOb3RlKSB7XG4gICAgICBlZGl0Tm90ZUZvcm1SZWYuY3VycmVudCAmJiBlZGl0Tm90ZUZvcm1SZWYuY3VycmVudC5yZXNldCgpO1xuICAgICAgc2V0RWRpdE5vdGVGb3JtKG51bGwpO1xuICAgIH1cbiAgfSwgW3RyYW5zaXRpb24uc3RhdGUsIGlzRWRpdGluZ05vdGVdKTtcblxuICAvLyBmb2N1cyB0aGUgaW5wdXQgYWZ0ZXIgb3BlbmluZyBlZGl0IGZvcm1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIgJiYgZWRpdE5vdGVGb3JtRGF0YSkge1xuICAgICAgZWRpdE5vdGVDb250ZW50UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbdHJhbnNpdGlvbi5zdGF0ZSwgZWRpdE5vdGVGb3JtRGF0YV0pO1xuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG5cbiAgY29uc3QgaXNSZWNpcGVGYXZvcml0ZWQgPSByZWNpcGVEYXRhLmZhdm9yaXRlZFVzZXJzLnNvbWUoXG4gICAgKGl0ZW0pID0+IGl0ZW0udXNlcklkID09PSB1c2VySWRcbiAgKTtcbiAgY29uc3QgZmF2b3JpdGVCdXR0b25UZXh0ID0gaXNSZWNpcGVGYXZvcml0ZWRcbiAgICA/IFwiUkVNT1ZFIEZST00gRkFWT1JJVEVTXCJcbiAgICA6IFwiRkFWT1JJVEUgVEhJUyBSRUNJUEVcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLThcIj57cmVjaXBlRGF0YS50aXRsZX08L2gxPlxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25JZFwiXG4gICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgIGlzUmVjaXBlRmF2b3JpdGVkID8gYWN0aW9uSWRzLnVuZmF2b3JpdGUgOiBhY3Rpb25JZHMuZmF2b3JpdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPntmYXZvcml0ZUJ1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLThcIj5cbiAgICAgICAgPGgzPkluZ3JlZGllbnRzPC9oMz5cbiAgICAgICAge3JlY2lwZURhdGEuaW5ncmVkaWVudHM/Lm1hcCgoaW5ncmVkaWVudCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZ3JlZGllbnQuaWR9IGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgPHA+e2Ake2luZ3JlZGllbnQucXVhbnRpdHl9ICR7aW5ncmVkaWVudC5uYW1lfWB9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkluc3RydWN0aW9uczwvaDM+XG4gICAgICA8cD57cmVjaXBlRGF0YS5pbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPk5vdGVzPC9oMz5cbiAgICAgICAge3VzZXJJZCA/IChcbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXtjcmVhdGVOb3RlRm9ybVJlZn0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBodG1sRm9yPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICBOb3RlOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjcmVhdGVOb3RlQ29udGVudFJlZn1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50KSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNvbnRlbnQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJjb250ZW50LWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgIG1sLTIgcHktMSBweC0yIHNlbGYtZW5kXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25JZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImFkZE5vdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpc0NyZWF0aW5nTm90ZSA/IFwiLi4uXCIgOiBcIitcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uSWRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWJsdWUtNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge25vdGVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgbm90ZXM/Lm1hcCgobm90ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtub3RlLmlkfSBjbGFzc05hbWU9XCJtLTIgcC0yIGJnLXN0b25lLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogVE9ETyAtLSBhZGQgbWV0YWRhdGEgYW5kIG1ha2Ugc3VyZSB3ZSBzb3J0IHRoZSBkYXRhIG9uIHNlcnZlciBpbiByZXZlcnNlIGNocm9ub2xvZ2ljYWwgb3JkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIHtlZGl0Tm90ZUZvcm1EYXRhPy5pZCAhPT0gbm90ZS5pZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0aWNcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bm90ZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXROb3RlRm9ybShub3RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXtlZGl0Tm90ZUZvcm1SZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZUlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm90ZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0Tm90ZUNvbnRlbnRSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdE5vdGVGb3JtRGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29udGVudC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGVudC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmZpZWxkRXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdE5vdGVGb3JtKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInVwZGF0ZU5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0VkaXRpbmdOb3RlID8gXCJzYXZpbmcuLi5cIiA6IFwic2F2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPk5vIG5vdGVzIGZvciB0aGlzIHJlY2lwZTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBOb3RlLCBNZWFsVHlwZSwgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGVzQnlSZWNpcGVJZChyZWNpcGVJZDogUmVjaXBlW1wiaWRcIl0pIHtcbiAgcmV0dXJuIGRiLm5vdGUuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICByZWNpcGVJZCxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBhdXRob3I6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOb3RlKHtcbiAgY29udGVudCxcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgY29udGVudDogTm90ZVtcImNvbnRlbnRcIl07XG4gIHJlY2lwZUlkOiBOb3RlW1wicmVjaXBlSWRcIl07XG4gIHVzZXJJZDogTm90ZVtcImF1dGhvcklkXCJdO1xufSkge1xuICByZXR1cm4gZGIubm90ZS5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3JJZDogdXNlcklkLFxuICAgICAgcmVjaXBlSWQsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVOb3RlKHtcbiAgY29udGVudCxcbiAgbm90ZUlkLFxufToge1xuICBjb250ZW50OiBOb3RlW1wiY29udGVudFwiXTtcbiAgbm90ZUlkOiBOb3RlW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi5ub3RlLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBub3RlSWQsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBjb250ZW50LFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgdHlwZSBNZWFsVHlwZVdpdGhSZWNpcGVzID0gTWVhbFR5cGUgJiB7IHJlY2lwZXM6IFJlY2lwZVtdIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzKGlkOiBNZWFsVHlwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5tZWFsVHlwZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGluY2x1ZGU6IHsgcmVjaXBlczogdHJ1ZSB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBJbmdyZWRpZW50LFxuICBNZWFsVHlwZSxcbiAgTm90ZSxcbiAgUmVjaXBlLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgR2V0UmVjaXBlUmVzcG9uc2UgPSBSZWNpcGUgJiB7XG4gIG1lYWxUeXBlczogTWVhbFR5cGVbXTtcbiAgaW5ncmVkaWVudHM6IEluZ3JlZGllbnRbXTtcbiAgbm90ZXM6IE5vdGVbXTtcbiAgdXNlcjogVXNlcjtcbiAgZmF2b3JpdGVkVXNlcnM6IFVzZXJzRmF2b3JpdGVSZWNpcGVzW107XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlKHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXSkge1xuICByZXR1cm4gZGIucmVjaXBlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiByZWNpcGVJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIG1lYWxUeXBlczogdHJ1ZSxcbiAgICAgIGluZ3JlZGllbnRzOiB0cnVlLFxuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgICAgZmF2b3JpdGVkVXNlcnM6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmYXZvcml0ZVJlY2lwZSh7XG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi51c2Vyc0Zhdm9yaXRlUmVjaXBlcy5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVuZmF2b3JpdGVSZWNpcGUoe1xuICByZWNpcGVJZCxcbiAgdXNlcklkLFxufToge1xuICByZWNpcGVJZDogUmVjaXBlW1wiaWRcIl07XG4gIHVzZXJJZDogVXNlcltcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIudXNlcnNGYXZvcml0ZVJlY2lwZXMuZGVsZXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBUT0RPIC0tIG1heWJlIGltcGxlbWVudCBzb21lIHNvcnQgb2YgY2xlYW51cCBmb3IgJ2V4cGlyZWQnIHJlY29yZHNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNvcmRSZWNpcGVWaWV3KHtcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLnJlY2lwZVJlYWQudXBzZXJ0KHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgICB1c2VySWQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdXBkYXRlOiB7XG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgICBjcmVhdGU6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJhZFJlcXVlc3Q8VEFjdGlvbkRhdGE+KGRhdGE6IFRBY3Rpb25EYXRhKSB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG59XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBmYXZvcml0ZVJlY2lwZSxcbiAgdW5mYXZvcml0ZVJlY2lwZSxcbiAgZ2V0UmVjaXBlLFxuICBHZXRSZWNpcGVSZXNwb25zZSxcbiAgcmVjb3JkUmVjaXBlVmlldyxcbn0gZnJvbSBcIn4vbW9kZWxzL3JlY2lwZS5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgcmVjaXBlRGF0YTogR2V0UmVjaXBlUmVzcG9uc2U7XG4gIHVzZXJJZDogVXNlcltcImlkXCJdIHwgbnVsbDtcbn07XG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgcmVjaXBlSWQgPSBOdW1iZXIocGFyYW1zLnJlY2lwZUlkKTtcbiAgY29uc3QgcmVjaXBlRGF0YSA9IGF3YWl0IGdldFJlY2lwZShyZWNpcGVJZCk7XG5cbiAgaWYgKCFyZWNpcGVEYXRhKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiV2hhdCBhIGpva2UhIE5vdCBmb3VuZC5cIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICBpZiAodXNlcklkKSB7XG4gICAgYXdhaXQgcmVjb3JkUmVjaXBlVmlldyh7XG4gICAgICB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXNlcklkLFxuICAgIHJlY2lwZURhdGEsXG4gIH07XG59O1xuXG5jb25zdCBhY3Rpb25JZHMgPSB7XG4gIGZhdm9yaXRlOiBcImZhdm9yaXRlXCIsXG4gIHVuZmF2b3JpdGU6IFwidW5mYXZvcml0ZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCByZWNpcGVJZCA9IE51bWJlcihwYXJhbXMucmVjaXBlSWQpO1xuXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IGFjdGlvbklkID0gZm9ybS5nZXQoXCJhY3Rpb25JZFwiKTtcblxuICBpZiAoYWN0aW9uSWQgPT09IGFjdGlvbklkcy5mYXZvcml0ZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmF2b3JpdGVSZWNpcGUoe1xuICAgICAgdXNlcklkLFxuICAgICAgcmVjaXBlSWQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gIH1cblxuICBpZiAoYWN0aW9uSWQgPT09IGFjdGlvbklkcy51bmZhdm9yaXRlKSB7XG4gICAgYXdhaXQgdW5mYXZvcml0ZVJlY2lwZSh7XG4gICAgICB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZSgpIHtcbiAgY29uc3QgeyByZWNpcGVEYXRhLCB1c2VySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBpc1JlY2lwZUZhdm9yaXRlZCA9IHJlY2lwZURhdGEuZmF2b3JpdGVkVXNlcnMuc29tZShcbiAgICAoaXRlbSkgPT4gaXRlbS51c2VySWQgPT09IHVzZXJJZFxuICApO1xuICBjb25zdCBmYXZvcml0ZUJ1dHRvblRleHQgPSBpc1JlY2lwZUZhdm9yaXRlZFxuICAgID8gXCJSRU1PVkUgRlJPTSBGQVZPUklURVNcIlxuICAgIDogXCJGQVZPUklURSBUSElTIFJFQ0lQRVwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPntyZWNpcGVEYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgaXNSZWNpcGVGYXZvcml0ZWQgPyBhY3Rpb25JZHMudW5mYXZvcml0ZSA6IGFjdGlvbklkcy5mYXZvcml0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+e2Zhdm9yaXRlQnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGwtOFwiPlxuICAgICAgICB7cmVjaXBlRGF0YS5pbmdyZWRpZW50cz8ubWFwKChpbmdyZWRpZW50KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5ncmVkaWVudC5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICA8cD57YCR7aW5ncmVkaWVudC5xdWFudGl0eX0gJHtpbmdyZWRpZW50LmRlc2NyaXB0aW9ufWB9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIFJlY2lwZSxcbiAgUmVjaXBlUmVhZCxcbiAgVXNlcixcbiAgVXNlcnNGYXZvcml0ZVJlY2lwZXMsXG59IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRSZWNlbnRseVZpZXdlZCB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSBBcnJheTxSZWNpcGVSZWFkICYgUmVjaXBlPjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFJlY2VudGx5Vmlld2VkKHVzZXJJZCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+cmVjZW50bHkgdmlld2VkPC9oMj5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIFJlY2lwZSxcbiAgUmVjaXBlUmVhZCxcbiAgVXNlcixcbiAgVXNlcnNGYXZvcml0ZVJlY2lwZXMsXG59IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VyUHJvZmlsZSB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHVzZXI6IFVzZXI7XG4gIHJlY2lwZXM6IFJlY2lwZVtdO1xuICBmYXZvcml0ZVJlY2lwZXM6IFVzZXJzRmF2b3JpdGVSZWNpcGVzW107XG4gIHJlY2lwZVJlYWRzOiBSZWNpcGVSZWFkW107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VXNlclByb2ZpbGUocmVxdWVzdCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICBjb25zdCB7IGZhdm9yaXRlUmVjaXBlcywgcmVjaXBlUmVhZHMsIHJlY2lwZXMsIC4uLnVzZXIgfSA9XG4gICAgdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5NeSBVc2VyIEluZm88L2gyPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHVzZXIsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDI+TXkgQXV0aG9yZWQgUmVjaXBlczwvaDI+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkocmVjaXBlcywgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5mYXZvcml0ZXM8L2gzPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGZhdm9yaXRlUmVjaXBlcywgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5yZWNlbnRseSB2aWV3ZWQ8L2gzPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHJlY2lwZVJlYWRzLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZGVzdHJveVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwifi91dGlscy9jb29raWVzLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgQVVUSDBfQ0xJRU5UX0lELFxuICBBVVRIMF9MT0dPVVRfVVJMLFxuICBBVVRIMF9SRVRVUk5fVE9fVVJMLFxufSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICBjb25zdCBsb2dvdXRVUkwgPSBuZXcgVVJMKEFVVEgwX0xPR09VVF9VUkwhKTtcblxuICBsb2dvdXRVUkwuc2VhcmNoUGFyYW1zLnNldChcImNsaWVudF9pZFwiLCBBVVRIMF9DTElFTlRfSUQhKTtcbiAgbG9nb3V0VVJMLnNlYXJjaFBhcmFtcy5zZXQoXCJyZXR1cm5Ub1wiLCBBVVRIMF9SRVRVUk5fVE9fVVJMISk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KGxvZ291dFVSTC50b1N0cmluZygpLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBNZWFsVHlwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsganNvbiwgTGluaywgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldE1lYWxUeXBlcyB9IGZyb20gXCJ+L21vZGVscy9tZWFsVHlwZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWVhbFR5cGVzID0gYXdhaXQgZ2V0TWVhbFR5cGVzKCk7XG4gIHJldHVybiBqc29uPE1lYWxUeXBlW10+KG1lYWxUeXBlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgbWVhbFR5cGVzID0gdXNlTG9hZGVyRGF0YTxNZWFsVHlwZVtdPigpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLThcIj5NZWFsIFR5cGVzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLThcIj5cbiAgICAgICAgICB7bWVhbFR5cGVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoPVwiaW50ZW50XCIgdG89e2AvbWVhbC10eXBlLyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgcmV0dXJuVG9Db29raWUgfSBmcm9tIFwifi91dGlscy9jb29raWVzLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ2luKHJlcXVlc3QpO1xuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiBsb2dpbihyZXF1ZXN0KTtcblxuYXN5bmMgZnVuY3Rpb24gbG9naW4ocmVxdWVzdDogUmVxdWVzdCkge1xuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGxldCByZXR1cm5UbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwicmV0dXJuVG9cIikgYXMgc3RyaW5nIHwgbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBhdXRoLmF1dGhlbnRpY2F0ZShcImF1dGgwXCIsIHJlcXVlc3QsIHtcbiAgICAgIHN1Y2Nlc3NSZWRpcmVjdDogcmV0dXJuVG8gPz8gXCIvcHJvZmlsZVwiLFxuICAgICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9cIixcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoIXJldHVyblRvKSB0aHJvdyBlcnJvcjtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSAmJiBpc1JlZGlyZWN0KGVycm9yKSkge1xuICAgICAgZXJyb3IuaGVhZGVycy5hcHBlbmQoXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiLFxuICAgICAgICBhd2FpdCByZXR1cm5Ub0Nvb2tpZS5zZXJpYWxpemUocmV0dXJuVG8pXG4gICAgICApO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1JlZGlyZWN0KHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgMzAwIHx8IHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuaGFzKFwiTG9jYXRpb25cIik7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZmE1ZTc1NTknLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUpXWU02WDRBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UWjZYQ1ZDRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1PTTQ2WUxTTC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvYXV0aDAvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9hdXRoMC9jYWxsYmFjay1LM05UQlpQWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdEMllLUUouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1ISzNBNEFIUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tSjZWT1dRRVMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVHRDJZS1FKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtUlI0QzJWR08uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVHRDJZS1FKLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZCc6eydpZCc6J3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVhbC10eXBlLzptZWFsVHlwZUlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC1DRVZNS1FRTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvZmlsZSc6eydpZCc6J3JvdXRlcy9wcm9maWxlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2ZpbGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZmlsZS1BUDdBM1ZITy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlBUTlZZSE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWNlbnRseS12aWV3ZWQnOnsnaWQnOidyb3V0ZXMvcmVjZW50bHktdmlld2VkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlY2VudGx5LXZpZXdlZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWNlbnRseS12aWV3ZWQtVFFZNkdXMlAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJQVE5WWUhPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZCc6eydpZCc6J3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlY2lwZS86cmVjaXBlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZC1RSTVUSDNZSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV1BGV1haTE0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVjaXBlcy8kcmVjaXBlSWQnOnsnaWQnOidyb3V0ZXMvcmVjaXBlcy8kcmVjaXBlSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVjaXBlcy86cmVjaXBlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVjaXBlcy8kcmVjaXBlSWQtTFA1TVM1RUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdQRldYWkxNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlBUTlZZSE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1GQTVFNzU1OS5qcyd9OyJd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
