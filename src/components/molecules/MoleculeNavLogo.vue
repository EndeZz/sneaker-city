<template>
  <div class="logo">
    <h1 class="hidden">Sneaker City</h1>
    <AtomLink :path="routePath.home.path">
      <img
        class="logo__image"
        src="@/assets/images/logo.svg"
        alt="Sneaker City Logotype"
      />
      <p class="logo__title">SC.</p>
    </AtomLink>
  </div>
</template>

<script lang="ts" setup>
import { routePath } from "@/router/route-path";
import AtomLink from "../atoms/AtomLink.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.logo {
  display: flex;

  &__image {
    width: 32px;
  }

  &__title {
    @include font_config(700, 3.6rem, 3.6rem);

    margin: 0;
    margin-left: 8px;
  }
}
</style>
