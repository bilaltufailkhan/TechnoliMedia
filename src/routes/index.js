import AuthView from "../views/auth/AuthView";
import BlogView from "../views/BlogView";
import MainView from "../views/MainView";
import SinglePostView from "../views/SinglePostView";

let routes = [
  {
    path: "/auth",
    component: AuthView,
    layout: "auth",
  },
  {
    path: "/",
    component: MainView,
    layout: "main",
  },
  {
    path: "/blog",
    component: BlogView,
    layout: "main",
  },
  {
    path: "/singlepost",
    component: SinglePostView,
    layout: "main",
  },
];
export default routes;
