<template>
  <div class="content container">
    <div class="header d-flex justify-content-between p-0 pt-3">
      <CurrentDate />
      <div class="d-flex align-items-center pr-3" @click="toggleMenu">
        MENU
      </div>
    </div>
    <div v-if="isNavActive" class="nav d-flex flex-column align-content-end">
      <NavMenu />
    </div>

    <base-card v-if="!isLoggedIn"><Auth /></base-card>

    <NewTask v-if="isLoggedIn" />

    <TaskList v-if="isLoggedIn" />
  </div>
</template>

<script>
import CurrentDate from "@/components/LayoutElements/CurrentDate.vue";
import NavMenu from "@/components/NavigationMenu/NavMenu.vue";
import Auth from "@/components/Authentication/Auth.vue";
import BaseCard from "../components/BaseElements/BaseCard.vue";
import NewTask from "../components/TaskComponents/NewTask.vue";
import TaskList from "../components/TaskComponents/TaskList.vue";

export default {
  name: "Home",

  components: {
    CurrentDate,
    NavMenu,
    Auth,
    BaseCard,
    NewTask,
    TaskList,
  },

  data() {
    return {
      isNavActive: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user() {
      return this.$store.getters.user;
    },
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
.nav,
.content {
  max-width: 620px;
}
</style>
