<script setup lang="ts"></script>

<template>
  <div class="example-component">
    <p class="vue">Vue works</p>
    <p class="scss">SCSS works</p>
    <p class="text-[#38bdf8]">Tailwind works</p>
  </div>
</template>

<style scoped lang="scss">
.example-component {
  .vue {
    color: var(--color-vue);
  }

  .scss {
    color: var(--color-scss);
  }
}
</style>
