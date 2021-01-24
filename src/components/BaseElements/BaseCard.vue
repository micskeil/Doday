<template>
  <div class=" d-flex flex-column align-items-between p-0 mt-3 mb-3">
    <div class="slot shadow p-3 rounded">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.slot {
  background-color: white;
}
.rounded {
  border-radius: 20px !important;
}
</style>
