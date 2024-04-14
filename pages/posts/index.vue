<template>
  <div ref="postsElement" class="h-screen overflow-auto">
    <div class="container my-12">
      <h1 class="text-4xl text-center text-slate-900 font-black mb-2">
        Da Vue Blog
      </h1>

      <div class="text-slate-500 text-xl text-center mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas beatae
        perspiciatis iste veritatis quidem
      </div>

      <order-switch />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <post-card v-for="post in posts" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from '~/types'
import { useInfiniteScroll } from '@vueuse/core'

const route = useRoute()

const offset = ref<number>(0)
const posts = ref<PostWithUser[]>([])

// compute the slug
const query = computed(() => ({
  order: route.query.order ?? 'oldestFirst',
  limit: 10,
  offset: offset.value,
  include: 'user',
  select:
    'id,title,excerpt,publishedAt,image,user.firstName, user.lastName, user.avatar'
}))

const postsElement = ref<HTMLElement>()

// fetch posts
const { refresh, pending } = await useAsyncData(async () => {
  const data = await $fetch<PostWithUser[]>('/api/posts', {
    params: query.value
  })

  posts.value.push(...data)
})

// get more posts by increasing the offset and re-call the fetch API
const onLoadMore = () => {
  // prevent initial call when page load
  if (pending.value) return

  console.log('load more called', pending.value)
  // increase offset
  offset.value += 10

  // get more posts
  refresh()
}

// it's called when we reached the bottom of the reference element
useInfiniteScroll(postsElement, onLoadMore)

// watch query change in order to change the sort and recall the API
watch(
  () => route.query.order,
  () => {
    // reset offset
    offset.value = 0

    // reset the list
    posts.value = []

    // recall the fetch
    refresh()
  }
)
</script>

<style scoped></style>
