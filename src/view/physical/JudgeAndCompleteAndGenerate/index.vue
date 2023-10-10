<template>
  <div class="container">

    <judge-physical/>
  </div>
  <div class="button-container">
    <back-btn class="left-button" to="/download">Back</back-btn>
    <next-step-btn class="right-button" to="/controllerVhdl">Next Step</next-step-btn>
  </div>
</template>

<script>

import JudgePhysical from "@/components/judgePhysical/judgePhysical.vue";
import BackBtn from "@/components/backBtn/index.vue";
import NextStepBtn from "@/components/nextStepBtn/index.vue";

export default {
  name: "index",
  components: {NextStepBtn, BackBtn, JudgePhysical},

}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
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