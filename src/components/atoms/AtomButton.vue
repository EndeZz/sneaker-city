<template>
  <button :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
interface IAtomButtonProps {
  disabled?: boolean;
}

defineProps<IAtomButtonProps>();
</script>
