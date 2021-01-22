<template
  ><div @click="logout">
    Logout
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped></style>
