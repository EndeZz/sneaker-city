<template>
  <div class="contacts">
    <AtomLink :path="routePath.cart.path" class="contacts-item">
      <img src="@/assets/images/fi_shopping-cart.svg" />
    </AtomLink>
    <AtomLink :path="routePath.cart.path" class="contacts-item">
      <img src="@/assets/images/fi_heart.svg" />
    </AtomLink>
    <AtomLink :path="routePath.cart.path" class="contacts-item">
      <img src="@/assets/images/fi_user.svg" />
    </AtomLink>
  </div>
</template>

<script lang="ts" setup>
import AtomLink from "@/components/atoms/AtomLink.vue";
import { routePath } from "@/router/route-path";
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.contacts {
  display: flex;
  gap: 32px;

  &-item {
    background-color: $color-white;
    border: 1px solid transparent;
  }
}
</style>
