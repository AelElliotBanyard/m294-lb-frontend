<template>
  <div
    class="fixed top-0 w-full left-0 right-0 flex justify-center items-center"
  >
    <div
      v-if="type === 'success'"
      :class="{ 'translate-y-0': show, '-translate-y-full': !show }"
      class="bg-green-500 rounded-b-md -translate-y-99 transition-all duration-1000 w-1/3"
    >
      <div v-if="msg === 'no-msg'">
        <p class="text-xl text-gray-100 font-bold">{{ title }}</p>
      </div>
      <div v-else>
        <p
          class="text-xl text-gray-100 font-bold border-b-2 border-gray-400 border-opacity-50"
        >
          {{ title }}
        </p>
        <p class="text-md text-gray-100">{{ msg }}</p>
      </div>
    </div>
    <div
      v-else-if="type === 'error'"
      :class="{ 'translate-y-0': show, '-translate-y-full': !show }"
      class="bg-red-500 rounded-b-md -translate-y-99 transition-all duration-1000 w-1/3"
    >
      <div v-if="msg === 'no-msg'">
        <p class="text-xl text-gray-100 font-bold">{{ title }}</p>
      </div>
      <div v-else>
        <p
          class="text-xl text-gray-100 font-bold border-b-2 border-gray-400 border-opacity-50"
        >
          {{ title }}
        </p>
        <p class="text-md text-gray-100">{{ msg }}</p>
      </div>
    </div>

    <div
      v-else-if="type === 'warning'"
      :class="{ 'translate-y-0': show, '-translate-y-full': !show }"
      class="bg-yellow-500 rounded-b-md -translate-y-99 transition-all duration-1000 w-1/3"
    >
      <div v-if="msg === 'no-msg'">
        <p class="text-xl text-gray-100 font-bold">{{ title }}</p>
      </div>
      <div v-else>
        <p
          class="text-xl text-gray-100 font-bold border-b-2 border-gray-400 border-opacity-50"
        >
          {{ title }}
        </p>
        <p class="text-md text-gray-100">{{ msg }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<"success" | "error" | "warning">,
      required: true,
      default: "success",
    },
    title: {
      type: String,
      required: true,
      default: "Success!",
    },
    msg: {
      type: String,
      required: false,
      default: "no-msg",
    },
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>
