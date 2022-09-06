<template>
  <main class="main container">
    <aside class="sidebar">
      <section class="sidebar__section">
        <h3 class="sidebar__title">Brand</h3>
        <ul class="brand">
          <li class="brand__item">
            <label class="brand__label">
              <input type="checkbox" />
              <span>Jordan</span>
            </label>
          </li>
          <li class="brand__item">
            <label class="brand__label">
              <input type="checkbox" />
              <span>Adidas</span>
            </label>
          </li>
          <li class="brand__item">
            <label class="brand__label">
              <input type="checkbox" />
              <span>Fila</span>
            </label>
          </li>
        </ul>
      </section>
      <section class="sidebar__section">
        <h3 class="sidebar__title">Price range</h3>
        <input type="range" />
      </section>
    </aside>
    <section class="content">
      <h2 class="content__title">The new arrivals</h2>

      <ul class="card">
        <li class="card__item">
          <figure class="card__figure">
            <div class="card__img-block">
              <img
                src="@/assets/images/shoes.png"
                alt=""
                class="card__img-pic"
              />
            </div>

            <figcaption class="card__info">
              <h3 class="card__title">Jordan Delta</h3>
              <p class="card__caption">78.0000RWF</p>
            </figcaption>
          </figure>
        </li>
        <li class="card__item">
          <figure class="card__figure">
            <div class="card__img-block">
              <img
                src="@/assets/images/shoes.png"
                alt=""
                class="card__img-pic"
              />
            </div>

            <figcaption class="card__info">
              <h3 class="card__title">Jordan Delta</h3>
              <p class="card__caption">78.0000RWF</p>
            </figcaption>
          </figure>
        </li>
        <li class="card__item">
          <figure class="card__figure">
            <div class="card__img-block">
              <img
                src="@/assets/images/shoes.png"
                alt=""
                class="card__img-pic"
              />
            </div>

            <figcaption class="card__info">
              <h3 class="card__title">Jordan Delta</h3>
              <p class="card__caption">78.0000RWF</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.main {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.sidebar {
  max-width: 260px;
  width: 100%;

  &__section {
    padding: 32px;
    border-bottom: 1px solid $color-gray-15;

    &:last-child {
      border-bottom: none;
    }
  }

  &__title {
    @include font_config(400, 1.6rem, 2.4rem);
  }

  &__size {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
  }
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 16px;

  &__label {
    @include font_config(400, 1.4rem, 1.8rem);

    display: flex;
    align-items: center;
    gap: 12px;
    color: $color-gray-65;
  }
}

.content {
  padding-top: 32px;
  padding-left: 64px;

  &__title {
    @include font_config(700, 2.4rem, 3.2rem);
  }
}

.card {
  display: flex;
  flex-wrap: wrap;
  gap: 64px 24px;
  margin-top: 32px;

  &__item {
    max-width: 310px;
    width: 100%;
  }

  &__img {
    &-pic {
      max-width: 310px;
      width: 100%;
      max-height: 310px;
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
