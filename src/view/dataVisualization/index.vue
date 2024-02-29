<template>
  <div class="container">
    <h1 class="hint">Step 5: Generation of data visualizations<br></h1>
    <div style="display:flex;">
       <get-external-module @data-update="getName" :devicename="devicename" style="width:20%;"></get-external-module>
        <show-external-model :devicename="devicename"></show-external-model>
    </div>
    <div class="button-container">
      <el-button type="success" @click="runSimulation">Simulate</el-button>
      <back-btn class="left-button" to="/controllerVhdl">Back</back-btn>
    </div>
  </div>
</template>

<script>
import GetExternalModule from "@/components/getExternalModule/getExternalModule.vue";
import ShowModel from "@/components/simulationStructure/showModel.vue";
import ShowExternalModel from "@/components/showExternalModule/showExternalModel.vue";
import {runSimulation} from "@/api/get";

export default {
  name: "index",
  components: {ShowExternalModel, ShowModel, GetExternalModule},
  data(){
    return {
      path:"",
      devicename:""
    }
  },


  methods:{
    runSimulation,
    getName(path,name){
      this.path = path;
      this.devicename = name;
    }
  }
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
  margin-bottom: 30px;
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