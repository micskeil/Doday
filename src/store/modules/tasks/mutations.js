export default {
  setActiveTasks(state, payload) {
    state.activeTasks.push(payload);
  },
  clearActiveTasks(state) {
    state.activeTasks.splice(0);
  },
};
