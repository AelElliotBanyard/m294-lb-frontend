<template>
  <div class=" w-64 h-12 border-2 border-gray-300 relative my-4">
    <p class=" absolute -top-4 text-base left-2 px-1 bg-sky-600 text-gray-300 font-bold">{{ label }}</p>
    <input
      class="mr-0 h-full py-4 bg-sky-600 ml-4 text-gray-100 focus-visible:outline-none"
      :type="inputType"
      :value="modelValue"
      :name="label"
      @input="updateInput"
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
      type: [String, Number, Boolean],
      required: true,
    },
    inputType: {
      type: String,
      required: false,
      default: "text",
    },
  },
  methods: {
    updateInput(event: Event | any) {
      if (this.inputType != "checkbox") {
        this.$emit("update:modelValue", event.target.value);
      } else {
        this.$emit("update:modelValue", event.target.checked);
      }
    },
  },
});
</script>
