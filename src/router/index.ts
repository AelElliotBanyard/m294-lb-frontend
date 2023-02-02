import TasksView from "@/views/NoAuth/TasksView.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LoginView,
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
