<template>
  <main class="main container">
    <OrganismSidebar />

    <section class="content">
      <h2 class="content__title">{{ categoryTitle ?? "The new arrivals" }}</h2>

      <ul v-if="!isLoading" class="card">
        <MoleculeCard
          v-for="product in currentProducts"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.image"
        />
      </ul>
    </section>
  </main>

  <AtomModal v-if="isLoading" classes="modal__loader"><AtomLoader /></AtomModal>
</template>

<script lang="ts" setup>
import OrganismSidebar from "@/components/organisms/OrganismSidebar.vue";
import MoleculeCard from "@/components/molecules/MoleculeCard.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { IProducts } from "@/models/product.interfaces";
import { fetchProductsByCategory } from "@/utils/api/apiRequests";
import AtomModal from "@/components/atoms/AtomModal.vue";
import AtomLoader from "@/components/atoms/AtomLoader.vue";

const route = useRoute();
const categoryName = computed(() => route.params.category as string);
const categoryTitle = computed(
  () =>
    categoryName.value &&
    categoryName.value.charAt(0).toUpperCase() + categoryName.value.slice(1)
);

const currentProducts = ref<IProducts[]>([]);
const isLoading = ref<boolean>(true);

onMounted(async () => {
  isLoading.value = true;
  currentProducts.value = await fetchProductsByCategory(categoryName.value);
  isLoading.value = false;
});

watch(categoryName, async () => {
  isLoading.value = true;
  currentProducts.value = await fetchProductsByCategory(categoryName.value);
  isLoading.value = false;
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

.modal__loader {
  background-color: $color-loader-bg;
}
</style>
