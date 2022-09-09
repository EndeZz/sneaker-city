<template>
  <aside class="sidebar">
    <MoleculeRangeBlock title="Rating range">
      <AtomInputRange
        v-model="ratingValue"
        :maxValue="RATING_CONFIG.MAX"
        :minValue="RATING_CONFIG.MIN"
        :step="1"
        @setFilter="handleUpdateFilter"
      />
      <div class="range__info">
        <p class="range__caption">{{ ratingValue }}</p>
      </div>
    </MoleculeRangeBlock>

    <MoleculeRangeBlock title="Price range">
      <AtomInputRange
        v-model="priceValue"
        :maxValue="PRICE_CONFIG.MAX"
        :minValue="PRICE_CONFIG.MIN"
        @setFilter="handleUpdateFilter"
      />
      <div class="range__info">
        <p class="range__caption">{{ priceValue[0] }}$</p>
        <p class="range__caption">{{ priceValue[1] }}$</p>
      </div>
    </MoleculeRangeBlock>
  </aside>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import AtomInputRange from "@/components/atoms/AtomInputRange.vue";
import MoleculeRangeBlock from "@/components/molecules/MoleculeRangeBlock.vue";
import { PRICE_CONFIG, RATING_CONFIG } from "@/constants/filter.constant";

const ratingValue = ref(0);
const priceValue = ref([PRICE_CONFIG.MIN, PRICE_CONFIG.MAX]);

const filterOptions = reactive({
  price: priceValue,
  rating: ratingValue,
});

const emit = defineEmits(["setFilter"]);

const handleUpdateFilter = () => {
  emit("setFilter", filterOptions);
};
</script>

<style lang="scss" src="@vueform/slider/themes/default.scss"></style>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.sidebar {
  min-width: 260px;
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
