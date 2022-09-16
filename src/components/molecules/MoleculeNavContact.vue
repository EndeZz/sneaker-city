<template>
  <div class="contacts">
    <AtomLink :path="routePath.cart.path" class="contacts__item">
      <img src="@/assets/images/icons/fi_shopping-cart.svg" />
      <span v-if="cartLength" class="contacts__notification">{{
        cartLength
      }}</span>
    </AtomLink>
    <AtomLink :path="routePath.cart.path" class="contacts__item">
      <img src="@/assets/images/icons/fi_heart.svg" />
      <span v-if="favoriteLength" class="contacts__notification">{{
        favoriteLength
      }}</span>
    </AtomLink>
    <AtomLink :path="routePath.home.path" class="contacts__item">
      <img src="@/assets/images/icons/fi_user.svg" />
    </AtomLink>
  </div>
</template>

<script lang="ts" setup>
import AtomLink from "@/components/atoms/AtomLink.vue";
import { routePath } from "@/router/route-path";
import { useProductsStore } from "@/store";
import { useCartStore } from "@/store/useCartStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const productStore = useProductsStore();
const { favoriteProducts } = storeToRefs(productStore);

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const favoriteLength = computed(() =>
  favoriteProducts.value.length > 9 ? "..9" : favoriteProducts.value.length
);

const cartLength = computed(() =>
  cart.value.length > 9 ? "..9" : cart.value.length
);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.contacts {
  display: flex;
  gap: 32px;

  &__item {
    position: relative;
    background-color: $color-white;
    border: 1px solid transparent;
  }

  &__notification {
    position: absolute;
    top: -6px;
    right: -12px;

    height: 20px;
    width: 20px;
    align-items: center;
    display: flex;
    justify-content: center;

    background-color: $color-white;
    border-radius: 50%;
    padding: 3px;
  }
}
</style>
