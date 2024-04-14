<template>
  <div class="relative">
    <nuxt-img
      class="absolute inset-0 w-full h-full object-cover"
      alt="Post Image"
      :src="post?.image"
    />

    <div class="relative container max-w-5xl py-16 lg:py-24">
      <div class="article-header-card">
        <!-- post Title -->
        <h1 class="text-3xl font-bold text-slate-900">{{ post?.title }}</h1>

        <h2 class="text-lg md:text-xl max-w-xl text-slate-800">
          {{ post?.excerpt }}
        </h2>

        <div class="flex gap-4">
          <div class="w-16 h-16">
            <img
              :src="post?.user.avatar"
              class="rounded-full"
              alt="Post User Avatar"
            />
          </div>

          <div>
            <div class="text-lg font-medium text-slate-800">
              {{ post?.user.firstName }} {{ post?.user.lastName }}
            </div>

            <div class="text-slate-700">
              {{ useFormattedDate(post!.publishedAt) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container max-w-5xl py-12">
    <!-- NOTE: here there is some images that is received from API with not alt -->
    <!-- so you might find missing score in the SEO, Accessibility  -->
    <!-- in real word, the alt content can be added from the admin panel while uploading the image  -->
    <div class="article-content" v-html="post?.content" />

    <link-btn to="/posts">Back To Posts</link-btn>
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from '~/types'
const route = useRoute()

// compute the slug
const slug = computed(() => route.params.slug)

// fetch post
const { data: post } = await useFetch<PostWithUser>(
  `/api/posts/${slug.value}`,
  {
    query: {
      include: 'user'
    }
  }
)

// handle wrong slug
// for more complex scenarios, we might use useAsyncData, and handle multiple error codes
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

// SEO Optimization
useSeoMeta({
  title: post.value.title,
  ogTitle: post.value.title,
  twitterTitle: post.value.title,
  ogImageAlt: post.value.title,

  description: post.value.excerpt,
  ogDescription: post.value.excerpt,
  twitterDescription: post.value.excerpt,

  ogImage: post.value.image,
  twitterImage: post.value.image,
  ogImageUrl: post.value.image
})

useSchemaOrg([
  defineArticle({
    thumbnailUrl: post.value.image,
    image: post.value.image,
    wordCount: post.value.content?.length,

    author: {
      '@type': 'Person',
      name: `${post.value.user.firstName} ${post.value.user.lastName}`,
      image: post.value.user.avatar
    },

    datePublished: post.value.publishedAt
  })
])
</script>

<style lang="scss">
.article-header-card {
  @apply flex flex-col gap-4 rounded-lg p-4 bg-white bg-opacity-20 border border-zinc-200;
  backdrop-filter: blur(10px);
}
.article-content {
  @apply text-lg text-slate-700;
  > * {
    @apply mb-4;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold text-slate-900;
  }

  h2 {
    @apply text-3xl mt-8;
  }

  h3 {
    @apply text-2xl mt-6;
  }

  h4 {
    @apply text-xl mt-4;
  }

  h5 {
    @apply text-lg mt-2;
  }

  ol {
    @apply list-decimal list-inside;
  }

  ul {
    @apply list-disc list-inside;
  }

  img {
    @apply object-cover rounded-md shadow-2xl;
  }
}
</style>
