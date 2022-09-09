<template>
  <teleport to="body">
    <div class="popup" :class="classes">
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts" setup>
interface IAtomPopupProps {
  classes?: string;
  zIndex?: number;
}
withDefaults(defineProps<IAtomPopupProps>(), { zIndex: 2 });
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.popup {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
}
</style>
