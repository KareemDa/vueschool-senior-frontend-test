<template>
  <nuxt-link
    :to="`/posts/${post.id}`"
    class="bg-white shadow-lg rounded-lg overflow-hidden"
  >
    <nuxt-img
      :src="post.image"
      format="webp"
      placeholder
      alt="post image"
      class="w-full object-cover h-48"
    />
    <div class="p-6">
      <h2 class="text-lg font-bold text-gray-800 mb-2">
        {{ post.title }}
      </h2>

      <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>

      <div v-if="post.user" class="flex items-center gap-4">
        <div class="w-10 h-10">
          <nuxt-img
            :src="post.user.avatar"
            class="rounded-full shadow-lg"
            alt="Post User Avatar"
          />
        </div>

        <div>
          <div class="font-semibold text-slate-800">
            {{ post.user.firstName }} {{ post.user.lastName }}
          </div>

          <div class="text-sm text-slate-500">
            {{ useFormattedDate(post.publishedAt) }}
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { PostWithUser } from '~/types'

defineProps<{ post: PostWithUser }>()
</script>

<style scoped></style>
