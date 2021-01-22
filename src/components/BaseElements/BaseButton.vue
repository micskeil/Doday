<template>
  <button class="button  rounded">
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
  background-color: #de9f35;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    opacity: 0.8;
  }
}
</style>
