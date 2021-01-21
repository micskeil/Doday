<template>
  <div class="container-fluid ">
    <div class="header container d-flex justify-content-between">
      <CurrentDate />
      <div class="d-flex align-items-center pr-3">MENU</div>
    </div>
    <div v-if="isNavActive" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentDate from "@/components/CurrentDate.vue";

export default {
  name: "Home",
  components: {
    CurrentDate,
  },
  data() {
    return {
      isNavActive: false,
    };
  },
};
</script>

<style scoped>
.header {
  max-width: 620px;
}
</style>
