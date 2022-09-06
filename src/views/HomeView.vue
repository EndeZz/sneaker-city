<template>
  <main class="main container">
    <OrganismSidebar />

    <section class="content">
      <h2 class="content__title">The new arrivals</h2>

      <ul v-if="categoryName" class="card">
        <MoleculeCard
          v-for="product in currentCategoryProducts"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.image"
        />
      </ul>
      <ul v-else class="card">
        <MoleculeCard
          v-for="product in productItems"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.image"
        />
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
import OrganismSidebar from "@/components/organisms/OrganismSidebar.vue";
import MoleculeCard from "@/components/molecules/MoleculeCard.vue";
import { computed, onMounted } from "vue";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useRoute } from "vue-router";

const { productItems, fetchProductsData } = useFetchProducts();
const route = useRoute();
const categoryName = route.params.category;

const currentCategoryProducts = computed(() =>
  productItems.value.filter((product) => product.category === categoryName)
);

onMounted(() => {
  fetchProductsData();
});
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
  padding-top: 32px;
  padding-left: 64px;

  &__title {
    @include font_config(700, 2.4rem, 3.2rem);
  }
}

.card {
  display: flex;
  flex-wrap: wrap;
  gap: 64px 24px;
  margin-top: 32px;
}
</style>
