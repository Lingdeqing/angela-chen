import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import index from "./views/index.vue";
import form from "./views/form.vue";
import TableHover from "./views/TableHover.vue";
import pagination from "./views/pagination";
import observable1 from "./views/observable基本用法";
import observableTable from "./views/tab切换表格实现-observable";
import $setTable from "./views/tab切换表格实现-$set";
import $forceUpdateTable from "./views/tab切换表格实现-$forceUpdate";
import hardTable from "./views/tab切换表格实现-捉急实现";
import select from "./views/select";

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
      path: "/pagination",
      component: pagination
    },
    {
      path: "/observable基本用法",
      component: observable1
    },
    {
      path: "/tab切换表格实现-observable",
      component: observableTable
    },
    {
      path: "/tab切换表格实现-$set",
      component: $setTable
    },
    {
      path: "/tab切换表格实现-$forceUpdate",
      component: $forceUpdateTable
    },
    {
      path: "/tab切换表格实现-捉急实现",
      component: hardTable
    },
    {
      path: "/form",
      component: form
    },
    {
      path: "/select",
      component: select
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
