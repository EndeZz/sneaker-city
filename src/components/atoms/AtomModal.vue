<template>
  <teleport to="body">
    <div class="modal" :class="classes">
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts" setup>
interface IAtomModalProps {
  classes?: string;
}
defineProps<IAtomModalProps>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.modal {
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
}
</style>
