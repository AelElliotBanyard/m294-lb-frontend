<template>
    <div>
        <div id="inputs" class="flex justify-center flex-col items-center">
    <InputComponent label="Title" v-model="task.title" />
    <InputComponent
      label="Completed"
      v-model="task.completed"
      input-type="checkbox"
    />

        </div>
        <div id="buttons" class="flex flex-row justify-center gap-3 items-center my-4">
        <ButtonComponent label="Cancel" :onClick="() => $router.back()" class="border-gray-300 border-2 px-4 py-2 rounded-md font-bold text-gray-100 bg-red-600"/>
        <ButtonComponent label="Yes" :onClick="createTask" class="border-gray-300 border-2 px-4 py-2 rounded-md font-bold text-gray-100 bg-green-600"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from '@/components/ButtonComponent.vue';
import { Task } from 'types';

export default defineComponent({
    name: "NewTask",
    data() {
    return {
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
      fetch("http://zli.banyard.tech/auth/jwt/tasks", params)
        .then((response) => response.json())
        .then((data) => {
     data.reduce((accumulator: Task, currentValue: Task) => {
        if (currentValue.id > accumulator.id ){
            this.task.id = currentValue.id;
        }
     })
    })
  },
  components: {
    InputComponent,
    ButtonComponent
  },
  methods: {
    createTask() {
      const params = {
        
        method: 'POST',
            body: JSON.stringify(this.task),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$jwtData.token,
        },
      };
      fetch("http://zli.banyard.tech/auth/jwt/tasks", params)
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
            if (data === this.task){
                alert("Success")
            this.$router.back()
            } else {
                alert("Error with Program")
            this.$router.back()
            }
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