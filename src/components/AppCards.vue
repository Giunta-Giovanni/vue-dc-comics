<script setup>

const {comics} = defineProps({
  comics:Array
})

</script>

<template>
 <section className="content-box">
            <div className="container">
                <div className="box-bk-card">
                  <div v-for="card in comics" :key="card.id" className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
                      <div className="bk-card-box-image">
                          <img className="bk-card-image" :src=card.thumb :alt=card.series />
                            <div className="bk-card-retro">
                                <p>{{card.title}}</p>
                                <p>{{card.type}}</p>
                                <p>{{card.sale_date}}</p>
                                <p>{{card.price}}</p>
                            </div>
                      </div>
                      <div className="bk-card-text">
                          <p>{{card.series}}</p>
                      </div>
                  </div>

                </div>
            </div>
        </section >
</template>



<style scoped>

/* Banner Nero */
.content-box {
  color: white;
  font-family: "Open Sans";
  text-align: left;
  padding: 20px 0;
}

.content-box h2 {
  font-size: 20px;
}

/* Card */
.box-bk-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.bk-card {
  margin: 5px;
  position: relative;
  /* debug */
  /* border: 1px solid green; */
}

.bk-card-box-image {
  width: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  transition: 1s;
}

.bk-card-image {
  width: 100%;
  position: absolute;
  top: 0px;
  backface-visibility: hidden;

}

.bk-card-retro {
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  background-image: url(../public/img/footer-bg.jpg);
}

.bk-card-retro p {
  text-align: center;
}


.bk-card-box-image:hover {
  transform: rotateY(180deg);
  transition: transform 2s;
}

.bk-card-box-image:hover .bk-card-retro {
  display: block;
  opacity: 1;
  transform: rotateY(180deg);
  transition: opacity 1s ease-in-out 0.5s;

}

.bk-card-text {
  text-align: center;
  font-family: "Open Sans";
  color: white;
  padding: 10px 0px;
  margin: 0;

  /* debug */
  /* border: 1px solid white; */
}

</style>