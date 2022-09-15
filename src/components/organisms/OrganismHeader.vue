<template>
  <header class="header">
    <nav class="navbar">
      <MoleculeNavLogo />

      <MoleculeNavRoutes />

      <MoleculeNavContact />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import MoleculeNavContact from "@/components/molecules/MoleculeNavContact.vue";
import MoleculeNavRoutes from "@/components/molecules/MoleculeNavRoutes.vue";
import MoleculeNavLogo from "@/components/molecules/MoleculeNavLogo.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.header {
  width: 100%;
  border-bottom: 1px solid $color-gray-15;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 32px 18px;
}
</style>
