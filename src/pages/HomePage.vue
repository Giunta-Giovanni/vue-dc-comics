<script setup>

// components
import AppJumbo from '../components/AppJumbo.vue';
import AppCards from '../components/AppCards.vue';

// data
import comics from '../data/comics.js';


</script>

<template>
    <AppJumbo />
    <AppCards :comics = "comics"/>
</template>

<style scoped>

</style>