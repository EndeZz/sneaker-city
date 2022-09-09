<template>
  <img src="@/assets/images/loader.png" alt="Loader" class="loader" />
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  animation: loaderAnimation 1.2s linear infinite;
}

@keyframes loaderAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
