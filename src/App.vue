<template>
    <Header />

    <router-view />

    <Sidebar msg="this is props in sidebar" />

    <Footer />
</template>


<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>