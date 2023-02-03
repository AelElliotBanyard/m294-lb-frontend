import TasksView from "../views/TasksView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/HomeView.vue";
import EditView from "../views/EditView.vue";
import DeleteView from "../views/DeleteView.vue";
import NewTaskView from "../views/NewTaskView.vue";

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
    component: DeleteView,
  },
  {
    path: "/taskEdit/:id",
    name: "editTask",
    component: EditView,
  },
  {
    path: "/taskCreate",
    name: "createTask",
    component: NewTaskView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
