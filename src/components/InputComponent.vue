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
      default: "Text",
    },
  },
  methods: {
    updateInput(event: Event | any) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  computed: {
    get() {
      return this.$props.modelValue;
    },
    set(value: String | Number | Boolean) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
