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
var app_default = "/build/_assets/app-VUCUXVPA.css";

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
    to: `/recipe/${recipe.id}`
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

// route:/Users/lucashomer/homer-family-cookbook/app/routes/recipe/$recipeId.tsx
var recipeId_exports = {};
__export(recipeId_exports, {
  action: () => action,
  default: () => Recipe,
  loader: () => loader4
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/models/recipe.server.ts
init_react();
async function getRecipe(recipeId) {
  return db.recipe.findUnique({
    where: { id: recipeId },
    include: {
      mealTypes: true,
      ingredients: true,
      notes: true,
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

// route:/Users/lucashomer/homer-family-cookbook/app/routes/recipe/$recipeId.tsx
var loader4 = async ({ params, request }) => {
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
var actionIds = {
  favorite: "favorite",
  unfavorite: "unfavorite"
};
var action = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const recipeId = Number(params.recipeId);
  const form = await request.formData();
  const actionId = form.get("actionId");
  if (actionId === actionIds.favorite) {
    const response = await favoriteRecipe({
      userId,
      recipeId
    });
    console.log("response", response);
  }
  if (actionId === actionIds.unfavorite) {
    await unfavoriteRecipe({
      userId,
      recipeId
    });
  }
  return null;
};
function Recipe() {
  var _a;
  const { recipeData, userId } = (0, import_remix6.useLoaderData)();
  const isRecipeFavorited = recipeData.favoritedUsers.some((item) => item.userId === userId);
  const favoriteButtonText = isRecipeFavorited ? "REMOVE FROM FAVORITES" : "FAVORITE THIS RECIPE";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl mb-8"
  }, recipeData.title), /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "actionId",
    value: isRecipeFavorited ? actionIds.unfavorite : actionIds.favorite
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
  loader: () => loader5
});
init_react();
var import_remix7 = __toESM(require_remix());
var loader5 = async ({ request }) => {
  const userId = await requireUserId(request);
  const data = await getRecentlyViewed(userId);
  return data;
};
function Profile() {
  const data = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "recently viewed"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(data, null, 2))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile2,
  loader: () => loader6
});
init_react();
var import_remix8 = __toESM(require_remix());
var loader6 = async ({ request }) => {
  await requireUserId(request);
  const data = await getUserProfile(request);
  return data;
};
function Profile2() {
  const _a = (0, import_remix8.useLoaderData)(), { favoriteRecipes, recipeReads, recipes } = _a, user = __objRest(_a, ["favoriteRecipes", "recipeReads", "recipes"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "My User Info"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(user, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h2", null, "My Authored Recipes"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(recipes, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "favorites"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(favoriteRecipes, null, 2))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "recently viewed"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(recipeReads, null, 2))));
}

// route:/Users/lucashomer/homer-family-cookbook/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
init_react();
var import_remix9 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const logoutURL = new URL(AUTH0_LOGOUT_URL);
  logoutURL.searchParams.set("client_id", AUTH0_CLIENT_ID);
  logoutURL.searchParams.set("returnTo", AUTH0_RETURN_TO_URL);
  return (0, import_remix9.redirect)(logoutURL.toString(), {
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
var import_remix10 = __toESM(require_remix());
var import_remix11 = __toESM(require_remix());
var loader7 = async () => {
  const mealTypes = await getMealTypes();
  return (0, import_remix10.json)(mealTypes);
};
function Index() {
  const mealTypes = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl mb-8"
  }, "Meal Types"), /* @__PURE__ */ React.createElement("ul", {
    className: "pl-8"
  }, mealTypes.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.id,
    className: "text-xl mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
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
var assets_manifest_default = { "version": "33666ece", "entry": { "module": "/build/entry.client-GRGJU5FK.js", "imports": ["/build/_shared/chunk-BHEGAI2Y.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HWLZF4FK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/auth0/callback": { "id": "routes/auth/auth0/callback", "parentId": "root", "path": "auth/auth0/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/auth0/callback-7Q6TAE6F.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DEX6UMS3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-WYUD3X6A.js", "imports": ["/build/_shared/chunk-HEFDI6IB.js", "/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-M6UZ7BQJ.js", "imports": ["/build/_shared/chunk-EGD2YKQJ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meal-type/$mealTypeId": { "id": "routes/meal-type/$mealTypeId", "parentId": "root", "path": "meal-type/:mealTypeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/meal-type/$mealTypeId-PDW2MEES.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-7UR4JLND.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recently-viewed": { "id": "routes/recently-viewed", "parentId": "root", "path": "recently-viewed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recently-viewed-YEY3G7WM.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/recipe/$recipeId": { "id": "routes/recipe/$recipeId", "parentId": "root", "path": "recipe/:recipeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/recipe/$recipeId-HA6JURTK.js", "imports": ["/build/_shared/chunk-BPTNVYHO.js", "/build/_shared/chunk-HEFDI6IB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-33666ECE.js" };

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
  "routes/recipe/$recipeId": {
    id: "routes/recipe/$recipeId",
    parentId: "root",
    path: "recipe/:recipeId",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL21vZGVscy91c2VyLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Nvb2tpZXMuc2VydmVyLnRzIiwgIi4uL2FwcC9jb25zdGFudHMvaW5kZXguc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZC50c3giLCAiLi4vYXBwL21vZGVscy9tZWFsVHlwZS50cyIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkLnRzeCIsICIuLi9hcHAvbW9kZWxzL3JlY2lwZS5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcmVjZW50bHktdmlld2VkLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9wcm9maWxlLnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3JlY2lwZS8kcmVjaXBlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9sdWNhc2hvbWVyL2hvbWVyLWZhbWlseS1jb29rYm9vay9hcHAvcm91dGVzL3JlY2VudGx5LXZpZXdlZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvcHJvZmlsZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvbHVjYXNob21lci9ob21lci1mYW1pbHktY29va2Jvb2svYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2x1Y2FzaG9tZXIvaG9tZXItZmFtaWx5LWNvb2tib29rL2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9tZWFsLXR5cGUvJG1lYWxUeXBlSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWFsLXR5cGUvOm1lYWxUeXBlSWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2tcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC9hdXRoMC9jYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVjaXBlLyRyZWNpcGVJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNpcGUvOnJlY2lwZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9yZWNlbnRseS12aWV3ZWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlY2VudGx5LXZpZXdlZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWNlbnRseS12aWV3ZWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3Byb2ZpbGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2ZpbGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvZmlsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICB9IGFzIExvYWRlckRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiSG9tZXIgRmFtaWx5IENvb2tib29rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkhvbWVyIEZhbWlseSBDb29rYm9va1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAge2RhdGEudXNlciA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICA8cD57YFdlbGNvbWUgJHtkYXRhLnVzZXI/LmZpcnN0TmFtZSB8fCBcIlwifWB9PC9wPlxuICAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvbG9naW5cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9tb2RlbHMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBhdXRoUHJvZmlsZSA9IGF3YWl0IGF1dGguaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBhdXRoUHJvZmlsZT8udXNlcklkO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHJlY2lwZXM6IHRydWUsXG4gICAgICBmYXZvcml0ZVJlY2lwZXM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHJlY2lwZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZWNpcGVSZWFkczoge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgcmVjaXBlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudGx5Vmlld2VkKHVzZXJJZDogVXNlcltcImlkXCJdKSB7XG4gIHJldHVybiBkYi5yZWNpcGVSZWFkLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkLFxuICAgIH0sXG4gICAgb3JkZXJCeTogW1xuICAgICAge1xuICAgICAgICB1cGRhdGVkQXQ6IFwiZGVzY1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHJlY2lwZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUlkKHVzZXJJZDogVXNlcltcImlkXCJdKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHsgQXV0aDBQcm9maWxlLCBBdXRoMFN0cmF0ZWd5IH0gZnJvbSBcInJlbWl4LWF1dGgtYXV0aDBcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBzZXNzaW9uU3RvcmFnZSxcbiAgZ2V0U2Vzc2lvbixcbiAgZGVzdHJveVNlc3Npb24sXG59IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQge1xuICBBVVRIMF9DQUxMQkFDS19VUkwsXG4gIEFVVEgwX0NMSUVOVF9JRCxcbiAgQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgQVVUSDBfRE9NQUlOLFxufSBmcm9tIFwifi9jb25zdGFudHMvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIEFwcEF1dGggPSBBdXRoMFByb2ZpbGUgJiB7IHVzZXJJZDogVXNlcltcImlkXCJdIH07XG5leHBvcnQgY29uc3QgYXV0aCA9IG5ldyBBdXRoZW50aWNhdG9yPEFwcEF1dGg+KHNlc3Npb25TdG9yYWdlKTtcblxuY29uc3QgYXV0aDBTdHJhdGVneSA9IG5ldyBBdXRoMFN0cmF0ZWd5KFxuICB7XG4gICAgY2FsbGJhY2tVUkw6IEFVVEgwX0NBTExCQUNLX1VSTCxcbiAgICBjbGllbnRJRDogQVVUSDBfQ0xJRU5UX0lELFxuICAgIGNsaWVudFNlY3JldDogQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICBkb21haW46IEFVVEgwX0RPTUFJTixcbiAgfSxcbiAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSBwcm9maWxlLmVtYWlsc1swXS52YWx1ZTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvZmlsZSxcbiAgICAgICAgdXNlcklkOiBuZXdVc2VyLmlkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByb2ZpbGUsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfTtcbiAgfVxuKTtcblxuYXV0aC51c2UoYXV0aDBTdHJhdGVneSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXR1cm5Ubzogc3RyaW5nID0gbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWVcbikge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZXR1cm5Ub1wiLCByZXR1cm5Ub11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llLCBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgU0VDUkVUUyB9IGZyb20gXCJ+L2NvbnN0YW50cy9pbmRleC5zZXJ2ZXJcIjtcblxuaWYgKCFTRUNSRVRTKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlNFQ1JFVFMgbXVzdCBiZSBzZXRcIik7XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfcmVtaXhfc2Vzc2lvblwiLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgc2VjcmV0czogW1NFQ1JFVFNdLFxuICAgIC8vIG5vcm1hbGx5IHlvdSB3YW50IHRoaXMgdG8gYmUgYHNlY3VyZTogdHJ1ZWBcbiAgICAvLyBidXQgdGhhdCBkb2Vzbid0IHdvcmsgb24gbG9jYWxob3N0IGZvciBTYWZhcmlcbiAgICAvLyBodHRwczovL3dlYi5kZXYvd2hlbi10by11c2UtbG9jYWwtaHR0cHMvXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IHNlc3Npb25TdG9yYWdlO1xuXG5leHBvcnQgY29uc3QgcmV0dXJuVG9Db29raWUgPSBjcmVhdGVDb29raWUoXCJyZXR1cm4tdG9cIiwge1xuICBwYXRoOiBcIi9cIixcbiAgaHR0cE9ubHk6IHRydWUsXG4gIHNhbWVTaXRlOiBcImxheFwiLFxuICBtYXhBZ2U6IDYwLCAvLyAxIG1pbnV0ZSBiZWNhdXNlIGl0IG1ha2VzIG5vIHNlbnNlIHRvIGtlZXAgaXQgZm9yIGEgbG9uZyB0aW1lXG4gIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufSk7XG4iLCAiZXhwb3J0IGNvbnN0IEFVVEgwX1JFVFVSTl9UT19VUkwgPSBwcm9jZXNzLmVudi5BVVRIMF9SRVRVUk5fVE9fVVJMITtcbmV4cG9ydCBjb25zdCBBVVRIMF9DQUxMQkFDS19VUkwgPSBwcm9jZXNzLmVudi5BVVRIMF9DQUxMQkFDS19VUkwhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0NMSUVOVF9JRCA9IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCE7XG5leHBvcnQgY29uc3QgQVVUSDBfQ0xJRU5UX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQhO1xuZXhwb3J0IGNvbnN0IEFVVEgwX0RPTUFJTiA9IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTiE7XG5leHBvcnQgY29uc3QgQVVUSDBfTE9HT1VUX1VSTCA9IHByb2Nlc3MuZW52LkFVVEgwX0xPR09VVF9VUkwhO1xuZXhwb3J0IGNvbnN0IFNFQ1JFVFMgPSBwcm9jZXNzLmVudi5TRUNSRVRTITtcbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIGRiOiBQcmlzbWFDbGllbnQ7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5kYikge1xuICAgIGdsb2JhbC5kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5kYjtcbiAgZGIuJGNvbm5lY3QoKTtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgdHlwZSB7IE1lYWxUeXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0TWVhbFR5cGVXaXRoUmVjaXBlcywgTWVhbFR5cGVXaXRoUmVjaXBlcyB9IGZyb20gXCJ+L21vZGVscy9tZWFsVHlwZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG1lYWxUeXBlV2l0aFJlY2lwZXMgPSBhd2FpdCBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzKFxuICAgIE51bWJlcihwYXJhbXMubWVhbFR5cGVJZClcbiAgKTtcblxuICBpZiAoIW1lYWxUeXBlV2l0aFJlY2lwZXMpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJXaGF0IGEgam9rZSEgTm90IGZvdW5kLlwiLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtZWFsVHlwZVdpdGhSZWNpcGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVhbFR5cGUoKSB7XG4gIGNvbnN0IG1lYWxUeXBlID0gdXNlTG9hZGVyRGF0YTxNZWFsVHlwZVdpdGhSZWNpcGVzPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPnttZWFsVHlwZS5uYW1lfTwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGwtOFwiPlxuICAgICAgICB7bWVhbFR5cGUucmVjaXBlcz8ubWFwKChyZWNpcGUpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtyZWNpcGUuaWR9IGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2g9XCJpbnRlbnRcIiB0bz17YC9yZWNpcGUvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIHtyZWNpcGUudGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE1lYWxUeXBlLCBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vbW9kZWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhbFR5cGVzKCkge1xuICByZXR1cm4gZGIubWVhbFR5cGUuZmluZE1hbnkoe30pO1xufVxuXG5leHBvcnQgdHlwZSBNZWFsVHlwZVdpdGhSZWNpcGVzID0gTWVhbFR5cGUgJiB7IHJlY2lwZXM6IFJlY2lwZVtdIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFsVHlwZVdpdGhSZWNpcGVzKGlkOiBNZWFsVHlwZVtcImlkXCJdKSB7XG4gIHJldHVybiBkYi5tZWFsVHlwZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGluY2x1ZGU6IHsgcmVjaXBlczogdHJ1ZSB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldHVyblRvQ29va2llIH0gZnJvbSBcIn4vdXRpbHMvY29va2llcy5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIC8vIGdldCB0aGUgcmV0dXJuVG8gZnJvbSB0aGUgY29va2llXG4gIGxldCByZXR1cm5UbyA9XG4gICAgKGF3YWl0IHJldHVyblRvQ29va2llLnBhcnNlKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpKSA/PyBcIi9wcm9maWxlXCI7XG5cbiAgLy8gY2FsbCBhdXRoZW50aWNhdGUgdG8gY29tcGxldGUgdGhlIGxvZ2luIGFuZCBzZXQgcmV0dXJuVG8gYXMgdGhlIHN1Y2Nlc3NSZWRpcmVjdFxuICByZXR1cm4gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXCJhdXRoMFwiLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiByZXR1cm5UbyxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBmYXZvcml0ZVJlY2lwZSxcbiAgdW5mYXZvcml0ZVJlY2lwZSxcbiAgZ2V0UmVjaXBlLFxuICBHZXRSZWNpcGVSZXNwb25zZSxcbiAgcmVjb3JkUmVjaXBlVmlldyxcbn0gZnJvbSBcIn4vbW9kZWxzL3JlY2lwZS5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgcmVjaXBlRGF0YTogR2V0UmVjaXBlUmVzcG9uc2U7XG4gIHVzZXJJZDogVXNlcltcImlkXCJdIHwgbnVsbDtcbn07XG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgcmVjaXBlSWQgPSBOdW1iZXIocGFyYW1zLnJlY2lwZUlkKTtcbiAgY29uc3QgcmVjaXBlRGF0YSA9IGF3YWl0IGdldFJlY2lwZShyZWNpcGVJZCk7XG5cbiAgaWYgKCFyZWNpcGVEYXRhKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiV2hhdCBhIGpva2UhIE5vdCBmb3VuZC5cIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICBpZiAodXNlcklkKSB7XG4gICAgYXdhaXQgcmVjb3JkUmVjaXBlVmlldyh7XG4gICAgICB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXNlcklkLFxuICAgIHJlY2lwZURhdGEsXG4gIH07XG59O1xuXG5jb25zdCBhY3Rpb25JZHMgPSB7XG4gIGZhdm9yaXRlOiBcImZhdm9yaXRlXCIsXG4gIHVuZmF2b3JpdGU6IFwidW5mYXZvcml0ZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCByZWNpcGVJZCA9IE51bWJlcihwYXJhbXMucmVjaXBlSWQpO1xuXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IGFjdGlvbklkID0gZm9ybS5nZXQoXCJhY3Rpb25JZFwiKTtcblxuICBpZiAoYWN0aW9uSWQgPT09IGFjdGlvbklkcy5mYXZvcml0ZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmF2b3JpdGVSZWNpcGUoe1xuICAgICAgdXNlcklkLFxuICAgICAgcmVjaXBlSWQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gIH1cblxuICBpZiAoYWN0aW9uSWQgPT09IGFjdGlvbklkcy51bmZhdm9yaXRlKSB7XG4gICAgYXdhaXQgdW5mYXZvcml0ZVJlY2lwZSh7XG4gICAgICB1c2VySWQsXG4gICAgICByZWNpcGVJZCxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZSgpIHtcbiAgY29uc3QgeyByZWNpcGVEYXRhLCB1c2VySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBpc1JlY2lwZUZhdm9yaXRlZCA9IHJlY2lwZURhdGEuZmF2b3JpdGVkVXNlcnMuc29tZShcbiAgICAoaXRlbSkgPT4gaXRlbS51c2VySWQgPT09IHVzZXJJZFxuICApO1xuICBjb25zdCBmYXZvcml0ZUJ1dHRvblRleHQgPSBpc1JlY2lwZUZhdm9yaXRlZFxuICAgID8gXCJSRU1PVkUgRlJPTSBGQVZPUklURVNcIlxuICAgIDogXCJGQVZPUklURSBUSElTIFJFQ0lQRVwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPntyZWNpcGVEYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cImFjdGlvbklkXCJcbiAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgaXNSZWNpcGVGYXZvcml0ZWQgPyBhY3Rpb25JZHMudW5mYXZvcml0ZSA6IGFjdGlvbklkcy5mYXZvcml0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+e2Zhdm9yaXRlQnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGwtOFwiPlxuICAgICAgICB7cmVjaXBlRGF0YS5pbmdyZWRpZW50cz8ubWFwKChpbmdyZWRpZW50KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5ncmVkaWVudC5pZH0gY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICA8cD57YCR7aW5ncmVkaWVudC5xdWFudGl0eX0gJHtpbmdyZWRpZW50LmRlc2NyaXB0aW9ufWB9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBJbmdyZWRpZW50LFxuICBNZWFsVHlwZSxcbiAgTm90ZSxcbiAgUmVjaXBlLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L21vZGVscy9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgR2V0UmVjaXBlUmVzcG9uc2UgPSB7XG4gIHJlY2lwZTogUmVjaXBlO1xuICBtZWFsVHlwZXM6IE1lYWxUeXBlW107XG4gIGluZ3JlZGllbnRzOiBJbmdyZWRpZW50W107XG4gIG5vdGVzOiBOb3RlW107XG4gIHVzZXI6IFVzZXI7XG4gIGZhdm9yaXRlZFVzZXJzOiBVc2Vyc0Zhdm9yaXRlUmVjaXBlc1tdO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2lwZShyZWNpcGVJZDogUmVjaXBlW1wiaWRcIl0pIHtcbiAgcmV0dXJuIGRiLnJlY2lwZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogcmVjaXBlSWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBtZWFsVHlwZXM6IHRydWUsXG4gICAgICBpbmdyZWRpZW50czogdHJ1ZSxcbiAgICAgIG5vdGVzOiB0cnVlLFxuICAgICAgYXV0aG9yOiB0cnVlLFxuICAgICAgZmF2b3JpdGVkVXNlcnM6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmYXZvcml0ZVJlY2lwZSh7XG4gIHJlY2lwZUlkLFxuICB1c2VySWQsXG59OiB7XG4gIHJlY2lwZUlkOiBSZWNpcGVbXCJpZFwiXTtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBkYi51c2Vyc0Zhdm9yaXRlUmVjaXBlcy5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVuZmF2b3JpdGVSZWNpcGUoe1xuICByZWNpcGVJZCxcbiAgdXNlcklkLFxufToge1xuICByZWNpcGVJZDogUmVjaXBlW1wiaWRcIl07XG4gIHVzZXJJZDogVXNlcltcImlkXCJdO1xufSkge1xuICByZXR1cm4gZGIudXNlcnNGYXZvcml0ZVJlY2lwZXMuZGVsZXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVjaXBlSWQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBUT0RPIC0tIG1heWJlIGltcGxlbWVudCBzb21lIHNvcnQgb2YgY2xlYW51cCBmb3IgJ2V4cGlyZWQnIHJlY29yZHNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNvcmRSZWNpcGVWaWV3KHtcbiAgcmVjaXBlSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcmVjaXBlSWQ6IFJlY2lwZVtcImlkXCJdO1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIGRiLnJlY2lwZVJlYWQudXBzZXJ0KHtcbiAgICB3aGVyZToge1xuICAgICAgcmVjaXBlSWRfdXNlcklkOiB7XG4gICAgICAgIHJlY2lwZUlkLFxuICAgICAgICB1c2VySWQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdXBkYXRlOiB7XG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgICBjcmVhdGU6IHtcbiAgICAgIHJlY2lwZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgUmVjaXBlLFxuICBSZWNpcGVSZWFkLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFJlY2VudGx5Vmlld2VkIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IEFycmF5PFJlY2lwZVJlYWQgJiBSZWNpcGU+O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UmVjZW50bHlWaWV3ZWQodXNlcklkKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5yZWNlbnRseSB2aWV3ZWQ8L2gyPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgUmVjaXBlLFxuICBSZWNpcGVSZWFkLFxuICBVc2VyLFxuICBVc2Vyc0Zhdm9yaXRlUmVjaXBlcyxcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJQcm9maWxlIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgdXNlcjogVXNlcjtcbiAgcmVjaXBlczogUmVjaXBlW107XG4gIGZhdm9yaXRlUmVjaXBlczogVXNlcnNGYXZvcml0ZVJlY2lwZXNbXTtcbiAgcmVjaXBlUmVhZHM6IFJlY2lwZVJlYWRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRVc2VyUHJvZmlsZShyZXF1ZXN0KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IHsgZmF2b3JpdGVSZWNpcGVzLCByZWNpcGVSZWFkcywgcmVjaXBlcywgLi4udXNlciB9ID1cbiAgICB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPk15IFVzZXIgSW5mbzwvaDI+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkodXNlciwgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMj5NeSBBdXRob3JlZCBSZWNpcGVzPC9oMj5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShyZWNpcGVzLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgzPmZhdm9yaXRlczwvaDM+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVSZWNpcGVzLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgzPnJlY2VudGx5IHZpZXdlZDwvaDM+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkocmVjaXBlUmVhZHMsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBkZXN0cm95U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5pbXBvcnQge1xuICBBVVRIMF9DTElFTlRfSUQsXG4gIEFVVEgwX0xPR09VVF9VUkwsXG4gIEFVVEgwX1JFVFVSTl9UT19VUkwsXG59IGZyb20gXCJ+L2NvbnN0YW50cy9pbmRleC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG4gIGNvbnN0IGxvZ291dFVSTCA9IG5ldyBVUkwoQVVUSDBfTE9HT1VUX1VSTCEpO1xuXG4gIGxvZ291dFVSTC5zZWFyY2hQYXJhbXMuc2V0KFwiY2xpZW50X2lkXCIsIEFVVEgwX0NMSUVOVF9JRCEpO1xuICBsb2dvdXRVUkwuc2VhcmNoUGFyYW1zLnNldChcInJldHVyblRvXCIsIEFVVEgwX1JFVFVSTl9UT19VUkwhKTtcblxuICByZXR1cm4gcmVkaXJlY3QobG9nb3V0VVJMLnRvU3RyaW5nKCksIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IE1lYWxUeXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBqc29uLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0TWVhbFR5cGVzIH0gZnJvbSBcIn4vbW9kZWxzL21lYWxUeXBlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFsVHlwZXMgPSBhd2FpdCBnZXRNZWFsVHlwZXMoKTtcbiAgcmV0dXJuIGpzb248TWVhbFR5cGVbXT4obWVhbFR5cGVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBtZWFsVHlwZXMgPSB1c2VMb2FkZXJEYXRhPE1lYWxUeXBlW10+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItOFwiPk1lYWwgVHlwZXM8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtOFwiPlxuICAgICAgICAgIHttZWFsVHlwZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2g9XCJpbnRlbnRcIiB0bz17YC9tZWFsLXR5cGUvJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyByZXR1cm5Ub0Nvb2tpZSB9IGZyb20gXCJ+L3V0aWxzL2Nvb2tpZXMuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4gbG9naW4ocmVxdWVzdCk7XG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ2luKHJlcXVlc3QpO1xuXG5hc3luYyBmdW5jdGlvbiBsb2dpbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgbGV0IHJldHVyblRvID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJyZXR1cm5Ub1wiKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFwiYXV0aDBcIiwgcmVxdWVzdCwge1xuICAgICAgc3VjY2Vzc1JlZGlyZWN0OiByZXR1cm5UbyA/PyBcIi9wcm9maWxlXCIsXG4gICAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL1wiLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICghcmV0dXJuVG8pIHRocm93IGVycm9yO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlICYmIGlzUmVkaXJlY3QoZXJyb3IpKSB7XG4gICAgICBlcnJvci5oZWFkZXJzLmFwcGVuZChcbiAgICAgICAgXCJTZXQtQ29va2llXCIsXG4gICAgICAgIGF3YWl0IHJldHVyblRvQ29va2llLnNlcmlhbGl6ZShyZXR1cm5UbylcbiAgICAgICk7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3QocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPCAzMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDQwMCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5oYXMoXCJMb2NhdGlvblwiKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOiczMzY2NmVjZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtR1JHSlU1RksuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJIRUdBSTJZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUhXTFpGNEZLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvYXV0aDAvY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9hdXRoMC9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2F1dGgwL2NhbGxiYWNrLTdRNlRBRTZGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVHRDJZS1FKLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LURFWDZVTVMzLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1XWVVEM1g2QS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSEVGREk2SUIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FR0QyWUtRSi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1NNlVaN0JRSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdEMllLUUouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkJzp7J2lkJzoncm91dGVzL21lYWwtdHlwZS8kbWVhbFR5cGVJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWFsLXR5cGUvOm1lYWxUeXBlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhbC10eXBlLyRtZWFsVHlwZUlkLVBEVzJNRUVTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9maWxlJzp7J2lkJzoncm91dGVzL3Byb2ZpbGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvZmlsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcm9maWxlLTdVUjRKTE5ELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlY2VudGx5LXZpZXdlZCc6eydpZCc6J3JvdXRlcy9yZWNlbnRseS12aWV3ZWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVjZW50bHktdmlld2VkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlY2VudGx5LXZpZXdlZC1ZRVkzRzdXTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlBUTlZZSE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRUZESTZJQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkJzp7J2lkJzoncm91dGVzL3JlY2lwZS8kcmVjaXBlSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVjaXBlLzpyZWNpcGVJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWNpcGUvJHJlY2lwZUlkLUhBNkpVUlRLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CUFROVllITy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhFRkRJNklCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTMzNjY2RUNFLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFl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
