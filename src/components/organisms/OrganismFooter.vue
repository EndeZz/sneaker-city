<template>
  <footer class="footer">
    <div class="footer__contact">
      <div class="footer__info">
        <p>Don’t missout on once-in-a-while-deals:</p>
        <div class="footer__info-group">
          <div class="footer__info-img">
            <a
              class="footer__info-link"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/images/icons/fi_twitter.svg"
                alt="Twitter Icon"
              />
            </a>
          </div>
          <div class="footer__info-img">
            <a
              class="footer__info-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/images/icons/fi_instagram.svg"
                alt="Instagram Icon"
              />
            </a>
          </div>
          <div class="footer__info-img">
            <a
              class="footer__info-link"
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/images/icons/fi_facebook.svg"
                alt="Facebook Icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="footer__info">
        <p>Support line:</p>
        <a href="tel:+250788467808" class="footer__link"> +250 788 467 808</a>
      </div>
    </div>

    <div class="footer__copyright">
      <p class="footer__caption">Copyright 2021 © Sneaker City ltd</p>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.footer {
  @include font_config(400, 1.6rem, 2.4rem);

  display: grid;
  grid-template-columns: auto 212px;
  justify-content: space-between;
  align-items: center;
  margin-top: 92px;
  border-top: 1px solid $color-gray-15;
  padding: 32px 0;
  color: $color-gray-65;

  &__contact {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 100px;
  }

  &__copyright {
    margin-right: 30px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 12px;

    &-group {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    &-link {
      text-decoration: none;
    }

    &-img {
      padding: 8px;
      background-color: $color-gray-04;
      border-radius: 8px;
      transition: all 0.2s ease;
      cursor: pointer;
      height: 32px;
      width: 32px;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &__link {
    color: $color-gray-65;
    text-decoration: none;

    &:hover {
      color: $color-red-1;
    }
  }
}
</style>
