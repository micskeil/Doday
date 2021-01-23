<template>
  <div
    class="content container d-flex flex-column align-items-between p-0 pt-5"
  >
    <div class="add-task d-flex justify-content-end shadow p-3 rounded">
      <div class="task-input m-0 p-1">
        <input
          type="email"
          class="form-control rounded m-0
          "
          placeholder="Add new task for today..."
          v-model="newTask"
        />
      </div>

      <div class="m-0 p-1 d-flex align-items-center">
        <img
          class="rounded m-0"
          width="32"
          height="32"
          src="@/img/addtask.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {
      newTask: null,
    };
  },
};
</script>

<style scoped>
.task-input {
  flex-grow: 1;
}
.add-task {
  width: 100%;
  background-color: white;
}
.rounded {
  border-radius: 20px !important;
}
</style>
