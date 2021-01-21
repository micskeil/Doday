<template>
  <div class="container-fluid ">
    <div class="header container d-flex justify-content-between">
      <CurrentTime />
      <div>MENU</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentTime from "@/components/CurrentTime.vue";

export default {
  name: "Home",
  components: {
    CurrentTime,
  },
};
</script>

<style scoped>
.header {
  max-width: 620px;
}
</style>
