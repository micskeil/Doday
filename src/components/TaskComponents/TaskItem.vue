<template>
  <base-card>
    <div class="task-info d-flex justify-content-between">
      <div class="task-info">
        <div v-if="!isEditable" class="task-input m-0 mt-1">
          {{ task.taskTitle }}
        </div>
        <input
          v-if="isEditable"
          type="text"
          class="form-control rounded m-0 "
          v-model="editedTaskTitle"
        />

        <div v-if="!isEditable" class="task-note m-0 p-0 mt-1">
          {{ task.taskNote }}
        </div>
        <textarea
          v-if="isEditable"
          type="textarea"
          class="task-note
        form-control rounded m-0 mt-1 "
          placeholder="note"
          v-model="editedTaskNote"
        />
      </div>
      <div @click="toggleFinished" class="m-0 p-1 d-flex align-items-end">
        <img class=" m-0" width="36" height="36" :src="tickerButtonSrc" />
      </div>
    </div>
    <div class="settings d-flex justify-content-between pt-3">
      <div class="text-warning side">
        <DeleteTask :taskId="task.taskId" />
      </div>
      <div @click="toggleEditable" class="text-info">
        {{ editButtonText }}
      </div>
      <div class="side text-right">Created: 1 day ago</div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "../BaseElements/BaseCard.vue";
import DeleteTask from "./DeleteTask.vue";
import { db } from "@/firebase";

export default {
  components: { BaseCard, DeleteTask },
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      isEditable: false,
      isFinished: this.task.finished,
      editedTaskTitle: this.task.taskTitle,
      editedTaskNote: this.task.taskNote,
    };
  },
  computed: {
    editButtonText() {
      if (this.isEditable == true) {
        return "Save";
      } else {
        return "Edit";
      }
    },
    uid() {
      return this.$store.getters.user.uid;
    },
    tickerButtonSrc() {
      if (this.isFinished) {
        return require("../../img/checked.png");
      } else {
        return require("../../img/unchecked.png");
      }
    },
  },
  methods: {
    toggleEditable() {
      this.isEditable = !this.isEditable;
      if (!this.isEditable) {
        this.updateTask();
      }
    },
    toggleFinished() {
      this.isFinished = !this.isFinished;
      this.finishTask();
    },
    finishTask() {
      const that = this;
      this.isLoading = true;
      db.collection("users/" + this.uid + "/tasks")
        .doc(this.task.taskId)
        .update({
          finished: this.isFinished,
          finisheDate: new Date(),
        })
        .then(function() {
          that.$store.dispatch("getActiveTasks");
          that.$store.dispatch("getFinishedTasks");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },

    updateTask() {
      console.log(this.task.taskTitletaskTitle);
      const that = this;
      this.isLoading = true;
      db.collection("users/" + this.uid + "/tasks")
        .doc(this.task.taskId)
        .update({
          taskTitle: this.editedTaskTitle,
          taskNote: this.editedTaskNote,
        })
        .then(function() {
          that.$store.dispatch("getActiveTasks");
          that.$store.dispatch("getFinishedTasks");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
.settings {
  font-family: Quattrocento, serif;
  font-size: 0.75rem;
}
.task-info {
  width: 100%;
}
.side {
  width: 120px;
}
.task-note {
  font-family: Quattrocento, serif;
}
.rounded {
  border-radius: 20px !important;
}
</style>
