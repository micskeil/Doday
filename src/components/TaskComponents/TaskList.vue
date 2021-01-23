<template>
  <div v-if="isLoading" class=" d-flex justify-content-center pt-3">
    <div
      class="spinner-border text-secondary d-flex justify-content-center"
      role="status"
    >
      <span class="visually-hidden"></span>
    </div>
  </div>

  <div class=" d-flex justify-content-center pt-3">
    <div>
      <span class=""
        >You have {{ numberOfTasks }} active task(s) for today
      </span>
    </div>
  </div>
  <base-card>
    kakaka
  </base-card>
</template>
<script>
import BaseCard from "../BaseElements/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      activeTasks: [],
      isLoading: true,
    };
  },
  computed: {
    uid() {
      return this.$store.getters.user.uid;
    },
  },
  methods: {},
};
</script>

<style scoped></style>
