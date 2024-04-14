<template>
  <div class="order-switch">
    <button
      class="order-switch-btn"
      :class="!route.query.order && 'active'"
      @click="router.push('/posts')"
    >
      Oldest First
    </button>

    <button
      class="order-switch-btn"
      :class="route.query.order == 'newestFirst' && 'active'"
      @click="
        router.push({
          name: 'posts',
          query: { order: 'newestFirst' }
        })
      "
    >
      Newest First
    </button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
</script>

<style scoped>
.order-switch {
  @apply flex items-center max-w-xl rounded-lg border border-slate-600 overflow-hidden mb-6 mx-auto;
}

.order-switch-btn {
  @apply w-1/2 text-center border border-slate-600 font-medium transition-all py-1;
}

.order-switch-btn:not(.active) {
  @apply text-slate-600 bg-white;
}

.order-switch-btn.active {
  @apply text-white bg-slate-600;
}
</style>
