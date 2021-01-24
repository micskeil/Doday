export default {
  setActiveTasks(state, payload) {
    state.activeTasks.push(payload);
  },
  clearActiveTasks(state) {
    state.activeTasks.splice(0);
  },

  setFinishedTasks(state, payload) {
    state.finishedTasks.push(payload);
  },
  clearFinishedTasks(state) {
    state.finishedTasks.splice(0);
  },
};
