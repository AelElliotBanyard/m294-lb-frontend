<template>
  <div>
    <p>{{ label }}</p>
    <input
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
