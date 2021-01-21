<template>
  <button class="button rounded ">
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
$color: #181e34;
$color2: #404e88;

.button {
  width: 100%;
  background-color: $color;
  border-radius: 0;
  color: white;
  border: none;

  &:hover {
    background-color: $color2;
    opacity: 0.8;
  }
}
</style>
