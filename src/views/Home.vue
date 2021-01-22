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
    <base-card><Auth /></base-card>
  </div>
</template>

<script>
import CurrentDate from "@/components/LayoutElements/CurrentDate.vue";
import NavMenu from "@/components/NavigationMenu/NavMenu.vue";
import Auth from "@/components/Authentication/Auth.vue";
import BaseCard from "../components/BaseElements/BaseCard.vue";

export default {
  name: "Home",

  components: {
    CurrentDate,
    NavMenu,
    Auth,
    BaseCard,
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
.nav,
.content {
  max-width: 620px;
}
</style>
