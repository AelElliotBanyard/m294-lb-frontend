<template>
  <div class="border w-80">
    <div id="title">
      <h1 class="text-2xl font-bold py-4 text-gray-100">Login</h1>
    </div>
    <div id="fields" class="flex justify-center items-center flex-col w-100">
      <InputComponent
        label="E-Mail"
        v-model="inputEmail"
        input-type="text"
      /><InputComponent
        label="Password"
        v-model="password"
        input-type="password"
      />
    </div>
    <div id="button" class="mb-4">
      <ButtonComponent
        :onClick="validateLogin"
        label="Anmelden"
        class="border-gray-300 border-2 px-4 py-2 rounded-md font-bold text-gray-100 bg-green-600"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import InputComponent from "@/components/InputComponent.vue";

export default defineComponent({
  name: "LoginComponent",
  data() {
    return {
      inputEmail: "",
      password: "",
    };
  },
  props: {
    token: String,
    signed: {
      type: Boolean,
      required: true,
    },
    email: String
  },
  components: {
    ButtonComponent,
    InputComponent,
  },
  methods: {
    validateLogin() {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.inputEmail,
          password: this.password,
        }),
      };
      fetch("http://zli.banyard.tech/auth/jwt/sign", params)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode != undefined) {
            if (data.statusCode === 400) {
              alert("Email or Passwor Wrong")
            } else {
              alert("Error");
            }
          } else {
            this.$jwtData.token = data.token
            this.$emit("update:token", data.token);
            this.$emit("update:signed", true);
            this.$emit("update:email", this.inputEmail);
          }
        });
    },
  },
});
</script>
