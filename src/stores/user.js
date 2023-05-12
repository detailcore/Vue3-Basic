import { defineStore } from "pinia"
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
  const user = ref([])
  const loggedIn = ref(false)

  return {
    user,
    loggedIn,
  }
})