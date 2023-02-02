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
  setup() {
    return {};
  },
  created() {
    fetch("http://zli.banyard.tech/tasks")
      .then((response) => response.json())
      .then((data) => (this.tasks = data));
  },
  components: { TasksComponent },
});
</script>

<style scoped></style>
