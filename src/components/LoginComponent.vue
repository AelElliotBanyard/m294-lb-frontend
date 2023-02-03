<template>
  <div class="border w-80">
    <div id="title">
      <h1 class="text-2xl text-bold py-4">Login</h1>
    </div>
    <div id="fields" class="flex justify-center align-center flex-col">
      <div class="border-4 border-gray-500 relative w-min h-min m-4 rounded">
        <p class="absolute bottom-7 left-2 px-2 bg-white cursor-default">
          E-Mail
        </p>
        <input
          type="text"
          v-model="email"
          class="h-10 w-64 px-2 focus-visible:outline-none"
        />
      </div>
      <div class="border-4 border-gray-500 relative w-min h-min m-4 rounded">
        <p class="absolute bottom-7 left-2 px-2 bg-white cursor-default">
          Passwort
        </p>
        <input
          type="password"
          v-model="password"
          class="h-10 w-64 px-2 focus-visible:outline-none"
        />
      </div>
    </div>
    <div id="button">
      <ButtonComponent :onClick="validateLogin" label="Anmelden" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

export default defineComponent({
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  props: {
    token: String,
    signed: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ButtonComponent,
  },
  methods: {
    validateLogin() {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      fetch("http://zli.banyard.tech/auth/jwt/sign", params)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode != undefined) {
            if (data.statusCode === 400) {
              alert("Email or Password wrong");
            } else {
              alert("Error");
            }
          } else {
            this.$emit("update:token", data.token);
            this.$emit("update:signed", true);
          }
        });
    },
  },
});
</script>
