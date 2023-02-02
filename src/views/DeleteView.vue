<template>
    <div>
        <p>Are you sure you want to delete this Task?</p>
        <div
    class="w-1/3 h-8 bg-sky-700 rounded relative flex justify-center items-center shadow-md"
  >
    <p class="text-lg font-bold text-gray-100">{{ task.title }}</p>
    <svg
      viewBox="0 0 100 100"
      width="64"
      height="64"
      class="absolute top-0 left-0 h-8 w-8"
    >
      <g>
        <rect
          v-if="task.completed"
          x="0"
          y="0"
          height="100"
          width="100"
          fill="green"
        />
        <rect
          v-else
          rx="14"
          x="0"
          y="0"
          height="95"
          width="95"
          fill="red"
          stroke="red"
          strok-width="5"
        />
      </g>
    </svg>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "DeleteTask",
    data() {
        
    return {
      id: this.$route.params.id,
      loading: true,
      task: {
        id: 0,
        completed: false,
        title: "",
      },
    };
  },
  created() {
    fetch("http://zli.banyard.tech/task/" + this.id)
      .then((response) => response.json())
      .then((data) => {
        this.task = data;
        this.loading = false;
      });
  },

});

</script>