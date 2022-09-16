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

    <AtomPopup v-model:isShow="isShow" classes="details__wrapper" bg="details">
      <section class="details__content">
        <header class="details__header">
          <div class="details__info">
            <h2 class="details__title">{{ activeProduct?.title }}</h2>
            <p class="details__price">{{ activeProduct?.price }}$</p>
          </div>
          <AtomButton class="details__favorite" @click="handleAddToFavorite">
            <AtomIconFavorite :isFavorite="activeProduct?.isLiked" />
          </AtomButton>
        </header>

        <AtomSlider
          :activeProduct="activeProduct"
          @clickOnSlider="handleClickOnSlider"
        />
      </section>

      <aside class="details__sidebar">
        <AtomAccordion
          title="Description"
          :description="activeProduct && activeProduct.description"
          :isActive="isDescActive"
          @toggleAccordion="handleToggleAccordion"
        />

        <div class="details__block">
          <MoleculeChangeCount
            :count="currentAmount"
            @updateCount="handleUpdateCount"
          />
          <AtomButton
            @click="handleAddToCart"
            :disabled="currentAmount <= 0"
            class="details__cart-btn"
            >Add to cart</AtomButton
          >
        </div>
      </aside>
    </AtomPopup>
  </li>
</template>

<script lang="ts" setup>
import { fetchProduct } from "@/utils/api/apiRequests";
import { computed, reactive, ref, toRefs } from "vue";
import AtomPopup from "@/components/atoms/AtomPopup.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
import AtomAccordion from "@/components/atoms/AtomAccordion.vue";
import { IProduct } from "@/models/product.interfaces";
import AtomSlider from "@/components/atoms/AtomSlider.vue";
import AtomIconFavorite from "@/components/atoms/AtomIconFavorite.vue";
import MoleculeChangeCount from "@/components/molecules/MoleculeChangeCount.vue";
import { useProductsStore } from "@/store";
import { setNewProduct } from "@/utils";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "vue-router";
import { routePath } from "@/router/route-path";

interface IMoleculeCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const productStore = useProductsStore();
const { addToFavorite, removeFromFavorite } = productStore;
const { favoriteProducts } = storeToRefs(productStore);

const cartStore = useCartStore();
const { addToCart } = cartStore;

const props = defineProps<IMoleculeCardProps>();
const { id } = toRefs(props);
const isShow = ref<boolean>(false);
const isDescActive = ref<boolean>(true);
const activeProduct = ref<IProduct>();
const currentAmount = ref(1);
const router = useRouter();

const handleClickOnProduct = async () => {
  document.body.style.overflowY = "hidden";
  isShow.value = true;
  activeProduct.value = await fetchProduct(id.value);
  setNewProduct(activeProduct.value);
};

const handleClickOnSlider = async (id: number) => {
  activeProduct.value = await fetchProduct(id);
  setNewProduct(activeProduct.value);
};

const handleToggleAccordion = () => {
  isDescActive.value = !isDescActive.value;
};

const currentFavoriteValue = computed(() =>
  favoriteProducts.value.find(
    (productId) => productId === activeProduct?.value?.id
  )
);

const handleAddToFavorite = () => {
  if (!activeProduct.value) return;

  if (currentFavoriteValue.value) {
    removeFromFavorite(activeProduct.value.id);
    activeProduct.value.isLiked = false;
  } else {
    addToFavorite(activeProduct.value.id);
    activeProduct.value.isLiked = true;
  }
};

const handleUpdateCount = (value: number) => {
  currentAmount.value = value;
};

const handleAddToCart = () => {
  if (!activeProduct.value) return;

  const data = reactive({
    product: activeProduct.value,
    count: currentAmount.value,
  });
  addToCart(data);
  document.body.style.overflowY = "visible";
  router.push(routePath.cart.path);
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.details {
  overflow-y: auto;
  padding: 20px;
  background-color: $color-gray-65;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__content {
    width: 100%;
    min-width: 820px;
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
    border: 0;
    background: 0;
    cursor: pointer;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 8px;

    &:hover {
      transform: scale(1.2);
      background-color: $color-gray-04;
    }

    &:active {
      transform: scale(1.1);
      background-color: $color-gray-15;
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
    max-width: 496px;
    width: 100%;
    min-width: 400px;
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

    &:disabled {
      background-color: $color-gray-15;
      opacity: 0.4;
      pointer-events: none;
      cursor: not-allowed;
    }
  }

  &__block {
    display: flex;
    gap: 28px;
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
