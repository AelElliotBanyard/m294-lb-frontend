<template>
  <div class="flex justify-center items-center flex-col">
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
