<template>
  <div class="img-icon">
    <img src="{{imgPath}}" alt="{{alt}}" />
  </div>
</template>

<script lang="ts" setup>
interface IAtomIconProps {
  imgPath: string;
  alt?: string;
}

withDefaults(defineProps<IAtomIconProps>(), { alt: "Icon" });
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.img-icon {
  width: 24px;
  height: 24px;
}
</style>
