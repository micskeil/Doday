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

    <base-card class="" v-for="task in activeTasks" :key="task">
      <div class="d-flex justify-content-between">
        <div>
          <div class="task-input m-0 mt-1">
            {{ task.taskTitle }}
          </div>
          <div class="task-note m-0 p-0 mt-1">
            {{ task.taskNote }}
          </div>
        </div>
        <div @click="markReady" class="m-0 p-1 d-flex align-items-end">
          <img
            class="rounded m-0"
            width="36"
            height="36"
            src="@/img/unchecked.png"
          />
        </div>
      </div>
      <div class="settings d-flex justify-content-between pt-1">
        <div @click="deleteTask(task.taskId)" class="text-warning side">
          <DeleteTask :taskId="task.taskId" />
        </div>
        <div class="text-info">Edit</div>
        <div class="side text-right">Created: 1 day ago</div>
      </div>
    </base-card>
  </div>
</template>
<script>
import BaseCard from "../BaseElements/BaseCard.vue";
import DeleteTask from "./DeleteTask.vue";

export default {
  components: { BaseCard, DeleteTask },
  data() {
    return {};
  },
  computed: {
    uid() {
      return this.$store.getters.user.uid;
    },
    activeTasks() {
      console.log(this.$store.getters.activeTasks);
      return this.$store.getters.activeTasks;
    },
    numberOfTasks() {
      if (this.activeTasks.length === 0) {
        return "You don't have any task left, great work!";
      }
      return `You have ${this.activeTasks.length} tasks left for today!`;
    },
    isLoading() {
      return this.activeTasks.length > 0 ? false : false;
    },
  },
  methods: {
    deleteTask(taskId) {
      this.activeTasks.splice(
        this.activeTasks.findIndex((x) => x.taskId === taskId),
        1
      );
    },
  },
  created() {
    this.$store.dispatch("getActiveTasks");
  },
};
</script>

<style scoped>
.side {
  width: 120px;
}
.settings {
  font-family: Quattrocento, serif;
  font-size: 0.75rem;
}
.task-note {
  font-family: Quattrocento, serif;
}
</style>
