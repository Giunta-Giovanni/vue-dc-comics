<script setup>
  // components
  import AppJumbo from "../components/AppJumbo.vue";
  import AppCards from "../components/AppCards.vue";
  import BlueBar from "../components/BlueBar.vue";

  // data
  import comics from "../data/comics.js";
  import shopbox from "../data/shopbox.js";
</script>

<template>
  <AppJumbo />
  <AppCards :comics="comics" />
  <BlueBar :shopbox="shopbox" />
</template>

<style scoped></style>
