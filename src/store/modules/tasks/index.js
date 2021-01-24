import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      activeTasks: [],
      finishedTasks: [],
    };
  },
  mutations,
  getters,
  actions,
};
