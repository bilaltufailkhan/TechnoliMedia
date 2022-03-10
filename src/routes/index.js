import AuthView from "../views/auth/AuthView";
import BlogView from "../views/BlogView";
import CareersView from "../views/CareersView";
import MainView from "../views/MainView";
import ServicesView from "../views/ServicesView";
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
  {
    path: "/services",
    component: ServicesView,
    layout: "main",
  },
  {
    path: "/careers",
    component: CareersView,
    layout: "main",
  },
];
export default routes;
