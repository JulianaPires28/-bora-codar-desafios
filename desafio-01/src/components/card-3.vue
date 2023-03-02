<template>
  <div class="card-3">
    <div class="card-inside">
      <img class="image-player" src="../assets/player.png" alt="" />
      <h3>Acorda Devinho</h3>
      <h5>Banda Rocketseat</h5>
      <div class="player">
        <img src="../assets/play-back.png" alt="" />
        <img src="../assets/play.png" alt="" />
        <img src="../assets/play-forward.png" alt="" />
      </div>
     
    </div>
  </div>
</template>


<style scoped>
.card-3 {
  width: 358px;
    height: 190px;
    background-color: #2a2141;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 300px;
    position: absolute;
    justify-content: center;
    margin-left: 320px;
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
  align-content: space-around;
  text-align: start;
  margin-left: 110px;
  margin-bottom: 40px;
  margin-top: -70px;
  position: relative;
  flex-wrap: nowrap !important;
  flex-direction: column;
}



.player {
  display: flex;
  justify-content: space-evenly;
  align-content: start;
}





</style>
