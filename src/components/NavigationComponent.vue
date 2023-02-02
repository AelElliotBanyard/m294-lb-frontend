<template>
  <nav
    class="h-12 flex gap-4 justify-center items-center bg-green-800 mb-4 shadow-md"
  >
    <div class="w-20 h-12 flex justify-center items-center">
      <router-link
        to="/"
        class="text-lg hover:text-xl transition-all text-gray-100"
        >Home</router-link
      >
    </div>

    <div class="w-20 h-12 flex justify-center items-center">
      <router-link
        to="/tasks"
        class="text-lg hover:text-xl transition-all text-gray-100"
        >Tasks</router-link
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped></style>
