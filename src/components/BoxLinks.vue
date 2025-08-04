<script setup>
  const { linkCategory } = defineProps({
    linkCategory: Array,
  });
</script>

<template>
  <ul>
    <li v-for="link in linkCategory" :key="link.id">
      <a :href="link.url">{{ link.text }}</a>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    font-size: 13px;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    transition: color 0.5s ease, text-shadow 0.5s ease, 0.5s;
  }

  /* boxlink hover effect */
  a:hover {
    color: yellow;
    text-shadow: 0 0 10px yellow, 0 0 20px orange, 0 0 30px red;
    transform: scale(1.2) rotate(-5deg);
  }
</style>
