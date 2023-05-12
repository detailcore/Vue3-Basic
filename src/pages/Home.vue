<template>
  <main>
    <h1>
      is Home page
    </h1>

    <div v-for="(post, index) in homeStore.allPosts" :key="index">
      <PrevPost :id="post.id" :idUser="post.userId" :title="post.title" :text="post.body" />
    </div>
  </main>
</template>


<script setup>
import { onBeforeMount } from 'vue'
import { useHomeStore } from '@/stores/home.js'
import PrevPost from '@/components/PrevPost.vue'

const homeStore = useHomeStore()

onBeforeMount(() => {
  homeStore.fetchPosts()
})
</script>