import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";

// import "@/styles/style.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
