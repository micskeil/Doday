<template>
  <div class="container-fluid ">
    <div class="header container d-flex justify-content-between">
      <CurrentDate />
      <div class="d-flex align-items-center pr-3">MENU</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentDate from "@/components/CurrentDate.vue";

export default {
  name: "Home",
  components: {
    CurrentDate
  }
};
</script>

<style scoped>
.header {
  max-width: 620px;
}
</style>
