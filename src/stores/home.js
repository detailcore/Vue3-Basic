import { ref } from "vue"
import { defineStore } from "pinia"
import { getAllPosts } from '@/services/api/index.js'


export const useHomeStore = defineStore('homeStore', () => {
  const allPosts = ref([])

  const fetchPosts = async () => {
    const res = await getAllPosts()
    allPosts.value = res.data
  }

  return {
    allPosts,
    fetchPosts,
  }
})