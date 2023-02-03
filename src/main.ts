import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./styles/app.css";

const app = createApp(App);
app.config.globalProperties.$jwtData = {
    token: ""
};
app.use(router);
app.mount("#app");


declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $jwtData: {
      token: string
    },
  }
}
