<template>

  <controller-vhdl/>
  <div class="button-container">
    <back-btn class="left-button" to="/generate/atom">Back</back-btn>
    <next-step-btn class="right-button" to="/dataVisualization">Next Step</next-step-btn>
  </div>
</template>

<script>
import ControllerVhdl from "@/components/controllerVhdl/controllerVhdl.vue";
import BackBtn from "@/components/backBtn/index.vue";
import NextStepBtn from "@/components/nextStepBtn/index.vue";

export default {
  name: "index",
  components: {NextStepBtn, BackBtn, ControllerVhdl}
}
</script>

<style scoped>

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