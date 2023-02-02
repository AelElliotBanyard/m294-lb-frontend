<template>
  <div class="border border-gray-500 m-4 relative w-min h-min">
    <p class="absolute bottom-7 left-2 bg-white px-2">{{ label }}</p>
    <input
      :type="type"
      :v-model="field"
      class="w-64 h-10 focus-visible:outline-none ml-2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FieldComponent",
  props: {
    field: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
