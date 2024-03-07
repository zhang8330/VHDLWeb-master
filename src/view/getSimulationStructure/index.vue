<template>
  <div class="container">
    <h1 class="hint"><br></h1>
  </div>
  <div id="componentBox">
    <div class="flex-container">
      <get-simulation-structure @data-update="getName" :devicename="devicename" :path="path"></get-simulation-structure>
    </div>
    <div style="width:50%;">
      <show-model @port-update ="getPort" :path = "path" :devicename="devicename"></show-model>

      <show-data :portname="portname" :path="path" class="imgBox"></show-data>
    </div>
  </div>
</template>

<script>
import GetSimulationStructure from "@/components/simulationStructure/getSimulationStructure.vue";
import ShowModel from "@/components/simulationStructure/showModel.vue";
import ShowData from "@/components/simulationStructure/showData.vue";

export default {
  name: "index",
  components: {ShowData, ShowModel, GetSimulationStructure},
  data(){
    return {
      devicename:"",
      path:"",
      portname:""
    }
  },

  methods:{
    getName(path,name){
      this.path = path;
      this.devicename = name;
    },
    getPort(path,name){
      this.path = path;
      this.portname = name;
    }
  }
}
</script>

<style scoped>
#componentBox{
  display: flex;
  flex-wrap: wrap;
  gap:1px;
}
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
.flex-container {
  display: flex;
}
.button-container{
  margin-top:40px;
  display: flex;
  justify-content: center;
}
.imgBox{
  position: absolute;
  top:120px;
  left:200px;

}
.left-button{
  margin-right: 10px;
}

.right-button{
  margin-left: 10px;
}
</style>