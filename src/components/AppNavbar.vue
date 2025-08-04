<script setup>
  const { navLinks } = defineProps({
    navLinks: Array,
  });
  console.log(navLinks);
</script>
<template>
  <nav class="navbar navbar-expand-md p-0">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="link in navLinks" :key="link.id" class="nav-item">
          <a
            :class="`nav-link ${link.id === 3 ? 'act' : ''}`"
            :href="link.url"
            >{{ link.text }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  /* Navbar */
  .navbar-nav {
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
  }

  .navbar-nav .nav-link {
    font-size: 0.7rem;
    font-family: "Open Sans";
    color: #000;
    padding: 0.7rem;
  }

  /* Navbar Effetto Hover */
  .navbar-nav .nav-link:hover {
    color: #007bff;
  }

  /* Effetto Active */
  .navbar-nav .act {
    color: #007bff;
    border-bottom: 1px solid #007bff;
  }

  @media (max-width: 768px) {
    .navbar-collapse {
      position: absolute;
      top: 120%;
      width: 100%;
      z-index: 1050;
      background-color: #f8f9fa;
    }

    .navbar-nav {
      width: 100%;
    }

    .navbar-nav .nav-item {
      width: 100%;
      text-align: center;
      border: 1px solid rgba(128, 128, 128, 0.538);
    }
  }
</style>
