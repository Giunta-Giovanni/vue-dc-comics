<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
const {navLinks} = defineProps({
    navLinks: Array
})
</script>

<template>
    <AppHeader :nav-Links = "navLinks" ></AppHeader>
    <router-view />
    <AppFooter></AppFooter>
</template>

<style>

</style>