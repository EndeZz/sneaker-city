<template>
  <teleport to="body">
    <div v-if="isShow" @click="handleClosePopup" class="popup" :class="bg">
      <div @click.stop class="popup__content" :class="classes">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
interface IAtomPopupProps {
  bg?: string;
  classes?: string;
  isShow: boolean;
}
withDefaults(defineProps<IAtomPopupProps>(), { isShow: false });

const emit = defineEmits(["update:isShow"]);

const handleClosePopup = () => {
  emit("update:isShow", false);
  document.body.style.overflowY = "visible";
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 5;

  &__content {
    margin: auto;
  }
}
</style>
