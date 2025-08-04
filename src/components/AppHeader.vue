
<script setup>
import AppNavbar from './AppNavbar.vue';
const {navLinks} = defineProps({
    navLinks: Array
})
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
                      <AppNavbar :nav-links="navLinks"/>
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
