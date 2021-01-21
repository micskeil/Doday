<template>
  <div class="container-fluid ">
    <div class="header container d-flex justify-content-between p-0 pt-3">
      <CurrentDate />
      <div class="d-flex align-items-center pr-3" @click="toggleMenu">
        MENU
      </div>
    </div>
    <div
      v-if="isNavActive"
      class="nav container d-flex flex-column align-content-end"
    >
      <NavMenu />
    </div>
    <div class="nav container d-flex flex-column align-content-end">
      <SignUp />
    </div>
  </div>
</template>

<script>
import CurrentDate from "@/components/LayoutElements/CurrentDate.vue";
import NavMenu from "@/components/NavigationMenu/NavMenu.vue";
import SignUp from "@/components/Authentication/SignUp.vue";

export default {
  name: "Home",
  components: {
    CurrentDate,
    NavMenu,
    SignUp,
  },
  data() {
    return {
      isNavActive: false,
    };
  },
  computed: {},
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
