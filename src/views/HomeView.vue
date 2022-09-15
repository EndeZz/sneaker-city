<template>
  <main class="main">
    <OrganismSidebar @setFilter="handleFilterProducts" />

    <section class="content">
      <h2 class="content__title">{{ categoryTitle ?? "The new arrivals" }}</h2>

      <TransitionGroup
        tag="ul"
        v-if="!store.isLoading"
        name="cards"
        class="cards"
      >
        <MoleculeCard
          v-for="product in store.currentProducts"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.image"
        />
      </TransitionGroup>

      <OrganismFooter />
    </section>
  </main>

  <AtomPopup :isShow="store.isLoading" bg="popup__loader">
    <AtomLoader />
  </AtomPopup>
</template>

<script lang="ts" setup>
import OrganismSidebar from "@/components/organisms/OrganismSidebar.vue";
import OrganismFooter from "@/components/organisms/OrganismFooter.vue";
import MoleculeCard from "@/components/molecules/MoleculeCard.vue";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import AtomPopup from "@/components/atoms/AtomPopup.vue";
import AtomLoader from "@/components/atoms/AtomLoader.vue";
import { IFilteredProducts } from "@/models/product.interfaces";
import { useProductsStore } from "@/store/useProductsStore";

const store = useProductsStore();
const route = useRoute();

const categoryName = computed(() => route.params.category as string);
const categoryTitle = computed(
  () =>
    categoryName.value &&
    categoryName.value.charAt(0).toUpperCase() + categoryName.value.slice(1)
);

const handleFilterProducts = (filterOptions: IFilteredProducts) => {
  store.currentProducts = store.currentProducts.filter(
    (product) =>
      product.price >= filterOptions.price[0] &&
      product.price <= filterOptions.price[1] &&
      product.rating.rate >= filterOptions.rating
  );
};

onMounted(() => store.updateContentOnPage(categoryName.value));
watch(categoryName, () => store.updateContentOnPage(categoryName.value));
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.main {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.content {
  width: 100%;
  padding-top: 32px;
  padding-left: 64px;

  &__title {
    @include font_config(700, 2.4rem, 3.2rem);
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 64px 24px;
  margin-top: 32px;

  &-move,
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
}

.popup__loader {
  background-color: $color-loader-bg;
}
</style>
