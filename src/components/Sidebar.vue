<template>
  <aside>
    <h5>is SideBar</h5>

    <div>{{ msg }}</div>
  </aside>
</template>


<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<style>
</style>
