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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL21vZGVscy91c2VyLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Nvb2tpZXMuc2VydmVyLnRzIiwgIi4uL2FwcC9jb25zdGFudHMvaW5kZXguc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9tZWFsVHlwZS50cyIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9ub3RlLnNlcnZlci50cyIsICIuLi9hcHAvbW9kZWxzL3JlY2lwZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Vycm9ycy5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZC50c3giLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjZW50bHktdmlld2VkLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9wcm9maWxlLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNlbnRseS12aWV3ZWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3Byb2ZpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVhbC10eXBlLzptZWFsVHlwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvYXV0aDAvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHJlY2lwZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGVzLzpyZWNpcGVJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGUvOnJlY2lwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9yZWNlbnRseS12aWV3ZWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlY2VudGx5LXZpZXdlZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNlbnRseS12aWV3ZWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3Byb2ZpbGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2ZpbGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvZmlsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICB9IGFzIExvYWRlckRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiSG9tZXIgRmFtaWx5IENvb2tib29rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkhvbWVyIEZhbWlseSBDb29rYm9va1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAge2RhdGEudXNlciA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICA8cD57YFdlbGNvbWUgJHtkYXRhLnVzZXI/LmZpcnN0TmFtZSB8fCBcIlwifWB9PC9wPlxuICAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvbG9naW5cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9tb2RlbHMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBhdXRoUHJvZmlsZSA9IGF3YWl0IGF1dGguaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBhdXRoUHJvZmlsZT8udXNlcklkO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHJlY2lwZXM6IHRydWUsXG4gICAgICBmYXZvcml0ZVJlY2lwZXM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHJlY2lwZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZWNpcGVSZWFkczoge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgcmVjaXBlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudGx5Vmlld2VkKHVzZXJJZDogVXNlcltcImlkXCJdKSB7XG4gIHJldHVybiBkYi5yZWNpcGVSZWFkLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkLFxuICAgIH0sXG4gICAgb3JkZXJCeTogW1xuICAgICAge1xuICAgICAgICB1cGRhdGVkQXQ6IFwiZGVzY1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHJlY2lwZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUlkKHVzZXJJZDogVXNlcltcImlkXCJdKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHsgQXV0aDBQcm9maWxlLCBBdXRoMFN0cmF0ZWd5IH0gZnJvbSBcInJlbWl4LWF1dGgtYXV0aDBcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBzZXNzaW9uU3RvcmFnZSxcbiAgZ2V0U2Vzc2lvbixcbiAgZGVzdHJveVNlc3Npb24sXG59IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQge1xuICBBVVRIMF9DQUxMQkFDS19VUkwsXG4gIEFVVEgwX0NMSUVOVF9JRCxcbiAgQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgQVVUSDBfRE9NQUlOLFxufSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIEFwcEF1dGggPSBBdXRoMFByb2ZpbGUgJiB7IHVzZXJJZDogVXNlcltcImlkXCJdIH07XG5leHBvcnQgY29uc3QgYXV0aCA9IG5ldyBBdXRoZW50aWNhdG9yPEFwcEF1dGg+KHNlc3Npb25TdG9yYWdlKTtcblxuY29uc3QgYXV0aDBTdHJhdGVneSA9IG5ldyBBdXRoMFN0cmF0ZWd5KFxuICB7XG4gICAgY2FsbGJhY2tVUkw6IEFVVEgwX0NBTExCQUNLX1VSTCxcbiAgICBjbGllbnRJRDogQVVUSDBfQ0xJRU5UX0lELFxuICAgIGNsaWVudFNlY3JldDogQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICBkb21haW46IEFVVEgwX0RPTUFJTixcbiAgfSxcbiAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSBwcm9maWxlLmVtYWlsc1swXS52YWx1ZTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvZmlsZSxcbiAgICAgICAgdXNlcklkOiBuZXdVc2VyLmlkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByb2ZpbGUsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfTtcbiAgfVxuKTtcblxuYXV0aC51c2UoYXV0aDBTdHJhdGVneSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXR1cm5Ubzogc3RyaW5nID0gbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWVcbikge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZXR1cm5Ub1wiLCByZXR1cm5Ub11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWRpcmVjdFRvTG9naW4ocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCByZXR1cm5UbyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZXR1cm5Ub1wiLCByZXR1cm5Ub11dKTtcbiAgdGhyb3cgcmVkaXJlY3QoYC9sb2dpbj8ke3NlYXJjaFBhcmFtc31gKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWUsIGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBTRUNSRVRTIH0gZnJvbSBcIn4vY29uc3RhbnRzL2luZGV4LnNlcnZlclwiO1xuXG5pZiAoIVNFQ1JFVFMpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0VDUkVUUyBtdXN0IGJlIHNldFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIl9yZW1peF9zZXNzaW9uXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBzZWNyZXRzOiBbU0VDUkVUU10sXG4gICAgLy8gbm9ybWFsbHkgeW91IHdhbnQgdGhpcyB0byBiZSBgc2VjdXJlOiB0cnVlYFxuICAgIC8vIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBvbiBsb2NhbGhvc3QgZm9yIFNhZmFyaVxuICAgIC8vIGh0dHBzOi8vd2ViLmRldi93aGVuLXRvLXVzZS1sb2NhbC1odHRwcy9cbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2U7XG5cbmV4cG9ydCBjb25zdCByZXR1cm5Ub0Nvb2tpZSA9IGNyZWF0ZUNvb2tpZShcInJldHVybi10b1wiLCB7XG4gIHBhdGg6IFwiL1wiLFxuICBodHRwT25seTogdHJ1ZSxcbiAgc2FtZVNpdGU6IFwibGF4XCIsXG4gIG1heEFnZTogNjAsIC8vIDEgbWludXRlIGJlY2F1c2UgaXQgbWFrZXMgbm8gc2Vuc2UgdG8ga2VlcCBpdCBmb3IgYSBsb25nIHRpbWVcbiAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG59KTtcbiIsICJleHBvcnQgY29uc3QgQVVUSDBfUkVUVVJOX1RPX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX1JFVFVSTl9UT19VUkwhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0NBTExCQUNLX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX0NBTExCQUNLX1VSTCE7XG5leHBvcnQgY29uc3QgQVVUSDBfQ0xJRU5UX0lEID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lEITtcbmV4cG9ydCBjb25zdCBBVVRIMF9DTElFTlRfU0VDUkVUID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCE7XG5leHBvcnQgY29uc3QgQVVUSDBfRE9NQUlOID0gcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOITtcbmV4cG9ydCBjb25zdCBBVVRIMF9MT0dPVVRfVVJMID0gcHJvY2Vzcy5lbnYuQVVUSDBfTE9HT1VUX1VSTCE7XG5leHBvcnQgY29uc3QgU0VDUkVUUyA9IHByb2Nlc3MuZW52LlNFQ1JFVFMhO1xuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLmRiKSB7XG4gICAgZ2xvYmFsLmRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLmRiO1xuICBkYi4kY29ubmVjdCgpO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB0eXBlIHsgTWVhbFR5cGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzLCBNZWFsVHlwZVdpdGhSZWNpcGVzIH0gZnJvbSBcIn4vbW9kZWxzL21lYWxUeXBlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbWVhbFR5cGVXaXRoUmVjaXBlcyA9IGF3YWl0IGdldE1lYWxUeXBlV2l0aFJlY2lwZXMoXG4gICAgTnVtYmVyKHBhcmFtcy5tZWFsVHlwZUlkKVxuICApO1xuXG4gIGlmICghbWVhbFR5cGVXaXRoUmVjaXBlcykge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShcIldoYXQgYSBqb2tlISBOb3QgZm91bmQuXCIsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1lYWxUeXBlV2l0aFJlY2lwZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWFsVHlwZSgpIHtcbiAgY29uc3QgbWVhbFR5cGUgPSB1c2VMb2FkZXJEYXRhPE1lYWxUeXBlV2l0aFJlY2lwZXM+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi04XCI+e21lYWxUeXBlLm5hbWV9PC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgIHttZWFsVHlwZS5yZWNpcGVzPy5tYXAoKHJlY2lwZSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3JlY2lwZS5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaD1cImludGVudFwiIHRvPXtgL3JlY2lwZXMvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIHtyZWNpcGUudGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE1lYWxUeXBlLCBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhbFR5cGVzKCkge1xuICByZXR1cm4gZGIubWVhbFR5cGUuZmluZE1hbnkoe30pO1xufVxuXG5leHBvcnQgdHlwZSBNZWFsVHlwZVdpdGhSZWNpcGVzID0gTWVhbFR5cGUgJiB7IHJlY2lwZXM6IFJlY2lwZVtdIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzKGlkOiBNZWFsVHlwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5tZWFsVHlwZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGluY2x1ZGU6IHsgcmVjaXBlczogdHJ1ZSB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldHVyblRvQ29va2llIH0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIC8vIGdldCB0aGUgcmV0dXJuVG8gZnJvbSB0aGUgY29va2llXG4gIGxldCByZXR1cm5UbyA9XG4gICAgKGF3YWl0IHJldHVyblRvQ29va2llLnBhcnNlKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpKSA/PyBcIi9wcm9maWxlXCI7XG5cbiAgLy8gY2FsbCBhdXRoZW50aWNhdGUgdG8gY29tcGxldGUgdGhlIGxvZ2luIGFuZCBzZXQgcmV0dXJuVG8gYXMgdGhlIHN1Y2Nlc3NSZWRpcmVjdFxuICByZXR1cm4gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXCJhdXRoMFwiLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiByZXR1cm5UbyxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgTm90ZSwgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAgTGluayxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE91dGxldCxcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlTm90ZSxcbiAgZ2V0Tm90ZXNCeVJlY2lwZUlkLFxuICB1cGRhdGVOb3RlLFxufSBmcm9tIFwifi9tb2RlbHMvbm90ZS5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIGZhdm9yaXRlUmVjaXBlLFxuICB1bmZhdm9yaXRlUmVjaXBlLFxuICBnZXRSZWNpcGUsXG4gIEdldFJlY2lwZVJlc3BvbnNlLFxuICByZWNvcmRSZWNpcGVWaWV3LFxufSBmcm9tIFwifi9tb2RlbHMvcmVjaXBlLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGJhZFJlcXVlc3QgfSBmcm9tIFwifi91dGlscy9lcnJvcnMuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgcmVjaXBlRGF0YTogR2V0UmVjaXBlUmVzcG9uc2U7XG4gIHVzZXJJZDogVXNlcltcImlkXCJdIHwgbnVsbDtcbiAgbm90ZXM6IE5vdGVbXTtcbn07XG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgcmVjaXBlSWQgPSBOdW1iZXIocGFyYW1zLnJlY2lwZUlkKTtcblxuICBjb25zdCByZWNpcGVEYXRhID0gYXdhaXQgZ2V0UmVjaXBlKHJlY2lwZUlkKTtcbiAgY29uc3Qgbm90ZXMgPSBhd2FpdCBnZXROb3Rlc0J5UmVjaXBlSWQocmVjaXBlSWQpO1xuXG4gIGlmICghcmVjaXBlRGF0YSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShcIldoYXQgYSBqb2tlISBOb3QgZm91bmQuXCIsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHVzZXJJZCkge1xuICAgIGF3YWl0IHJlY29yZFJlY2lwZVZpZXcoe1xuICAgICAgdXNlcklkLFxuICAgICAgcmVjaXBlSWQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVzZXJJZCxcbiAgICByZWNpcGVEYXRhLFxuICAgIG5vdGVzLFxuICB9O1xufTtcblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGlvbklkcyA9IHtcbiAgZmF2b3JpdGU6IFwiZmF2b3JpdGVcIixcbiAgdW5mYXZvcml0ZTogXCJ1bmZhdm9yaXRlXCIsXG4gIGFkZE5vdGU6IFwiYWRkTm90ZVwiLFxuICB1cGRhdGVOb3RlOiBcInVwZGF0ZU5vdGVcIixcbiAgbG9naW46IFwibG9naW5cIixcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTm90ZUNvbnRlbnQoY29udGVudDogTm90ZVtcImNvbnRlbnRcIl0pIHtcbiAgaWYgKGNvbnRlbnQubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVGhhdCBub3RlIGlzIHRvbyBzaG9ydC5gO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgcmVjaXBlSWQgPSBOdW1iZXIocGFyYW1zLnJlY2lwZUlkKTtcblxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBhY3Rpb25JZCA9IGZvcm0uZ2V0KFwiYWN0aW9uSWRcIik7XG5cbiAgc3dpdGNoIChhY3Rpb25JZCkge1xuICAgIGNhc2UgYWN0aW9uSWRzLmxvZ2luOiB7XG4gICAgICByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvbklkcy51cGRhdGVOb3RlOiB7XG4gICAgICBjb25zdCBub3RlSWQgPSBmb3JtLmdldChcIm5vdGVJZFwiKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtLmdldChcImNvbnRlbnRcIik7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2Ygbm90ZUlkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICAgICAgY29udGVudDogdmFsaWRhdGVOb3RlQ29udGVudChjb250ZW50KSxcbiAgICAgIH07XG4gICAgICBjb25zdCBmaWVsZHMgPSB7IGNvbnRlbnQgfTtcblxuICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB1cGRhdGVOb3RlKHtcbiAgICAgICAgbm90ZUlkOiBOdW1iZXIobm90ZUlkKSxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVkaXJlY3QoYHJlY2lwZXMvJHtyZWNpcGVJZH1gKTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMuYWRkTm90ZToge1xuICAgICAgY29uc3QgY29udGVudCA9IGZvcm0uZ2V0KFwiY29udGVudFwiKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICAgICAgY29udGVudDogdmFsaWRhdGVOb3RlQ29udGVudChjb250ZW50KSxcbiAgICAgIH07XG4gICAgICBjb25zdCBmaWVsZHMgPSB7IGNvbnRlbnQgfTtcblxuICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBjcmVhdGVOb3RlKHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICByZWNpcGVJZCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVkaXJlY3QoYHJlY2lwZXMvJHtyZWNpcGVJZH1gKTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMudW5mYXZvcml0ZToge1xuICAgICAgYXdhaXQgdW5mYXZvcml0ZVJlY2lwZSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25JZHMuZmF2b3JpdGU6IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmF2b3JpdGVSZWNpcGUoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhY3Rpb25JZDogJHthY3Rpb25JZH1gKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZSgpIHtcbiAgY29uc3QgeyBub3RlcywgcmVjaXBlRGF0YSwgdXNlcklkIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgY29uc3QgW2VkaXROb3RlRm9ybURhdGEsIHNldEVkaXROb3RlRm9ybV0gPSB1c2VTdGF0ZTxOb3RlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGVkaXROb3RlRm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlZGl0Tm90ZUNvbnRlbnRSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNyZWF0ZU5vdGVGb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNyZWF0ZU5vdGVDb250ZW50UmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IGFjdGlvbklkID0gdHJhbnNpdGlvbi5zdWJtaXNzaW9uPy5mb3JtRGF0YS5nZXQoXCJhY3Rpb25JZFwiKTtcbiAgY29uc3QgaXNDcmVhdGluZ05vdGUgPSBhY3Rpb25JZCA9PT0gYWN0aW9uSWRzLmFkZE5vdGU7XG4gIGNvbnN0IGlzRWRpdGluZ05vdGUgPSBhY3Rpb25JZCA9PT0gYWN0aW9uSWRzLnVwZGF0ZU5vdGU7XG5cbiAgLy8gYWZ0ZXIgc2F2aW5nIG5ldyBub3RlLCByZXNldCBhbmQgZm9jdXMgYmFjayBpbnRvIHRoZSBuZXcgbm90ZSBpbnB1dFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiBpc0NyZWF0aW5nTm90ZSkge1xuICAgICAgY3JlYXRlTm90ZUNvbnRlbnRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICAgIGNyZWF0ZU5vdGVGb3JtUmVmLmN1cnJlbnQ/LnJlc2V0KCk7XG4gICAgfVxuICB9LCBbaXNDcmVhdGluZ05vdGUsIHRyYW5zaXRpb24uc3RhdGVdKTtcblxuICAvLyBhZnRlciBzYXZpbmcgbm90ZSB1cGRhdGUsIHJlc2V0IGFuZCBjaGFuZ2Ugb3V0IG9mIGVkaXQgbW9kZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiBpc0VkaXRpbmdOb3RlKSB7XG4gICAgICBlZGl0Tm90ZUZvcm1SZWYuY3VycmVudCAmJiBlZGl0Tm90ZUZvcm1SZWYuY3VycmVudC5yZXNldCgpO1xuICAgICAgc2V0RWRpdE5vdGVGb3JtKG51bGwpO1xuICAgIH1cbiAgfSwgW3RyYW5zaXRpb24uc3RhdGUsIGlzRWRpdGluZ05vdGVdKTtcblxuICAvLyBmb2N1cyB0aGUgaW5wdXQgYWZ0ZXIgb3BlbmluZyBlZGl0IGZvcm1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIgJiYgZWRpdE5vdGVGb3JtRGF0YSkge1xuICAgICAgZWRpdE5vdGVDb250ZW50UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbdHJhbnNpdGlvbi5zdGF0ZSwgZWRpdE5vdGVGb3JtRGF0YV0pO1xuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG5cbiAgY29uc3QgaXNSZWNpcGVGYXZvcml0ZWQgPSByZWNpcGVEYXRhLmZhdm9yaXRlZFVzZXJzLnNvbWUoXG4gICAgKGl0ZW0pID0+IGl0ZW0udXNlcklkID09PSB1c2VySWRcbiAgKTtcbiAgY29uc3QgZmF2b3JpdGVCdXR0b25UZXh0ID0gaXNSZWNpcGVGYXZvcml0ZWRcbiAgICA/IFwiUkVNT1ZFIEZST00gRkFWT1JJVEVTXCJcbiAgICA6IFwiRkFWT1JJVEUgVEhJUyBSRUNJUEVcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLThcIj57cmVjaXBlRGF0YS50aXRsZX08L2gxPlxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25JZFwiXG4gICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgIGlzUmVjaXBlRmF2b3JpdGVkID8gYWN0aW9uSWRzLnVuZmF2b3JpdGUgOiBhY3Rpb25JZHMuZmF2b3JpdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPntmYXZvcml0ZUJ1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLThcIj5cbiAgICAgICAgPGgzPkluZ3JlZGllbnRzPC9oMz5cbiAgICAgICAge3JlY2lwZURhdGEuaW5ncmVkaWVudHM/Lm1hcCgoaW5ncmVkaWVudCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZ3JlZGllbnQuaWR9IGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgPHA+e2Ake2luZ3JlZGllbnQucXVhbnRpdHl9ICR7aW5ncmVkaWVudC5uYW1lfWB9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkluc3RydWN0aW9uczwvaDM+XG4gICAgICA8cD57cmVjaXBlRGF0YS5pbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPk5vdGVzPC9oMz5cbiAgICAgICAge3VzZXJJZCA/IChcbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXtjcmVhdGVOb3RlRm9ybVJlZn0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBodG1sRm9yPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICBOb3RlOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjcmVhdGVOb3RlQ29udGVudFJlZn1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50KSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNvbnRlbnQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJjb250ZW50LWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgIG1sLTIgcHktMSBweC0yIHNlbGYtZW5kXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25JZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImFkZE5vdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpc0NyZWF0aW5nTm90ZSA/IFwiLi4uXCIgOiBcIitcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uSWRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWJsdWUtNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge25vdGVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgbm90ZXM/Lm1hcCgobm90ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtub3RlLmlkfSBjbGFzc05hbWU9XCJtLTIgcC0yIGJnLXN0b25lLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogVE9ETyAtLSBhZGQgbWV0YWRhdGEgYW5kIG1ha2Ugc3VyZSB3ZSBzb3J0IHRoZSBkYXRhIG9uIHNlcnZlciBpbiByZXZlcnNlIGNocm9ub2xvZ2ljYWwgb3JkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIHtlZGl0Tm90ZUZvcm1EYXRhPy5pZCAhPT0gbm90ZS5pZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0aWNcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bm90ZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXROb3RlRm9ybShub3RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXtlZGl0Tm90ZUZvcm1SZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZUlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm90ZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0Tm90ZUNvbnRlbnRSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdE5vdGVGb3JtRGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29udGVudC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGVudC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmZpZWxkRXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdE5vdGVGb3JtKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInVwZGF0ZU5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0VkaXRpbmdOb3RlID8gXCJzYXZpbmcuLi5cIiA6IFwic2F2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPk5vIG5vdGVzIGZvciB0aGlzIHJlY2lwZTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBOb3RlLCBNZWFsVHlwZSwgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGVzQnlSZWNpcGVJZChyZWNpcGVJZDogUmVjaXBlW1wiaWRcIl0pIHtcbiAgcmV0dXJuIGRiLm5vdGUuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICByZWNpcGVJZCxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBhdXRob3I6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOb3RlKHtcbiAgY29udGVudCxcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgY29udGVudDogTm90ZVtcImNvbnRlbnRcIl07XG4gIHJlY2lwZUlkOiBOb3RlW1wicmVjaXBlSWRcIl07XG4gIHVzZXJJZDogTm90ZVtcImF1dGhvcklkXCJdO1xufSkge1xuICByZXR1cm4gZGIubm90ZS5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3JJZDogdXNlcklkLFxuICAgICAgcmVjaXBlSWQsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVOb3RlKHtcbiAgY29udGVudCxcbiAgbm90ZUlkLFxufToge1xuICBjb250ZW50OiBOb3RlW1wiY29udGVudFwiXTtcbiAgbm90ZUlkOiBOb3RlW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi5ub3RlLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBub3RlSWQsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBjb250ZW50LFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIEluZ3JlZGllbnQsXG4gIE1lYWxUeXBlLFxuICBOb3RlLFxuICBSZWNpcGUsXG4gIFVzZXIsXG4gIFVzZXJzRmF2b3JpdGVSZWNpcGVzLFxufSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBHZXRSZWNpcGVSZXNwb25zZSA9IFJlY2lwZSAmIHtcbiAgbWVhbFR5cGVzOiBNZWFsVHlwZVtdO1xuICBpbmdyZWRpZW50czogSW5ncmVkaWVudFtdO1xuICBub3RlczogTm90ZVtdO1xuICB1c2VyOiBVc2VyO1xuICBmYXZvcml0ZWRVc2VyczogVXNlcnNGYXZvcml0ZVJlY2lwZXNbXTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGUocmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5yZWNpcGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHJlY2lwZUlkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgbWVhbFR5cGVzOiB0cnVlLFxuICAgICAgaW5ncmVkaWVudHM6IHRydWUsXG4gICAgICBhdXRob3I6IHRydWUsXG4gICAgICBmYXZvcml0ZWRVc2VyczogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZhdm9yaXRlUmVjaXBlKHtcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLnVzZXJzRmF2b3JpdGVSZWNpcGVzLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgcmVjaXBlSWQsXG4gICAgICB1c2VySWQsXG4gICAgfSxcbiAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5mYXZvcml0ZVJlY2lwZSh7XG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi51c2Vyc0Zhdm9yaXRlUmVjaXBlcy5kZWxldGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICByZWNpcGVJZF91c2VySWQ6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICByZWNpcGVJZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIFRPRE8gLS0gbWF5YmUgaW1wbGVtZW50IHNvbWUgc29ydCBvZiBjbGVhbnVwIGZvciAnZXhwaXJlZCcgcmVjb3Jkc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29yZFJlY2lwZVZpZXcoe1xuICByZWNpcGVJZCxcbiAgdXNlcklkLFxufToge1xuICByZWNpcGVJZDogUmVjaXBlW1wiaWRcIl07XG4gIHVzZXJJZDogVXNlcltcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIucmVjaXBlUmVhZC51cHNlcnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICByZWNpcGVJZF91c2VySWQ6IHtcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICAgIHVzZXJJZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB1cGRhdGU6IHtcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9LFxuICAgIGNyZWF0ZToge1xuICAgICAgcmVjaXBlSWQsXG4gICAgICB1c2VySWQsXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYmFkUmVxdWVzdDxUQWN0aW9uRGF0YT4oZGF0YTogVEFjdGlvbkRhdGEpIHtcbiAgcmV0dXJuIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcbn1cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGZhdm9yaXRlUmVjaXBlLFxuICB1bmZhdm9yaXRlUmVjaXBlLFxuICBnZXRSZWNpcGUsXG4gIEdldFJlY2lwZVJlc3BvbnNlLFxuICByZWNvcmRSZWNpcGVWaWV3LFxufSBmcm9tIFwifi9tb2RlbHMvcmVjaXBlLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICByZWNpcGVEYXRhOiBHZXRSZWNpcGVSZXNwb25zZTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl0gfCBudWxsO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCByZWNpcGVJZCA9IE51bWJlcihwYXJhbXMucmVjaXBlSWQpO1xuICBjb25zdCByZWNpcGVEYXRhID0gYXdhaXQgZ2V0UmVjaXBlKHJlY2lwZUlkKTtcblxuICBpZiAoIXJlY2lwZURhdGEpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJXaGF0IGEgam9rZSEgTm90IGZvdW5kLlwiLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh1c2VySWQpIHtcbiAgICBhd2FpdCByZWNvcmRSZWNpcGVWaWV3KHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJlY2lwZUlkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VySWQsXG4gICAgcmVjaXBlRGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGlvbklkcyA9IHtcbiAgZmF2b3JpdGU6IFwiZmF2b3JpdGVcIixcbiAgdW5mYXZvcml0ZTogXCJ1bmZhdm9yaXRlXCIsXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHJlY2lwZUlkID0gTnVtYmVyKHBhcmFtcy5yZWNpcGVJZCk7XG5cbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgYWN0aW9uSWQgPSBmb3JtLmdldChcImFjdGlvbklkXCIpO1xuXG4gIGlmIChhY3Rpb25JZCA9PT0gYWN0aW9uSWRzLmZhdm9yaXRlKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmYXZvcml0ZVJlY2lwZSh7XG4gICAgICB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIGlmIChhY3Rpb25JZCA9PT0gYWN0aW9uSWRzLnVuZmF2b3JpdGUpIHtcbiAgICBhd2FpdCB1bmZhdm9yaXRlUmVjaXBlKHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJlY2lwZUlkLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlKCkge1xuICBjb25zdCB7IHJlY2lwZURhdGEsIHVzZXJJZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIGNvbnN0IGlzUmVjaXBlRmF2b3JpdGVkID0gcmVjaXBlRGF0YS5mYXZvcml0ZWRVc2Vycy5zb21lKFxuICAgIChpdGVtKSA9PiBpdGVtLnVzZXJJZCA9PT0gdXNlcklkXG4gICk7XG4gIGNvbnN0IGZhdm9yaXRlQnV0dG9uVGV4dCA9IGlzUmVjaXBlRmF2b3JpdGVkXG4gICAgPyBcIlJFTU9WRSBGUk9NIEZBVk9SSVRFU1wiXG4gICAgOiBcIkZBVk9SSVRFIFRISVMgUkVDSVBFXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi04XCI+e3JlY2lwZURhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICBuYW1lPVwiYWN0aW9uSWRcIlxuICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICBpc1JlY2lwZUZhdm9yaXRlZCA/IGFjdGlvbklkcy51bmZhdm9yaXRlIDogYWN0aW9uSWRzLmZhdm9yaXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57ZmF2b3JpdGVCdXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC04XCI+XG4gICAgICAgIHtyZWNpcGVEYXRhLmluZ3JlZGllbnRzPy5tYXAoKGluZ3JlZGllbnQpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmdyZWRpZW50LmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgIDxwPntgJHtpbmdyZWRpZW50LnF1YW50aXR5fSAke2luZ3JlZGllbnQuZGVzY3JpcHRpb259YH08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgUmVjaXBlLFxuICBSZWNpcGVSZWFkLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFJlY2VudGx5Vmlld2VkIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IEFycmF5PFJlY2lwZVJlYWQgJiBSZWNpcGU+O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UmVjZW50bHlWaWV3ZWQodXNlcklkKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5yZWNlbnRseSB2aWV3ZWQ8L2gyPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgUmVjaXBlLFxuICBSZWNpcGVSZWFkLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJQcm9maWxlIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgdXNlcjogVXNlcjtcbiAgcmVjaXBlczogUmVjaXBlW107XG4gIGZhdm9yaXRlUmVjaXBlczogVXNlcnNGYXZvcml0ZVJlY2lwZXNbXTtcbiAgcmVjaXBlUmVhZHM6IFJlY2lwZVJlYWRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRVc2VyUHJvZmlsZShyZXF1ZXN0KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IHsgZmF2b3JpdGVSZWNpcGVzLCByZWNpcGVSZWFkcywgcmVjaXBlcywgLi4udXNlciB9ID1cbiAgICB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPk15IFVzZXIgSW5mbzwvaDI+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkodXNlciwgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMj5NeSBBdXRob3JlZCBSZWNpcGVzPC9oMj5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShyZWNpcGVzLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgzPmZhdm9yaXRlczwvaDM+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVSZWNpcGVzLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgzPnJlY2VudGx5IHZpZXdlZDwvaDM+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkocmVjaXBlUmVhZHMsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBkZXN0cm95U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5pbXBvcnQge1xuICBBVVRIMF9DTElFTlRfSUQsXG4gIEFVVEgwX0xPR09VVF9VUkwsXG4gIEFVVEgwX1JFVFVSTl9UT19VUkwsXG59IGZyb20gXCJ+L2NvbnN0YW50cy9pbmRleC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG4gIGNvbnN0IGxvZ291dFVSTCA9IG5ldyBVUkwoQVVUSDBfTE9HT1VUX1VSTCEpO1xuXG4gIGxvZ291dFVSTC5zZWFyY2hQYXJhbXMuc2V0KFwiY2xpZW50X2lkXCIsIEFVVEgwX0NMSUVOVF9JRCEpO1xuICBsb2dvdXRVUkwuc2VhcmNoUGFyYW1zLnNldChcInJldHVyblRvXCIsIEFVVEgwX1JFVFVSTl9UT19VUkwhKTtcblxuICByZXR1cm4gcmVkaXJlY3QobG9nb3V0VVJMLnRvU3RyaW5nKCksIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IE1lYWxUeXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBqc29uLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0TWVhbFR5cGVzIH0gZnJvbSBcIn4vbW9kZWxzL21lYWxUeXBlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFsVHlwZXMgPSBhd2FpdCBnZXRNZWFsVHlwZXMoKTtcbiAgcmV0dXJuIGpzb248TWVhbFR5cGVbXT4obWVhbFR5cGVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBtZWFsVHlwZXMgPSB1c2VMb2FkZXJEYXRhPE1lYWxUeXBlW10+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPk1lYWwgVHlwZXM8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtOFwiPlxuICAgICAgICAgIHttZWFsVHlwZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2g9XCJpbnRlbnRcIiB0bz17YC9tZWFsLXR5cGUvJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyByZXR1cm5Ub0Nvb2tpZSB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4gbG9naW4ocmVxdWVzdCk7XG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ2luKHJlcXVlc3QpO1xuXG5hc3luYyBmdW5jdGlvbiBsb2dpbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgbGV0IHJldHVyblRvID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJyZXR1cm5Ub1wiKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFwiYXV0aDBcIiwgcmVxdWVzdCwge1xuICAgICAgc3VjY2Vzc1JlZGlyZWN0OiByZXR1cm5UbyA/PyBcIi9wcm9maWxlXCIsXG4gICAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL1wiLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICghcmV0dXJuVG8pIHRocm93IGVycm9yO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlICYmIGlzUmVkaXJlY3QoZXJyb3IpKSB7XG4gICAgICBlcnJvci5oZWFkZXJzLmFwcGVuZChcbiAgICAgICAgXCJTZXQtQ29va2llXCIsXG4gICAgICAgIGF3YWl0IHJldHVyblRvQ29va2llLnNlcmlhbGl6ZShyZXR1cm5UbylcbiAgICAgICk7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3QocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPCAzMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDQwMCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5oYXMoXCJMb2NhdGlvblwiKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidmYTVlNzU1OScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSldZTTZYNEEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRaNlhDVkNGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU9NNDZZTFNMLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9hdXRoMC9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLUszTlRCWlBZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FR0QyWUtRSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUhLM0E0QUhQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1KNlZPV1FFUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdEMllLUUouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1SUjRDMlZHTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdEMllLUUouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkJzp7J2lkJzoncm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWFsLXR5cGUvOm1lYWxUeXBlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkLUNFVk1LUVFOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9maWxlJzp7J2lkJzoncm91dGVzL3Byb2ZpbGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvZmlsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcm9maWxlLUFQN0EzVkhPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlY2VudGx5LXZpZXdlZCc6eydpZCc6J3JvdXRlcy9yZWNlbnRseS12aWV3ZWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVjZW50bHktdmlld2VkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlY2VudGx5LXZpZXdlZC1UUVk2R1cyUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlBUTlZZSE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkJzp7J2lkJzoncm91dGVzL3JlY2lwZS8kcmVjaXBlSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVjaXBlLzpyZWNpcGVJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkLVFJNVRIM1lKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XUEZXWFpMTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJQVE5WWUhPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZCc6eydpZCc6J3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWNpcGVzLzpyZWNpcGVJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWNpcGVzLyRyZWNpcGVJZC1MUDVNUzVFRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV1BGV1haTE0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUZBNUU3NTU5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtB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
