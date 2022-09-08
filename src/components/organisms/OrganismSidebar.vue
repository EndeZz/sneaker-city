<template>
  <aside class="sidebar">
    <section class="sidebar__section">
      <h3 class="sidebar__title">Rating</h3>
    </section>

    <section class="sidebar__section">
      <h3 class="sidebar__title">Price range</h3>

      <div class="range">
        <AtomInputRange
          v-model="rangeValue"
          :maxValue="maxValue"
          :minValue="minValue"
          @setFilter="handleUpdateFilter"
        />
        <div class="range__info">
          <p class="range__caption">{{ rangeValue[0] }}$</p>
          <p class="range__caption">{{ rangeValue[1] }}$</p>
        </div>
      </div>
    </section>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AtomInputRange from "@/components/atoms/AtomInputRange.vue";

const minValue = ref(0);
const maxValue = ref(200);
const rangeValue = ref([minValue.value, maxValue.value]);

const emit = defineEmits(["setFilter"]);

const handleUpdateFilter = () => {
  emit("setFilter", rangeValue.value);
};
</script>

<style lang="scss" src="@vueform/slider/themes/default.scss"></style>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.sidebar {
  min-width: 260px;

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
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 16px;
}

.range {
  margin-top: 16px;

  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__caption {
    @include font_config(400, 1.2rem, 2.2rem);

    color: $color-txt;
    margin-top: 12px;
  }
}
</style>
