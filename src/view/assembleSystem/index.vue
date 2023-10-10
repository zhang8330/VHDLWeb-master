<template>
  <div class="container">
    <h1 class="hint">Step *7: <br>Integrate system.</h1>
  </div>
  <assemble-system/>
  <div class="button-container">
    <back-btn class="left-button" to="/controllerVhdl">Back</back-btn>
    <next-step-btn class="right-button" to="/getSimulationStructure">Next Step</next-step-btn>
  </div>
</template>

<script>
import AssembleSystem from "@/components/assembleSystem/assembleSystem.vue";
import NextStepBtn from "@/components/nextStepBtn/index.vue";
import BackBtn from "@/components/backBtn/index.vue";

export default {
  name: "index",
  components: {BackBtn, NextStepBtn, AssembleSystem}
}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}
.button-container{
  margin-top:40px;
  display: flex;
  justify-content: center;
}

.left-button{
  margin-right: 10px;
}

.right-button{
  margin-left: 10px;
}
</style>