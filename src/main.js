import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth, db } from "./firebase";

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.css";

createApp(App)
  .use(store)
  .use(router)
  .use(auth)
  .use(db)
  .mount("#app");
