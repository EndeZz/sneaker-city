<template>
  <li class="card__item">
    <figure class="card__figure">
      <div class="card__img-block">
        <img :src="image" :alt="title" class="card__img-pic" />
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
