<script setup>
  import AppHeader from "../components/AppHeader.vue";
  import AppFooter from "../components/AppFooter.vue";
  const {
    navLinks,
    categoryLinks1,
    categoryLinks2,
    categoryLinks3,
    categoryLinks4,
  } = defineProps({
    navLinks: Array,
    categoryLinks1: Array,
    categoryLinks2: Array,
    categoryLinks3: Array,
    categoryLinks4: Array,
  });
</script>

<template>
  <AppHeader :nav-Links="navLinks"></AppHeader>
  <router-view />
  <AppFooter
    :category-Links1="categoryLinks1"
    :category-Links2="categoryLinks2"
    :category-Links3="categoryLinks3"
    :category-Links4="categoryLinks4"
  />
</template>

<style></style>
