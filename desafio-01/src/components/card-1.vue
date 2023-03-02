<template>
  <div class="card-1">
    <div class="card-inside">
      <img class="image-player" src="../assets/player.png" alt="" />
      <h3>Acorda Devinho</h3>
      <h5>Banda Rocketseat</h5>
      <div class="player">
        <img src="../assets/play-back.png" alt="" />
        <img src="../assets/play.png" alt="" />
        <img src="../assets/play-forward.png" alt="" />
      </div>
      <div class="barra">
        <div class="completed"></div>
      </div>
      <div class="timer">
        <p class="completed-time">03:20</p>
        <p class="missing-time">00:12</p>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<style scoped>
.card-1 {
  width: 266px;
  height: 498px;
  background-color: #2a2141;
  border-radius: 10px;
  margin-right: 50px;
}

.card-inside{
  margin: 0px 20px 0px;
}

.image-player {
  width: 190px;
  height: 190px;
  border-radius: 10px;
  margin-top: 38px;
}
h3,
h5 {
  color: white;
  display: flex;
  text-align: start;
  margin-left: 38px;
  margin-bottom: 0px;
  margin-top: 10px;
}

.player {
  display: flex;
  justify-content: space-around;
  margin: 29px;
}

.barra {
  width: 190px;
  height: 6px;
  background-color: #d9d9d91a;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-left: 15px;
}

 .completed{
  position: relative;
  width: 170px;
  height: 6px;
  background-color:#D9D9D9;
  border-radius: 10px;
  margin-right: 20px;
}

.timer{
  color: white;
  font-size: 14px;
  font-family:  Roboto,'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  justify-content: space-between;
  margin: 0px 20px 20px ;
}


</style>
