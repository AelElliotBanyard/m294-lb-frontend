<template>
  <div>
    <div>
      <LoginComponent />
    </div>
  </div>
</template>

<script lang="ts">
import LoginComponent from "@/components/LoginComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { LoginComponent },
});
</script>
