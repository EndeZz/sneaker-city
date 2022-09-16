<template>
  <main class="main">
    <section class="main__wrapper">
      <OrganismCart />

      <OrganismOrder />
    </section>

    <OrganismFooter />
  </main>
</template>

<script lang="ts" setup>
import OrganismOrder from "@/components/organisms/OrganismOrder.vue";
import OrganismCart from "@/components/organisms/OrganismCart.vue";
import OrganismFooter from "@/components/organisms/OrganismFooter.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.main {
  padding: 26px 32px 18px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 64px;
  }
}
</style>
