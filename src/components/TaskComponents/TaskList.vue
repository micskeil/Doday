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
      <div class="">{{ task.taskTitle }}</div>
      <div class="note">{{ task.taskNote }}</div>
    </base-card>
  </div>
</template>
<script>
import BaseCard from "../BaseElements/BaseCard.vue";
import { db } from "@/firebase";

export default {
  components: { BaseCard },
  data() {
    return {
      activeTasks: [],
      isLoading: true,
    };
  },
  computed: {
    uid() {
      return this.$store.getters.user.uid;
    },
    numberOfTasks() {
      if (this.activeTasks.length === 0) {
        return "You don't have any task left, great work!";
      }
      return `You have ${this.activeTasks.length} tasks left for today!`;
    },
  },
  methods: {
    getActiveTasks() {
      const that = this;
      db.collection("users/" + this.uid + "/tasks")
        .where("finished", "==", false)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            that.activeTasks.push({
              taskId: doc.id,
              taskTitle: doc.data().taskTitle,
              taskNote: doc.data().taskNote,
              created: doc.data().created,
            });
            that.isLoading = false;
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
  },
  created() {
    this.getActiveTasks();
  },
};
</script>

<style scoped>
.note {
  font-family: Quattrocento, serif;
}
</style>
