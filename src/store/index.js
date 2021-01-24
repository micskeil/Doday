import { createStore } from "vuex";
import authModule from "./modules/auth/index.js";
import taskModule from "./modules/tasks/index.js";

export default createStore({
  modules: { auth: authModule, task: taskModule },
});
