<template>
  <div>
    <div id="title">
      <h1 class="text-2xl text-bold">Login</h1>
    </div>
    <div id="fields">
      <FieldComponent :field="email" type="text" label="E-Mail" />
      <FieldComponent :field="password" type="password" label="Passwort" />
    </div>
    <div id="button"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FieldComponent from "./FieldComponent.vue";

export default defineComponent({
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    FieldComponent,
  },
  setup() {
    return {};
  },
});
</script>
