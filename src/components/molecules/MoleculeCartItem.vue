<template>
  <li class="cart__item">
    <div class="cart__info">
      <div class="cart__img-wrapper">
        <img
          :src="item.product.image"
          :alt="item.product.title"
          class="cart__img"
        />
      </div>

      <div class="cart__desc">
        <h3 class="cart__name">{{ item.product.title }}</h3>
        <p class="cart__price">{{ item.product.price.toFixed(2) }}$</p>
      </div>
    </div>

    <MoleculeChangeCount :count="item.count" @updateCount="handleUpdateCount" />

    <p class="cart__result">
      {{ (item.product.price * item.count).toFixed(2) }}$
    </p>
  </li>
</template>

<script lang="ts" setup>
import { ICart, useCartStore } from "@/store/useCartStore";
import { toRefs } from "vue";
import MoleculeChangeCount from "@/components/molecules/MoleculeChangeCount.vue";

interface IMoleculeCartProps {
  item: ICart;
}

const props = defineProps<IMoleculeCartProps>();
const { item } = toRefs(props);

const cartStore = useCartStore();
const { updateAmount } = cartStore;

const handleUpdateCount = (value: number) => {
  updateAmount(item.value.product.id, value);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.cart {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-gray-04;
    padding: 24px 32px;

    display: grid;
    grid-template-columns: minmax(400px, 1fr) auto minmax(100px, 120px);
    align-items: center;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__img {
    max-width: 96px;
    max-height: 80px;
    width: 100%;
    height: 100%;
    object-fit: contain;

    &-wrapper {
      min-width: 96px;
      width: 96px;
      height: 80px;
      background-color: $color-white;
      border: 4px solid $color-white;
      border-radius: 8px;
      padding: 10px;
    }
  }

  &__name {
    @include font_config(400, 1.8rem, 2.6rem);

    color: $color-txt;
  }

  &__price {
    @include font_config(400, 1.6rem, 2.4rem);

    color: $color-gray-65;
  }

  &__result {
    @include font_config(400, 1.8rem, 2.6rem);

    color: $color-txt;
    text-align: end;
  }
}
</style>
