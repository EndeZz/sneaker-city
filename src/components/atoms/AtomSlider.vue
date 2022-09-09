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

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.slider {
  display: grid;

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    height: 550px;
    align-items: center;
  }

  &__arrow {
    @include font_config(400, 1.6rem, 2.2rem);

    border: 0;
    background: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    width: fit-content;
    height: fit-content;

    &:hover {
      transform: scale(3);
    }
  }

  &__img {
    padding: 50px;
    background-color: $color-white;
    width: 100%;
    height: 100%;
    max-height: 500px;
    max-width: 500px;
    object-fit: contain;
  }

  &__list {
    display: flex;
    gap: 24px;
    justify-content: center;
    overflow-x: auto;
    max-width: 816px;
    width: 100%;
    margin: 64px auto;
    padding-bottom: 16px;
  }

  &__suggestion {
    width: 96px;
    height: 80px;
    object-fit: contain;
  }

  &__item {
    background-color: $color-white;
    border-radius: 8px;
    padding: 10px;
  }
}
</style>
