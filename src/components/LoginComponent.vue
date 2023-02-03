<template>
  <div class="border w-80">
    <div id="title">
      <h1 class="text-2xl font-bold py-4 text-gray-100">Login</h1>
    </div>
    <div id="fields" class="flex justify-center items-center flex-col w-100">
      <InputComponent
        label="E-Mail"
        v-model="email"
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
import { defineComponent, inject } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import InputComponent from "@/components/InputComponent.vue";

export default defineComponent({
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
      emitter: inject("emitter"),
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
            this.emitter.emit("token", { token: data.token });
          }
        });
    },
  },
});
</script>
