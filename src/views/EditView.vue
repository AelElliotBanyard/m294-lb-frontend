<template>
  <div v-if="!loading" class="flex justify-center flex-col items-center">
    <InputComponent label="Title" v-model="task.title" />
    <InputComponent
      label="Completed"
      v-model="task.completed"
      input-type="checkbox"
    />
    <ButtonComponent
      label="Speichern"
      :onClick="save"
      class="border-gray-300 border-2 px-4 py-2 rounded-md font-bold text-gray-100 bg-green-600"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default defineComponent({
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
  components: {
    InputComponent,
    ButtonComponent,
  },
  methods: {
    save() {
      const params = {
        method: "PUT",
        body: JSON.stringify({
          id: this.id,
          completed: this.task.completed,
          title: this.task.title,
        }),
      };
      fetch("http://zli.banyard.tech/task/", params)
        .then((response) => response.json())
        .then((data) => {
          if (data === this.task) {
            alert("Erfolgreich gespeichert");
            this.$router.back();
          } else {
            alert("Es gab einen Fehler beim Speichern");
            this.$router.back();
          }
        })
        .catch((error) => {
          alert("Es gab einen Fehler: " + error);
          this.$router.back();
        });
    },
  },
});
</script>

<style scoped></style>
