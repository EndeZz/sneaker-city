<template>
  <Slider
    :modelValue="modelValue"
    :max="maxValue"
    :min="minValue"
    :tooltips="tooltips"
    :lazy="false"
    :step="10"
    @input="handleUpdate"
    class="range__slider"
  />
</template>

<script lang="ts" setup>
import Slider from "@vueform/slider";
import { toRefs } from "vue";

interface IAtomInputRange {
  modelValue: number[];
  maxValue: number;
  minValue: number;
  tooltips?: boolean;
}
const props = withDefaults(defineProps<IAtomInputRange>(), { tooltips: false });

const { modelValue } = toRefs(props);

const emit = defineEmits(["update:modelValue", "setFilter"]);

const handleUpdate = (event: Event) => {
  emit("update:modelValue", event);
  emit("setFilter", event);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.range__slider {
  --slider-bg: rgba(0, 0, 0, 0.15);
  --slider-height: 2px;
  --slider-connect-bg: #000;
  --slider-tooltip-bg: #000;
  --slider-handle-ring-color: rgba(0, 0, 0, 0.15);
  --slider-handle-bg: #000;
}
</style>
