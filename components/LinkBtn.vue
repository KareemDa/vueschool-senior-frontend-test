<template>
  <nuxt-link class="btn-link">
    <slot></slot>

    <div class="line" />
  </nuxt-link>
</template>

<style scoped>
.btn-link {
  @apply relative inline-flex flex-col font-bold text-slate-900;

  .line {
    @apply h-0.5 w-0 transition-all bg-slate-700;
  }

  &:hover .line {
    @apply w-full;
  }
}
</style>
