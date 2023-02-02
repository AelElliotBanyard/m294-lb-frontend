<template>
  <div v-if="!loading"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
});
</script>

<style scoped></style>
