<template>
  <div class="container">
<!--    <h1 id="hint">Step 1: <br/> Please Upload Specification And Atomic VHDL Code Of Your System.</h1>-->
    <h1 id="hint"><br/> Please Upload the Specification Of Your System.</h1>
<!--    <p>The Main Controller Specification Demo is as follows</p>-->
<!--    <vhdl-editor></vhdl-editor>-->
    <upload-file></upload-file>
    <div class="button-container">
      <next-step-btn class="right-button" to="/generate/main">Next Step</next-step-btn>
    </div>

  </div>

</template>

<script>
import UploadFile from "@/components/uploadFile/uploadFile.vue";
import VhdlEditor from "@/components/vhdlEditor/index.vue";
import NextStepBtn from "@/components/nextStepBtn/index.vue";
import BackBtn from "@/components/backBtn/index.vue";
import UploadDevice from "@/components/uploadDevice/uploadDevice.vue";

export default {
  name: "MainController",
  components: {UploadDevice, BackBtn, NextStepBtn, VhdlEditor, UploadFile},
}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}

#hint{
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
