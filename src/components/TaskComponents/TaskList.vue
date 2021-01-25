<template>
  <div class="pt-3">
    <div v-if="isLoading" class=" d-flex justify-content-center pt-3">
      <div
        class="spinner-border text-secondary d-flex justify-content-center"
        role="status"
      >
        <span class="visually-hidden"></span>
      </div>
    </div>

    <div v-if="!isLoading" class="d-flex justify-content-center pt-3">
      <div>
        <span class="font-weight-light"> {{ numberOfTasks }} </span>
      </div>
    </div>
    <TaskItem v-for="task in activeTasks" :key="task" :task="task" />

    <div v-if="!isLoading" class="d-flex justify-content-center pt-3">
      <div>
        <span class="font-weight-light"> {{ numberOfFinishedTasks }} </span>
      </div>
    </div>
    <TaskItem v-for="task in finishedTasks" :key="task" :task="task" />
  </div>
</template>
<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: { TaskItem },

  computed: {
    activeTasks() {
      return this.$store.getters.activeTasks;
    },
    finishedTasks() {
      return this.$store.getters.finishedTasks;
    },
    numberOfTasks() {
      if (this.activeTasks.length === 0) {
        return "You don't have any task left, great work!";
      }
      return `You have ${this.activeTasks.length} tasks left for today!`;
    },
    numberOfFinishedTasks() {
      if (this.finishedTasks.length === 0) {
        return "Let's start, you did not finish anything in the last 24 hours!";
      }
      return `You have ${this.finishedTasks.length} finished tasks in the last 24 hours!`;
    },
    isLoading() {
      return this.activeTasks.length > 0 ? false : false;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("getActiveTasks");
    this.$store.dispatch("getFinishedTasks");
  },
};
</script>

<style scoped></style>
