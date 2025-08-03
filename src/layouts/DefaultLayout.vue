<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
const props = defineProps({
    navLinks: Array
})
</script>

<template>
    <Header :nav-Links = "navLinks" ></Header>
    <router-view />
    <Footer></Footer>
</template>

<style>

</style>