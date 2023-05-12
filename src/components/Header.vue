<template>
  <header>
    <div>is Header</div>

    User store (loggedIn): {{ loggedIn }}

    <nav>
      <router-link to="/">Home</router-link>
      <span class="divide"> || </span>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>


<script setup>
import { useUserStore } from '@/stores/user.js'

const { loggedIn } = useUserStore()
</script>


<style lang="scss">
  nav {
    .router-link-active {
      font-weight: bold;
    }
  }
</style>
