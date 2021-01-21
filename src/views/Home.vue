<template>
  <div class="container-fluid ">
    <div class="header container d-flex justify-content-between p-0">
      <CurrentDate />
      <div class="d-flex align-items-center pr-3" @click="toggleMenu">
        MENU
      </div>
    </div>
    <div
      v-if="isNavActive"
      class="nav container d-flex flex-column align-content-end"
    >
      <div>
        Logout
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentDate from "@/components/LayoutElements/CurrentDate.vue";

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
  methods: {
    toggleMenu() {
      this.isNavActive = !this.isNavActive;
    },
  },
};
</script>

<style scoped>
.header,
.nav {
  max-width: 620px;
}
</style>
