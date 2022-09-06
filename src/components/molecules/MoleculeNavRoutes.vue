<template>
  <div class="routes">
    <AtomLink :path="routePath.home.path" class="routes__link_category">
      Home
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

.routes {
  display: flex;
  gap: 32px;

  &__link {
    &_category {
      &.router-link-active {
        border-bottom: 1px solid $color-txt;
      }
    }
  }
}
</style>
