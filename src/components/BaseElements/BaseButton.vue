<template>
  <button class="button border rounded">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.button {
  width: 100%;
  background-color: white;
  color: #181e34;
  border: none;

  &:hover {
    background-color: white;
    opacity: 0.8;
  }
}
</style>
