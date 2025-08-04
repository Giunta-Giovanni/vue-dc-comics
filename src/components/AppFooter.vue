<script setup>
  import BoxLinks from "./BoxLinks.vue";

  const { categoryLinks1, categoryLinks2, categoryLinks3, categoryLinks4 } =
    defineProps({
      categoryLinks1: Array,
      categoryLinks2: Array,
      categoryLinks3: Array,
      categoryLinks4: Array,
    });
</script>

<template>
  <footer>
    <div class="footer-link">
      <div class="container">
        <div class="dc-image-bg"></div>

        <!-- box link  -->
        <div class="d-flex box-link">
          <div class="link-col">
            <h5>DC COMICS</h5>
            <BoxLinks :link-Category="categoryLinks1" />

            <h5>SHOP</h5>
            <BoxLinks :link-Category="categoryLinks2" />
          </div>
          <div class="link-col">
            <h5>DC</h5>
            <BoxLinks :link-Category="categoryLinks3" />
          </div>
          <div class="link-col">
            <h5>SITES</h5>
            <BoxLinks :link-Category="categoryLinks4" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-social">
      <div class="container social">
        <div class="row">
          <!-- colonna sinistra  -->
          <div class="col">
            <!-- pulsante iscriviti -->
            <button type="button" class="btn-sign">SIGN-UP NOW!</button>
          </div>

          <!-- colonna destra -->
          <div class="col col-chl">
            <!-- Social -->
            <p>FOLLOW US</p>
            <ul class="channel">
              <li class="single-channel">
                <a href="#">
                  <img src="/img/footer-facebook.png" alt="" />
                </a>
              </li>
              <li class="single-channel">
                <a href="">
                  <img src="/img/footer-twitter.png" alt="" />
                </a>
              </li>
              <li class="single-channel">
                <a href="">
                  <img src="/img/footer-youtube.png" alt="" />
                </a>
              </li>
              <li class="single-channel">
                <a href="">
                  <img src="/img/footer-pinterest.png" alt="" />
                </a>
              </li>
              <li class="single-channel">
                <a href="">
                  <img src="/img/footer-periscope.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  /*********** FOOTER ***********/

  /* Boxlinks */
  .footer-link {
    background-image: url(../public/img/footer-bg.jpg);
  }

  .footer-link .container {
    position: relative;
    overflow: hidden;
  }

  .dc-image-bg {
    background-image: url(../public/img/dc-logo-bg.png);
    width: 550px;
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 0px;
    top: -100px;
  }

  .box-link {
    color: white;
    padding: 20px 0;
    width: 45%;
    text-align: left;
    font-family: "Open Sans";
  }

  .link-col {
    width: 33%;
  }

  .box-link h5 {
    font-size: 15px;
  }

  /* social & subscription */
  .footer-social {
    background-color: #303030;
    font-family: "Open Sans";
  }

  footer .row {
    height: 80px;
  }

  footer .col {
    display: flex;
    align-items: center;
  }

  .footer-nav {
    height: 300px;
    text-align: left;
  }

  .footer-nav h3 {
    font-size: 15px;
    color: white;
  }

  .footer-nav ul {
    margin: 0;
    padding: 0;
  }

  .footer-nav a {
    margin: 0;
    padding: 0;
    color: rgba(198, 198, 198, 0.833);
  }

  .btn-sign {
    background: none;
    color: white;
    border-color: #0282f9;
    height: 40px;
    padding: auto;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 15px;
  }

  .col-chl {
    display: flex;
    justify-content: end;
  }

  .col-chl p {
    margin: auto 0;
    color: #0282f9;
  }

  .channel {
    display: flex;
    margin: auto 0;
  }

  .single-channel {
    padding-left: 10px;
    margin-left: 10px;
    width: 50px;
  }

  .single-channel img {
    width: 100%;
  }
</style>
