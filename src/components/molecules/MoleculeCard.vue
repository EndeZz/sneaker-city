<template>
  <li class="card__item">
    <figure class="card__figure">
      <div class="card__img-block">
        <img :src="image" alt="" class="card__img-pic" />
      </div>

      <figcaption class="card__info">
        <h3 class="card__title">J{{ title }}</h3>
        <p class="card__caption">{{ price }}$</p>
      </figcaption>
    </figure>
  </li>
</template>

<script lang="ts" setup>
interface IMoleculeCardProps {
  title: string;
  price: number;
  image: string;
}

defineProps<IMoleculeCardProps>();
</script>

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
      width: 100%;
      height: 310px;
      object-fit: contain;
    }

    &-block {
      background-color: $color-gray-04;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
