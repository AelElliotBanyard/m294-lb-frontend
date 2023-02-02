<template>
  <div v-if="!loading">
    <InputComponent :label="task.title" v-model="task.title" />
    <InputComponent
      label="Completed"
      v-model="task.completed"
      input-type="checkbox"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "@/components/InputComponent.vue";

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
  },
});
</script>

<style scoped></style>
