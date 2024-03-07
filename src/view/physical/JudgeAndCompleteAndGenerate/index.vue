<template>
  <div class="container">

    <judge-physical/>
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