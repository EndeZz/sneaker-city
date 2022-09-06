<template>
  <li class="brand__item">
    <label class="brand__label">
      <input type="checkbox" />
      <span>{{ title }}</span>
    </label>
  </li>
</template>

<script lang="ts" setup>
interface IMoleculeBrandBlockProps {
  title: string;
}

defineProps<IMoleculeBrandBlockProps>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.brand {
  &__label {
    @include font_config(400, 1.4rem, 1.8rem);

    display: flex;
    align-items: center;
    gap: 12px;
    color: $color-gray-65;
  }
}
</style>
