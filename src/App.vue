<template>
  <div
    v-if="!signedIn"
    class="w-full h-screen flex justify-center items-center"
  >
    <LoginComponent v-model:token="token" v-model:signed="signed" v-model:email="email" />
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
import CustomAlert from "@/components/CustomAlert.vue";

export default defineComponent({
  components: {
    NavigationComponent,
    LoginComponent,
    CustomAlert
  },
  data() {
    return {
      token: "",
      signed: false,
      signedIn: false,
      email: ''
    };
  },
  watch: {
    signed: function (val, oldval) {
      if (val) {
        this.signedIn = true;
        setInterval(() => {
          const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$jwtData.token,
        },
      };
      fetch("http://zli.banyard.tech/auth/jwt/verify", params)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode != undefined) {
            if (data.statusCode === 401) {
              alert("Session expired");
              this.signedIn = false
            } else {
              alert("Error");
              this.signedIn = false
            }
          }
        });
        }, 120000)
      } else {
        this.signedIn = false;
        console.log(oldval)
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
