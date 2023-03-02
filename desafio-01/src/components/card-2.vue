<template>
  <div class="card-2">
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


<style scoped>
.card-2 {
  width: 358px;
  height: 265px;
  background-color: #2a2141;
  border-radius: 10px;
}





.card-inside{
  margin: 0px 20px 0px;
  display:flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

.image-player {
  width: 84px;
  height: 84px;
  display: flex;
  justify-content: center;
  align-content: start;
  border-radius: 10px;
  margin-top: 38px;
}
h3 {
  color: white;
  display: flex;
  position: relative;
  align-content: space-between;
  text-align: start;
  margin-left: 110px;
  margin-bottom: 70px;
  margin-top: -70px;
  position: relative;
  flex-wrap: nowrap !important;
  flex-direction: column;
}

h5{
  color: #e1e1e694;
  display: flex;
  position: relative;
  align-content: space-between;
  text-align: start;
  margin-left: 110px;
  margin-bottom: 60px;
  margin-top: -70px;
  position: relative;
  flex-wrap: nowrap !important;
  flex-direction: column;
}



.player {
  display: flex;
  justify-content: space-around;
  /* margin: 29px; */
  align-content: start;
}

.barra {
  margin: 10px;
  width: 290px;
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
  width: 260px;
  height: 6px;
  background-color:#D9D9D9;
  border-radius: 10px;
  margin-right: 40px;
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
