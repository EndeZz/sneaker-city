<template>
  <li class="card__item">
    <figure class="card__figure" @click="handleClickOnProduct">
      <div class="card__img-block">
        <img :src="image" :alt="title" class="card__img-pic" />
      </div>

      <figcaption class="card__info">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__caption">{{ price }}$</p>
      </figcaption>
    </figure>
  </li>

  <AtomPopup v-if="isShow" classes="details">
    <div class="details__content">
      <header class="details__header">
        <div class="details__info">
          <h2 class="details__title">{{ activeProduct?.title }}</h2>
          <p class="details__price">{{ activeProduct?.price }}$</p>
        </div>
        <AtomButton class="details__favorite">
          <img src="@/assets/images/icons/fi_heart.svg" alt="Favorite icon" />
        </AtomButton>
      </header>

      <AtomSlider
        :activeProduct="activeProduct"
        @clickOnSlider="handleClickOnSlider"
      />
    </div>

    <aside class="details__sidebar">
      <AtomAccordion
        title="Description"
        :description="activeProduct && activeProduct.description"
        :isActive="isDescActive"
        @toggleAccordion="handleToggleAccordion"
      />

      <div class="details__block">
        <div class="details__change-block">
          <AtomButton class="details__change_icon">
            <img
              class="slider__icon"
              src="@/assets/images/icons/fi_minus.svg"
              alt="Minus icon"
            />
          </AtomButton>
          <p class="details__count">1</p>
          <AtomButton class="details__change_icon">
            <img
              class="slider__icon"
              src="@/assets/images/icons/fi_plus.svg"
              alt="Plus icon"
            />
          </AtomButton>
        </div>
        <AtomButton class="details__cart-btn">Add to cart</AtomButton>
      </div>
    </aside>
  </AtomPopup>
</template>

<script lang="ts" setup>
import { fetchProduct } from "@/utils/api/apiRequests";
import { ref, toRefs } from "vue";
import AtomPopup from "@/components/atoms/AtomPopup.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
import AtomAccordion from "@/components/atoms/AtomAccordion.vue";
import { IProduct } from "@/models/product.interfaces";
import AtomSlider from "../atoms/AtomSlider.vue";

interface IMoleculeCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const props = defineProps<IMoleculeCardProps>();
const { id } = toRefs(props);
const isShow = ref<boolean>(false);
const isDescActive = ref<boolean>(false);
const activeProduct = ref<IProduct | null>(null);

const handleClickOnProduct = async () => {
  document.body.style.overflowY = "hidden";
  isShow.value = true;
  activeProduct.value = await fetchProduct(id.value);
};

const handleClickOnSlider = async (id: number) => {
  activeProduct.value = await fetchProduct(id);
};

const handleToggleAccordion = () => {
  isDescActive.value = !isDescActive.value;
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.details {
  background-color: $color-bg;
  display: flex;
  justify-content: space-between;
  height: 100%;

  &__content {
    width: 100%;
    padding: 96px 64px 124px;
    background-color: $color-bg;
  }

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 600px;
    width: 100%;
    height: 100px;
  }

  &__favorite {
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
      transform: scale(1.2);
    }
  }

  &__title {
    @include font_config(700, 3.6rem, 3.2rem);

    color: $color-txt;
  }

  &__price {
    @include font_config(400, 1.8rem, 2.8rem);

    color: $color-gray-65;
  }

  &__sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 496px;
    min-width: 496px;
    padding: 32px 64px 131px;
    background-color: $color-white;
  }

  &__cart-btn {
    @include font_config(700, 1.6rem, 2.4rem);

    border: 1px solid transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    width: fit-content;

    padding: 10px 24px;
    color: $color-white;
    background-color: $color-red-2;

    &:hover {
      background-color: $color-red-1;
    }

    &:active {
      background-color: darken($color-red-2, 10);
    }
  }

  &__block {
    display: flex;
  }

  &__change-block {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 28px;
  }

  &__change_icon {
    @include font_config(700, 1.6rem, 2.4rem);

    border: 1px solid transparent;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    width: fit-content;

    padding: 8px;
    color: $color-txt;
    background-color: $color-white;

    &:hover {
      background-color: $color-gray-04;
      transform: scale(1.2);
    }

    &:active {
      background-color: $color-gray-15;
    }
  }

  &__count {
    display: inline-block;
    padding: 12px 20px;
    border: 1px solid $color-gray-15;
    background-color: $color-white;
    border-radius: 8px;
  }
}

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

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.card {
  &__item {
    max-width: 310px;
    width: 100%;
  }

  &__img {
    &-pic {
      max-width: 310px;
      width: 70%;
      height: 308px;
      object-fit: contain;
    }

    &-block {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: $color-white;
      border-radius: 30px;
      border: 1px solid $color-gray-04;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }

  &__caption {
    @include font_config(400, 1.6rem, 2.4rem);

    color: $color-gray-65;
  }
}
</style>
