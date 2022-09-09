<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
interface IAtomButtonProps {
  classes?: string;
}

defineProps<IAtomButtonProps>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.btn {
  @include font_config(400, 1.6rem, 2.2rem);

  border: 1px solid transparent;
  border: 0;
  background: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;

  &:hover {
    transform: scale(1.25);
  }
}
</style>
