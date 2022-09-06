<template>
  <router-link :to="path" class="link">
    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
interface IAtomLinkProps {
  path: string;
}

defineProps<IAtomLinkProps>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.link {
  @include font_config(400, 1.4rem, 2.4rem);

  color: $color-txt;
  display: flex;
  text-decoration: none;
}
</style>
