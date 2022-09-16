<template>
  <section class="cart">
    <h2 class="cart__title">Your shopping cart</h2>
    <ul class="cart__list">
      <MoleculeCartItem
        v-for="item in cart"
        :key="item.product.id"
        :item="item"
      />
    </ul>
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

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
  }
}
</style>
