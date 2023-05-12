<template>
  <article class="item">
    <h3 class="title">{{ title }}</h3>
    <div class="desc">{{ text }}</div>
  </article>
</template>


<script setup>
defineProps({
  id: { type: Number, required: true },
  idUser: { type: Number, default: '' },
  title: { type: String, default: '' },
  text: { type: String, default: '' },
})
</script>


<style lang="scss">
  .item {
    margin: 16px 0;
    .title {
      font-weight: bold;
      text-transform: uppercase;
    }
    .desc {
      text-indent: 20px;
    }
  }
</style>
