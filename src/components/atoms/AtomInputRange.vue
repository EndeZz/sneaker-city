<template>
  <div class="range__slider">
    <input
      v-model.number="minPrice"
      @change="setRangeSlider"
      type="range"
      min="0"
      max="100"
      step="10"
    />
    <span class="range-min-price">{{ minPrice }}</span>
    <input
      v-model.number="maxPrice"
      @change="setRangeSlider"
      type="range"
      min="0"
      max="100"
      step="10"
    />
    <span class="range-max-price">{{ maxPrice }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const minPrice = ref(0);
const maxPrice = ref(100);

const setRangeSlider = () => {
  if (minPrice.value > maxPrice.value) {
    let tmp = maxPrice.value;
    maxPrice.value = minPrice.value;
    minPrice.value = tmp;
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.range__slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range__slider svg,
.range__slider input[type="range"] {
  position: absolute;
  bottom: 0;
  left: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
