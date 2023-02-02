import TasksView from "../views/TasksView.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: App,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
