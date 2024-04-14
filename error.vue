<template>
  <div class="container min-h-screen flex items-center justify-center flex-col">
    <h1 class="text-9xl font-black mb-8">{{ error?.statusCode }}</h1>

    <template v-if="error?.statusCode == 404">
      <h2 class="text-7xl font-light mb-2">Oops!</h2>
      <h3 class="text-3xl mb-12">You've Found the Secret Page!</h3>
    </template>

    <link-btn to="/posts">Back to Posts</link-btn>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({ error: Object as () => NuxtError })

const handleError = () => clearError({ redirect: '/' })
</script>
