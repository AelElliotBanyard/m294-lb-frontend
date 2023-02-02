<template>
  <NavigationComponent />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationComponent from "./components/NavigationComponent.vue";

export default defineComponent({
  components: {
    NavigationComponent,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(7, 89, 173);
  min-height: 100vh;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(77, 131, 218);
}
</style>
