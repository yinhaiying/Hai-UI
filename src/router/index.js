import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Docs from "../views/docs/index.vue";
import SwitchDemo from "../example/SwitchDemo.vue";
import IconDemo from "../example/IconDemo.vue";
import ButtonDemo from "../example/ButtonDemo.vue";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/docs",
      component: Docs,
      children: [
        { path: "switch", component: SwitchDemo },
        { path: "icon", component: IconDemo },
        { path: "button", component: ButtonDemo },
      ],
    },
  ],
});

export default router;
