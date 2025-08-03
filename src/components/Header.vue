
<script setup>
import Navbar from './Navbar.vue';
  const navLinks = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: false },
    { id: 3, text: "MOVIES", url: "#", current: true },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: true },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: true },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: true }
  ];
</script>

<template>
          <header class="d-flex justify-content-between align-items-center bg-light p-3">
            <div class="container">
                <div class="row">
                    <div class="col d-flex">
                        <div class="header-content box-logo">
                            <img src="/img/dc-logo.png" alt="DC Logo" class="dc-logo" />
                        </div>
                    </div>
                    <div class="col">
                      <Navbar :nav-links="navLinks"/>
                    </div>
                </div>
            </div>
        </header>
</template>

<style scoped>
.box-logo {
  width: 45px;
  margin: auto 0;
}
.dc-logo {
  width: 100%;
}
</style>
