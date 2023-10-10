<template>
  <div class="container">
    <h1 class="hint">Step *9: <br>Property verification.</h1>
  </div>
  <property-verification/>
  <div class="button-container">
    <back-btn class="left-button" to="/getSimulationStructure">Back</back-btn>
    <next-step-btn class="right-button" to="/propertyVerification">Next Step</next-step-btn>
  </div>
</template>

<script>
import PropertyVerification from "@/components/propertyVerification/propertyVerification.vue";
import BackBtn from "@/components/backBtn/index.vue";
import NextStepBtn from "@/components/nextStepBtn/index.vue";

export default {
  name: "index",
  components: {NextStepBtn, BackBtn, PropertyVerification}
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