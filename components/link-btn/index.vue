<template>
  <nuxt-link class="btn-link">
    <slot />

    <div class="line" />
  </nuxt-link>
</template>

<style scoped>
.btn-link {
  @apply text-slate-800 inline-block font-semibold;

  .line {
    @apply w-0 h-px transition-all bg-slate-800;
  }

  &:hover {
    @apply text-slate-900;
    .line {
      @apply w-full text-slate-900;
    }
  }
}
</style>
