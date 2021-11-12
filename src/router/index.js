import Vue from "vue";
import Router from "vue-router";
import store from "../store";

import Dashboard from "../pages/Dashboard.vue";
import Social from "../pages/Social.vue";
import Media from "../pages/Media.vue";
import Snackbar from "../pages/Snackbar.vue";
import Chart from "../pages/Chart.vue";
import Mailbox from "../pages/Mailbox.vue";
import Calendar from "../pages/Calendar.vue";
import Login from "../pages/core/Login.vue";
import Error from "../pages/core/Error.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      breadcrumb: [{ name: "dashboard" }]
    }
  },
  {
    path: "/mailbox",
    name: "Mailbox",
    component: Mailbox,
    meta: {
      breadcrumb: [
        { name: "dashboard", href: "Dashboard" },
        { name: "mailbox" }
      ]
    }
  },
  {
    path: "/snackbar",
    name: "Snackbar",
    component: Snackbar,
    meta: {
      breadcrumb: [
        { name: "dashboard", href: "Dashboard" },
        { name: "snackbar" }
      ]
    }
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    meta: {
      breadcrumb: [
        { name: "dashboard", href: "Dashboard" },
        { name: "calendar" }
      ]
    }
  },
  {
    path: "/social",
    name: "Social",
    component: Social,
    meta: {
      breadcrumb: [{ name: "dashboard", href: "Dashboard" }, { name: "social" }]
    }
  },
  {
    path: "/media",
    name: "Media",
    component: Media,
    meta: {
      breadcrumb: [{ name: "dashboard", href: "Dashboard" }, { name: "media" }]
    }
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
    meta: {
      breadcrumb: [{ name: "dashboard", href: "Dashboard" }, { name: "charts" }]
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
    meta: {
      allowAnonymous: true
    }
  }
];

const router = new Router({
  routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.allowAnonymous)) {
    next();
  } else {
    console.log(store.state.loggedIn);
    let loggedIn = store.state.loggedIn;
    if (loggedIn) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
