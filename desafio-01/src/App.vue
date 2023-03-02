<template>
  <div class="players">
    <Card1 />
    <Card2 />
    <Card3 />
  </div>
  <div class="player-3">
  </div>

</template>

<script setup>
import Card1 from "./components/card-1.vue";
import Card2 from "./components/card-2.vue";
import Card3 from "./components/card-3.vue";
</script>

<style>
body {
  background-color: #0f0d13;
}

.players {
  display: flex;
  justify-content: space-between;
  /* position: absolute; */
}

.player-3{
  display: flex;
  position: relative;
  justify-content: flex-end;
  /* align-content: initial; */
 
}
</style>
