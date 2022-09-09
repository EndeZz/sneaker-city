<template>
  <section class="section">
    <h3 class="section__title">{{ title }}</h3>

    <div class="section__range">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
interface IMoleculeRangeBlock {
  title: string;
}

defineProps<IMoleculeRangeBlock>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.section {
  padding: 32px;
  border-bottom: 1px solid $color-gray-15;

  &__title {
    @include font_config(400, 1.6rem, 2.4rem);
  }

  &__range {
    margin-top: 16px;
  }

  &:last-child {
    border-bottom: none;
  }
}
</style>
