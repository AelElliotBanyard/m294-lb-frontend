<template>
  <div>
    <p>{{ label }}</p>
    <input :type="type" :v-model="field" />
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
