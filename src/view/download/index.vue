<template>
  <div class="container">
    <h1 class="hint"><br>Please Download the Atomic System VHDL Code.</h1>
  <downloadFile class = "downloadfile"/>
  </div>
  <div class="button-container">
    <back-btn class="left-button" to="/generate/atom">Back</back-btn>
    <next-step-btn class="right-button" to="/physical/JudgeAndCompleteAndGenerate">Next Step</next-step-btn>
  </div>
</template>

<script>
import DownloadFile from "@/components/downloadFile/downloadFile.vue";
import BackBtn from "@/components/backBtn/index.vue";
import NextStepBtn from "@/components/nextStepBtn/index.vue";

export default {
  name: "index",
  components: {NextStepBtn, BackBtn, DownloadFile}
}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
.downloadfile{
  margin: 10px 80px;
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