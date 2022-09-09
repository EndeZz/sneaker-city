<template>
  <div class="routes">
    <AtomLink
      v-for="category in categories"
      :key="category"
      :path="category"
      class="routes__link_category"
    >
      {{ category.charAt(0).toUpperCase() + category.slice(1) }}
    </AtomLink>
  </div>
</template>

<script lang="ts" setup>
import AtomLink from "@/components/atoms/AtomLink.vue";
import { onMounted, ref } from "vue";
import { fetchCategories } from "@/utils/api/apiRequests";

const categories = ref<string[]>([]);

onMounted(async () => {
  categories.value = await fetchCategories();
});
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
