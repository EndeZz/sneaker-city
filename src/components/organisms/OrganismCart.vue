<template>
  <section class="cart">
    <h2 class="cart__title">Your shopping cart</h2>
    <TransitionGroup
      tag="ul"
      v-if="cart.length"
      name="cart__list"
      class="cart__list"
    >
      <MoleculeCartItem
        v-for="item in cart"
        :key="item.product.id"
        :item="item"
      />
    </TransitionGroup>

    <p v-else class="cart__caption">Cart is empty...</p>
  </section>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/store/useCartStore";
import { storeToRefs } from "pinia";
import MoleculeCartItem from "@/components/molecules/MoleculeCartItem.vue";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.cart {
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;

  &__title {
    @include font_config(400, 2.4rem, 3.2rem);

    color: $color-txt;
  }

  &__caption {
    @include font_config(400, 1.8rem, 2.6rem);

    color: $color-txt;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;

    &-move,
    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateY(30px);
      transform: translateX(30px);
    }

    &-leave-active {
      position: absolute;
    }
  }
}
</style>
