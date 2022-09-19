<template>
  <aside class="order">
    <h2 class="order__title">Order summary</h2>
    <div class="order__group">
      <ul class="order__info">
        <li class="order__block">
          <p class="order__caption">Sub total</p>
          <p class="order__price">{{ totalResult.toFixed(2) }}$</p>
        </li>
        <li class="order__block">
          <p class="order__caption">Delivery free</p>
          <p class="order__price">0$</p>
        </li>
      </ul>
      <p class="order__result">{{ totalResult.toFixed(2) }}$</p>
    </div>

    <AtomButton @click="handleConfirm" class="order__cart-btn"
      >Proceed to checkout</AtomButton
    >
  </aside>
</template>

<script lang="ts" setup>
import { routePath } from "@/router/route-path";
import { useCartStore } from "@/store/useCartStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";
import AtomButton from "../atoms/AtomButton.vue";

const cartStore = useCartStore();
const { clearCart } = cartStore;
const { cart } = storeToRefs(cartStore);
const router = useRouter();

const totalResult = computed(() =>
  cart.value.reduce((acc, { product, count }) => acc + product.price * count, 0)
);

const handleConfirm = () => {
  clearCart();
  router.push(routePath.home.path);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.order {
  display: flex;
  flex-direction: column;
  max-width: 496px;
  width: 100%;
  min-width: 250px;

  &__title {
    @include font_config(400, 1.8rem, 3.2rem);

    color: $color-txt;
  }

  &__group {
    margin: 32px 0px 64px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 22px;
    border-bottom: 1px solid $color-gray-15;
    padding: 0px 32px 22px 7px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
  }

  &__caption {
    @include font_config(400, 1.6rem, 2.4rem);

    color: $color-gray-65;
  }

  &__price {
    @include font_config(400, 1.6rem, 2.4rem);

    color: $color-txt;
  }

  &__result {
    text-align: end;
    padding: 24px 32px 0px 7px;
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

    padding: 10px 28px;
    color: $color-white;
    background-color: $color-red-2;

    &:hover {
      background-color: $color-red-1;
    }

    &:active {
      background-color: darken($color-red-2, 10);
    }
  }
}
</style>
