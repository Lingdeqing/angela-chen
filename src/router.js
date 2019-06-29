import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import index from "./views/index.vue";
import form from "./views/form.vue";
import TableHover from "./views/TableHover.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index",
      component: index
    },
    {
      path: "/table-hover",
      component: TableHover
    },
    {
      path: "/form",
      component: form
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
