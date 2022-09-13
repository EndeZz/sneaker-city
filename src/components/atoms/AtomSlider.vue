<template>
  <section class="slider">
    <div class="slider__content">
      <AtomButton class="slider__arrow" @click="previousSlide">
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

      <AtomButton class="slider__arrow" @click="nextSlide">
        <img
          class="slider__icon"
          src="@/assets/images/icons/arrow-right.svg"
          alt="Arrow left icon"
        />
      </AtomButton>
    </div>

    <ul class="slider__list">
      <li
        v-for="product in storeProducts.filteredProducts"
        :key="product.id"
        class="slider__item"
        :class="{ slider__item_active: activeProduct?.id === product.id }"
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
import { useProductsStore } from "@/store";
import { toRefs, ref } from "vue";
import AtomButton from "./AtomButton.vue";

interface IAtomSliderProps {
  activeProduct: IProduct | undefined;
}

const storeProducts = useProductsStore();
const props = defineProps<IAtomSliderProps>();
const { activeProduct } = toRefs(props);
const currentSlide = ref<number>(1);
const emit = defineEmits(["clickOnSlider", "changeSlide"]);

const handleClick = (id: number) => emit("clickOnSlider", id);

const updateSliderMovementDirection = (value: number) =>
  value === 0 ? (value = 1) : emit("changeSlide", value);

const nextSlide = () => {
  if (!activeProduct.value) return;
  // Todo: Переделать костыль с длиной
  currentSlide.value =
    (activeProduct.value.id + 1) % (storeProducts.filteredProducts.length + 1);

  updateSliderMovementDirection(currentSlide.value);
};

const previousSlide = () => {
  if (!activeProduct.value) return;
  // Todo: Переделать костыль с длиной
  currentSlide.value =
    (activeProduct.value.id - 1) % (storeProducts.filteredProducts.length + 1);

  updateSliderMovementDirection(currentSlide.value);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.slider {
  display: grid;
  overflow: hidden;

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

    &:active {
      transform: scale(2.2);
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
    max-width: 816px;
    width: 100%;
    margin: 64px auto;
    padding-bottom: 16px;
    white-space: nowrap;
    overflow-x: auto;
  }

  &__suggestion {
    width: 96px;
    height: 80px;
    object-fit: contain;
  }

  &__item {
    background-color: $color-white;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &_active {
      border: 1px solid $color-red-1;
    }

    &:hover {
      border: 1px solid $color-gray-15;
    }
  }
}
</style>
