<template>
  <section class="slider">
    <div class="slider__content">
      <AtomButton class="slider__arrow">
        <img
          class="slider__icon"
          src="@/assets/images/icons/arrow-left.svg"
          alt="Arrow left icon"
        />
      </AtomButton>

      <div class="slider__block">
        <img
          class="slider__img"
          :src="activeProduct?.image"
          :alt="activeProduct?.title"
        />
      </div>

      <AtomButton class="slider__arrow">
        <img
          class="slider__icon"
          src="@/assets/images/icons/arrow-right.svg"
          alt="Arrow left icon"
        />
      </AtomButton>
    </div>
    <ul class="slider__list">
      <li
        v-for="product in store.filteredProducts"
        :key="product.id"
        class="slider__item"
        @click="handleClick(product.id)"
      >
        <img
          class="slider__suggestion"
          :src="product.image"
          :alt="product.title"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { IProduct } from "@/models/product.interfaces";
import { useProductsStore } from "@/store/useProductsStore";
import AtomButton from "./AtomButton.vue";

const store = useProductsStore();

interface IAtomSliderProps {
  activeProduct: IProduct | null;
}

defineProps<IAtomSliderProps>();

const emit = defineEmits(["clickOnSlider"]);

const handleClick = (id: number) => {
  emit("clickOnSlider", id);
};
</script>
