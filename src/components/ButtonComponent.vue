<template>
  <div>
    <button @click="callback($event)" v-bind="$attrs">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    inheritAttrs: false,
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    callback: function (e: Event) {
      this.$emit("click", e);
    },
  },
});
</script>

<style lang="scss" scoped></style>
