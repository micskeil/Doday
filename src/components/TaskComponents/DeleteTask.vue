<template>
  <div @click="deleteTask">
    Delete
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    uid() {
      return this.$store.getters.user.uid;
    },
  },
  methods: {
    deleteTask() {
      db.collection("users/" + this.uid + "/tasks/")
        .doc(this.taskId)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>
