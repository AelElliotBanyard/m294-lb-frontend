<template>
     <div
    class="flex items-center flex-col relative overflow-hidden max-w-full min-w-full min-h-screen"
  >
    <TaskComponent :task="task" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskComponent from "@/components/TaskComponent.vue";

export default defineComponent({
  data() {
    return {
      task: 
        {
          id: 0,
          completed: false,
          title: "",
        },
      id: this.$route.params.id,
    };
  },
  components: { TaskComponent },
  mounted() {
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$jwtData.token,
        },
      };
      fetch("http://zli.banyard.tech/auth/jwt/task/" + this.id, params)
        .then((response) => response.json())
        .then((data) => (this.task = data));
  },
});