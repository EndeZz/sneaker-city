<template>
  <section class="accordion">
    <header class="accordion__header" @click="handleToggle">
      <h3 class="accordion__title">{{ title }}</h3>
      <div
        class="accordion__arrow"
        :class="{ accordion__arrow_active: isActive }"
      >
        <img src="@/assets/images/icons/arrow-top.svg" alt="Arrow top icon" />
      </div>
    </header>

    <div class="accordion__content" :class="{ hidden: !isActive }">
      <p class="accordion__desc">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

interface IAtomAccordionProps {
  title: string;
  description: string | undefined | null;
  isActive: boolean;
}
const props = defineProps<IAtomAccordionProps>();
const { isActive } = toRefs(props);

const emit = defineEmits(["toggleAccordion"]);

const handleToggle = () => {
  emit("toggleAccordion");
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.accordion {
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-bottom: 1px solid $color-gray-15;
  padding-bottom: 32px;

  &__header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  &__arrow {
    &_active {
      transform: rotate(180deg);
    }
  }

  &__content {
  }

  &__title {
    @include font_config(400, 1.6rem, 2.4rem);

    color: $color-txt;
  }

  &__desc {
    @include font_config(400, 1.6rem, 2.4rem);

    color: $color-gray-65;
  }
}
</style>
