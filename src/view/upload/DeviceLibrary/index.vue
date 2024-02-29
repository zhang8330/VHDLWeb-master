<template>
  <div class="container">
    <h1 class="hint">Step 1: <hr/>Upload of the device model library<br></h1>
    <div style="margin:50px 0 0 10px;">
      <el-radio-group v-model="radio1" size="large" >
        <el-radio-button label="Upload" @click="AddOrShow='add', flag=false" />
        <el-radio-button label="Show" @click="AddOrShow='show', flag=false" />
        <el-radio-button label="Delete" @click="AddOrShow='delete', flag=false" />
      </el-radio-group>
    </div>
    <hr/>
    <!--    <h1 class="hint">Step 1.2: <br>Please Upload the Predefined Device Models Of Your System.</h1>-->
    <h3  v-show="AddOrShow==='add'"><br>&nbsp;Please Upload the Predefined Device Models Of Your System.</h3>
    <h3  v-show="AddOrShow==='show'"><br>&nbsp;Show all the devices.</h3>
    <h3  v-show="AddOrShow==='delete'"><br>&nbsp;Please enter the name and type of the device you want to delete.</h3>
    <div v-if="(AddOrShow === 'add')" style="background-color: #F5F7FA">
      <upload-device></upload-device>
    </div>
    <div v-if="(AddOrShow === 'show')" style="background-color: #F5F7FA">
      <show-all-devices></show-all-devices>
    </div>
    <div v-if="(AddOrShow === 'delete')" style="background-color: #F5F7FA">
      <delete-device></delete-device>
    </div>
  </div>
  <div class="button-container">
    <!--      <back-btn class="left-button" to="/upload/main">Back</back-btn>-->
    <!--      <next-step-btn class="right-button" to="/generate/main">Next Step</next-step-btn>-->
    <back-btn class="left-button" to="/upload/devLib" @click="AddOrShow='main',flag = true,radio1='New Work' ">Back</back-btn>
    <next-step-btn class="right-button" to="/upload/main" v-show="AddOrShow === 'main'">Next Step</next-step-btn>
  </div>

</template>
<script>
import UploadDevice from "@/components/uploadDevice/uploadDevice.vue";
import ShowAllDevices from "@/components/showAllDevices/showAllDevices.vue";
import DeleteDevice from "@/components/deleteDevice/deleteDevice.vue";
import {Delete, DocumentAdd, Reading} from "@element-plus/icons-vue";
import { ref } from 'vue'
export default {
  name: "index",
  components: {DocumentAdd, Reading, Delete, DeleteDevice, ShowAllDevices, UploadDevice},
  data(){
    return {
      AddOrShow:"main",
      flag:true,
      radio1:ref('New York')
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

el-icon{
  vertical-align: center;
  margin: 0 auto;
}
.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
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
