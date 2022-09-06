<template>
  <teleport to="body">
    <div class="modal">
      <div>Modal</div>
    </div>
  </teleport>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.modal {
  background-color: bisque;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>
