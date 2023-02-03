<template>
  <div
    class="flex items-center flex-col relative overflow-hidden max-w-full min-w-full min-h-screen"
  >
    <TasksComponent :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import TasksComponent from "@/components/TasksComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [
        {
          id: 0,
          completed: false,
          title: "",
        },
      ],
    };
  },
  components: { TasksComponent },
  mounted() {
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$jwtData.token,
        },
      };
      fetch("http://zli.banyard.tech/auth/jwt/tasks", params)
        .then((response) => response.json())
        .then((data) => (this.tasks = data));
  },
});
</script>

<style scoped></style>
