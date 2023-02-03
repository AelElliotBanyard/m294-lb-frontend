<template>
    <div class="flex flex-col justify-center items-center">
        <p class=" text-2xl font-bold text-gray-100 my-4">Are you sure you want to delete this Task?</p>
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
    <div class="flex flex-row justify-center gap-3 items-center my-4">
        <ButtonComponent label="Cancel" :onClick="() => $router.back()" class="border-gray-300 border-2 px-4 py-2 rounded-md font-bold text-gray-100 bg-red-600"/>
        <ButtonComponent label="Yes" :onClick="deleteTask" class="border-gray-300 border-2 px-4 py-2 rounded-md font-bold text-gray-100 bg-green-600"/>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

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
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$jwtData.token,
        },
      };
      fetch("http://zli.banyard.tech/auth/jwt/task/" + this.id, params)
      .then((response) => response.json())
      .then((data) => {
        this.task = data;
        this.loading = false;
      });
  },
  components: {
    ButtonComponent
  },
  methods: {
    deleteTask() {
      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$jwtData.token,
        },
      };
      fetch("http://zli.banyard.tech/auth/jwt/task/" + this.task.id, params)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 401) {
            alert("Please sign in again")
            // TODO sign out
            this.$router.back()
          } else if (data.statusCode === 400) {
            alert("Error with Program")
            this.$router.back()
          } else {
            alert("Success")
            this.$router.back()
          }
        })
        .catch((error) => {
          alert("Es gab einen Fehler: " + error);
          this.$router.back();
        });
    }
  }

});

</script>