<template>
  <div
    v-if="!signedIn"
    class="w-full h-screen flex justify-center items-center"
  >
    <LoginComponent v-model:token="token" v-model:signed="signed" />
  </div>
  <div v-else>
    <NavigationComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationComponent from "./components/NavigationComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";

export default defineComponent({
  components: {
    NavigationComponent,
    LoginComponent,
  },
  data() {
    return {
      token: "",
      signed: false,
      signedIn: false,
    };
  },
  watch: {
    signed: function (val, oldval) {
      if (val) {
        this.signedIn = true;
      } else {
        this.signedIn = false;
      }
    },
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
  background-color: rgb(2, 132, 199);
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
