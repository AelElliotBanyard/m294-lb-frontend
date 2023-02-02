<template>
  <div>
    <p>{{ label }}</p>
    <input
      :type="inputType"
      :value="modelValue"
      @input="(event: Event | any) => $emit('ubdate:ModelValue', event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String || Number],
      required: true,
    },
    inputType: {
      type: String,
      required: false,
      default: "Text",
    },
  },
});
</script>
