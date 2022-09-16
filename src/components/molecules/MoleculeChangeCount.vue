<template>
  <div class="change__block">
    <AtomButton class="change__btn" @click="handleClickDecrement">
      <img
        class="slider__icon"
        src="@/assets/images/icons/fi_minus.svg"
        alt="Minus icon"
      />
    </AtomButton>
    <p class="change__count">{{ currentCount }}</p>
    <AtomButton class="change__btn" @click="handleClickIncrement">
      <img
        class="change__icon"
        src="@/assets/images/icons/fi_plus.svg"
        alt="Plus icon"
      />
    </AtomButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import AtomButton from "../atoms/AtomButton.vue";

interface IMoleculeChangeCountProps {
  count: number;
}

const props = defineProps<IMoleculeChangeCountProps>();
const { count } = toRefs(props);
const currentCount = ref(count.value);

const emit = defineEmits(["updateCount"]);

const handleClickDecrement = () => {
  if (currentCount.value <= 0) return;

  currentCount.value--;
  emit("updateCount", currentCount.value);
};

const handleClickIncrement = () => {
  currentCount.value++;
  emit("updateCount", currentCount.value);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.change {
  &__block {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__btn {
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    padding: 8px;
    background-color: transparent;

    &:hover {
      background-color: $color-gray-04;
      transform: scale(1.2);
    }

    &:active {
      background-color: $color-gray-15;
    }
  }

  &__count {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 48px;
    height: 48px;
    padding: 12px 20px;
    border: 1px solid $color-gray-15;
    background-color: transparent;
    border-radius: 8px;
  }
}
</style>
