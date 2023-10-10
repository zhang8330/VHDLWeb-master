<template>
  <div class="container">
<!--    <h1 class="hint">Step 1.2: <br>Please Upload the Predefined Device Models Of Your System.</h1>-->
    <h1 class="hint" v-show="AddOrShow==='add'">Step 1.1: <br>&nbsp;Please Upload the Predefined Device Models Of Your System.</h1>
    <h1 class="hint" v-show="AddOrShow==='show'">Step 1.2: <br>&nbsp;Show all the devices.</h1>
    <h1 class="hint" v-show="AddOrShow==='delete'">Step 1.3: <br>&nbsp;Please enter the name and type of the device you want to delete.</h1>
<!--    <h2 >If your system does not have device models, ignore this step.</h2>-->
<!--    <p>The Sub Controller Specification Demo is as follows</p>-->
<!--    <vhdl-editor></vhdl-editor>-->
<!--    <uploadPDM class="upload-file"></uploadPDM>-->
    <div id="toggleBox" v-show="flag" >
      <p>You can</p>
      <p><el-button type="primary" @click="AddOrShow='add', flag=false" style="font-size: 19px;margin-left:110px; border:3px outset;box-shadow: 0 0 0 2px rgb(147,169,253);"><el-icon><DocumentAdd /></el-icon>&nbsp;Add new devices</el-button></p>
      <p><el-button type="primary" @click="AddOrShow='show', flag=false" style="font-size: 19px;margin-left:110px;border:3px outset;box-shadow: 0 0 0 2px rgb(147,169,253);"><el-icon><Reading /></el-icon>&nbsp;Show all the devices</el-button></p>
      <p><el-button type="primary" @click="AddOrShow='delete', flag=false" style="font-size: 19px;margin-left:110px;border:3px outset;box-shadow: 0 0 0 2px rgb(147,169,253);"><el-icon><Delete /></el-icon>&nbsp;Delete devices</el-button></p>
    </div>
      <div v-if="(AddOrShow === 'add')">
        <upload-device></upload-device>
      </div>
      <div v-if="(AddOrShow === 'show')">
        <show-all-devices></show-all-devices>
      </div>
      <div v-if="(AddOrShow === 'delete')">
        <delete-device></delete-device>
      </div>
    </div>
    <div class="button-container">
<!--      <back-btn class="left-button" to="/upload/main">Back</back-btn>-->
<!--      <next-step-btn class="right-button" to="/generate/main">Next Step</next-step-btn>-->
      <back-btn class="left-button" to="/upload/sub" @click="AddOrShow='main', flag = true">Back</back-btn>
      <next-step-btn class="right-button" to="/upload/main" v-show="AddOrShow === 'main'">Next Step</next-step-btn>
    </div>

</template>
<script>
import uploadPDM from "./uploadFile/index.vue";
import UploadDevice from "@/components/uploadDevice/uploadDevice.vue";
import ShowAllDevices from "@/components/showAllDevices/showAllDevices.vue";
import DeleteDevice from "@/components/deleteDevice/deleteDevice.vue";
import {Delete, DocumentAdd, Reading} from "@element-plus/icons-vue";
export default {
  name: "SubController",
  components: {DocumentAdd, Reading, Delete, DeleteDevice, ShowAllDevices, UploadDevice, uploadPDM},
  data(){
    return {
      AddOrShow:"main",
      flag:true
    }
  }
}
</script>
<style>
*{
  margin:0;
  padding: 0;
}
</style>
<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin:0 auto;
}

#toggleBox{
  display:flex;
  width:500px;
  height:240px;
  margin: 180px auto;
  padding: 20px;
  /*text-align: center;*/
  /*line-height:150px;*/
  /*vertical-align: center;*/
  font-size: 19px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border:5px outset  ;
  border-radius: 10px;
  box-shadow: 0 0 0 10px rgb(147,169,253);
  /*background-color: #97ABFF;*/
}
el-icon{
  vertical-align: center;
  margin: 0 auto;
}
.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}

#toggleBox p el-button{
  margin-left:150px;
}

.button-container{
  margin-top:40px;
  margin-left:55px;
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
