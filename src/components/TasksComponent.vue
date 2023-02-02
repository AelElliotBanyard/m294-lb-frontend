<template>
  <div
    v-for="task in tasks"
    :key="task.id"
    class="w-1/3 h-8 border-2 border-gray-500 rounded relative flex justify-center items-center"
  >
    <p class="text-lg font-bold">{{ task.title }}</p>
    <svg
      viewBox="0 0 100 100"
      width="20"
      height="20"
      class="absolute top-0 right-0"
    >
      <circle v-if="task.completed" cx="50" cy="50" r="40" fill="green" />
      <circle v-else cx="50" cy="50" r="45" fill="red" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Task } from "../../types/index";

export default defineComponent({
  name: "TasksComponent",
  props: {
    tasks: {
      type: Array as PropType<Array<Task>>,
      required: true,
    },
  },
});
</script>
