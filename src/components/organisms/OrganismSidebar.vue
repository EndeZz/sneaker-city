<template>
  <aside class="sidebar">
    <section class="sidebar__section">
      <h3 class="sidebar__title">Brand</h3>

      <ul class="brand">
        <MoleculeBrandBlock
          v-for="item in items"
          :key="item.id"
          :title="item.title"
        />
      </ul>
    </section>

    <section class="sidebar__section">
      <h3 class="sidebar__title">Price range</h3>

      <AtomInputRange />
    </section>
  </aside>
</template>

<script lang="ts" setup>
import AtomInputRange from "@/components/atoms/AtomInputRange.vue";
import MoleculeBrandBlock from "@/components/molecules/MoleculeBrandBlock.vue";
import { ref } from "vue";

const items = ref([
  { id: 1, title: "someone" },
  { id: 2, title: "222" },
]);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.sidebar {
  max-width: 260px;
  width: 100%;

  &__section {
    padding: 32px;
    border-bottom: 1px solid $color-gray-15;

    &:last-child {
      border-bottom: none;
    }
  }

  &__title {
    @include font_config(400, 1.6rem, 2.4rem);
  }
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 16px;
}
</style>
