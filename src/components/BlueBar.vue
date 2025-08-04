<script setup>
  const { shopbox } = defineProps({
    shopbox: Array,
  });
  console.log(shopbox);
</script>

<template>
  <section class="blue-bar">
    <div class="container shop-box">
      <div v-for="shop in shopbox" :key="shop.id" class="card-link">
        <a href="#">
          <div class="box-card-img">
            <img :src="shop.imgSrc" :alt="shop.label" />
          </div>
          <div class="box-card-txt">{{ shop.label }}</div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  /* Barra Blu con icone */
  .blue-bar {
    background-color: #007bff;
  }

  .shop-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0;
  }

  .card-link {
    margin: auto 10px;
  }

  .card-link a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    font-size: 12px;
  }

  .box-card-img {
    width: 30px;
    margin: auto 10px;
    transition: 1.5s;
  }

  .box-card-img img {
    width: 100%;
  }

  .card-link .box-card-txt {
    margin: 0;
    position: relative;
  }

  /* card text pseudo elemnt for underline bar */
  .card-link .box-card-txt::after {
    content: "";
    position: absolute;
    left: 0;
    /* Distanza dalla scritta */
    bottom: -2px;
    width: 0;
    /* Spessore della linea */
    height: 2px;
    background-color: white;
    transition: width 1s ease-in-out;
  }

  /* card hover effect */
  .card-link a:hover .box-card-img {
    width: 50px;
    transition: 1.5s;
    transform: scale(1.2) rotate(-5deg);
  }

  .card-link a:hover .box-card-txt::after {
    width: 100%;
  }
</style>
