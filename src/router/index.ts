import TasksView from "../views/TasksView.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/taskDelete/:id",
    name: "deleteTask",
    component: Home,
  },
  {
    path: "/taskEdit/:id",
    name: "editTask",
    component: Home,
  },
  {
    path: "/taskCreate",
    name: "createTask",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
