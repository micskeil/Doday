<template>
  <div
    class="content container d-flex flex-column align-items-between p-0 pt-5"
  >
    <div v-if="isLoading" class=" d-flex justify-content-center">
      <div
        class="spinner-border text-secondary d-flex justify-content-center"
        role="status"
      >
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div
      v-if="!isLoading"
      class="add-task d-flex flex-column justify-content-end shadow p-3 rounded"
    >
      <div class="d-flex justify-content-end">
        <div class="task-input m-0 p-1">
          <input
            type="text"
            class="form-control rounded m-0
          "
            placeholder="Add new task for today..."
            v-model="newTask"
          />

          <div v-if="newTask" class="task-note m-0 p-0 mt-1">
            <textarea
              type="textarea"
              class="form-control rounded m-0
          "
              placeholder="note"
              v-model="taskNote"
            />
          </div>
        </div>

        <div @click="saveTask" class="m-0 p-1 d-flex align-items-end">
          <img
            class="rounded m-0"
            width="36"
            height="36"
            src="@/img/addtask.png"
          />
        </div>
      </div>
      <p v-if="!isValidTask" class="text-warning text-center pr-3 pl-3 pt-3">
        Please add a valid task!
      </p>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      newTask: null,
      taskNote: null,
      isLoading: false,
      isValidTask: true,
    };
  },
  computed: {
    uid() {
      return this.$store.getters.user.uid;
    },
  },
  watch: {
    newTask() {
      if (!this.newTask) {
        this.taskNote = null;
      }

      if (!this.isValidTask) {
        this.isValidTask = !this.isValidTask;
      }
    },
  },
  methods: {
    saveTask() {
      if (this.newTask === null || this.newTask.length < 2) {
        this.isValidTask = false;
        return;
      }

      const that = this;
      this.isLoading = true;
      db.collection("users/" + this.uid + "/tasks")
        .add({
          taskTitle: this.newTask,
          taskNote: this.taskNote,
          created: new Date(),
          finished: false,
        })
        .then(function() {
          that.newTask = null;
          that.taskNote = null;
          that.isLoading = false;
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.task-input {
  flex-grow: 1;
}
.add-task {
  width: 100%;
  background-color: white;
}
.task-note {
  textarea {
    height: 120px;
  }
}
.rounded {
  border-radius: 20px !important;
}
</style>
