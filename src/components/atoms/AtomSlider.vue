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

    <div class="slider__recommendation">
      <h3 class="slider__caption">Рекомендации:</h3>
      <div class="slider__box">
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
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { IProduct } from "@/models/product.interfaces";
import { useProductsStore } from "@/store";
import { toRefs } from "vue";
import AtomButton from "./AtomButton.vue";

interface IAtomSliderProps {
  activeProduct: IProduct | undefined;
}

const storeProducts = useProductsStore();
const props = defineProps<IAtomSliderProps>();
const { activeProduct } = toRefs(props);
const emit = defineEmits(["clickOnSlider"]);

const handleClick = (id: number) => emit("clickOnSlider", id);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.slider {
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
    border: 0;
    background: 0;
    cursor: pointer;

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

  &__box {
    display: flex;
    justify-content: center;
  }

  &__caption {
    @include font_config(400, 2.2rem, 2.2rem);
  }

  &__recommendation {
    display: flex;
    flex-direction: column;

    gap: 24px;
    margin-top: 64px;
  }

  &__list {
    display: flex;
    gap: 24px;
    max-width: 816px;
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
    border: 4px solid $color-white;
    border-radius: 8px;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &_active {
      box-shadow: inset 0px 0px 20px $color-gray-10, 0px 2px 4px $color-shadow;
    }

    &:hover {
      border-color: $color-gray-15;
    }
  }
}
</style>
