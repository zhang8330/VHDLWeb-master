<template>
  <div aria-label="A complete example of page header" class="page-header">
      <div class="flex items-center">
        <div id="img" @click="this.$router.push('/upload/devLib')" style="width: 90px; height: 62px">
          <el-image :src="require('@/assets/logo.png')"  style="width: 90px; height: 62px" ></el-image>
        </div>
        <div id="project-title" style="cursor:default;">
          <p class="cn">基&nbsp;&nbsp;于&nbsp;&nbsp;软&nbsp;&nbsp;件&nbsp;&nbsp;IP&nbsp;&nbsp;的&nbsp;&nbsp;需&nbsp;&nbsp;求&nbsp;&nbsp;描&nbsp;&nbsp;述&nbsp;&nbsp;语&nbsp;&nbsp;言&nbsp;&nbsp;仿&nbsp;&nbsp;真&nbsp;&nbsp;工&nbsp;&nbsp;具</p>
          <p class="en">Simulation tool of requirement description language based on software IP</p>
        </div>
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            :ellipsis="false"
            text-color="#fff"
            style="background-color: transparent"
            router
        >
<!--          <el-sub-menu index="0" >-->
<!--            <template #title >-->
<!--              Device-->
<!--            </template>-->
<!--            <el-menu-item index="/upload/devLib">Upload</el-menu-item>-->
<!--            <el-menu-item index="/upload/devLib">Show</el-menu-item>-->
<!--            <el-menu-item index="/upload/devLib">Delete</el-menu-item>-->
<!--          </el-sub-menu>-->
<!--          <el-sub-menu index="2">-->
<!--            <template #title>Controller</template>-->
<!--            <el-menu-item index="/controllerVhdl"> Generate the composite controller vhdl code</el-menu-item>-->
<!--            <el-menu-item index="/controllerVhdl"> Complete the composite controller vhdl code</el-menu-item>-->
<!--            <el-menu-item index="/controllerVhdl"> Generate prototypes of composite controllers</el-menu-item>-->
<!--          </el-sub-menu>-->

<!--          <el-sub-menu index="3">-->
<!--            <template #title>Simulation</template>-->
<!--            <el-menu-item index="/getSimulationStructure">Get simulation structure</el-menu-item>-->
<!--            <el-menu-item index="/dataVisualization">Generate the simulation results and the data visualizations</el-menu-item>-->
<!--          </el-sub-menu>-->
          <el-menu-item>Simuation</el-menu-item>
<!--          <el-sub-menu index="5">-->
<!--            <template #title >Function</template>-->
<!--            <el-menu-item  @click="download">Download</el-menu-item>-->
<!--            <el-menu-item @click="this.$router.push('/assembleSystem')">Assemble System</el-menu-item>-->
<!--&lt;!&ndash;            <el-menu-item  @click="changeDrawer()" style="background-color: transparent !important;">Show step</el-menu-item>&ndash;&gt;-->
<!--          </el-sub-menu>-->
<!--          <el-sub-menu index="6">-->
<!--            <template #title>Verify</template>-->
<!--            <el-menu-item index="/propertyVerification" class="sub-menu-item">Property verification of interface conformance</el-menu-item>-->
<!--          </el-sub-menu>-->
        </el-menu>
      </div>
  </div>
</template>
<script >

import {downloadAtomSystemVHDLCode} from "@/api/download";
import { ref } from 'vue'
import {runSimulation} from "@/api/get";
export default {
  data() {
    return{
      activeIndex : "/"
    }
  },
  methods: {
    run(){
      runSimulation().then(()=>{
        ElMessage.success("success!");
      }).catch((error)=>{
        ElMessage.warning("failed!");
        console.log(error);
      })
    },
    handleSelect(index){
      this.activeIndex = index;
      this.$router.push(index);
    },
    changeDrawer(drawer){
      this.$store.commit("app/changeDrawer",!drawer);
    },
    download() {
      downloadAtomSystemVHDLCode()
          .then( response => {
            const url = window.URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', "AtomSystemVhdl.zip"); // 设置要保存的文件名
            document.body.appendChild(link);
            setTimeout(function(){
              link.click();
              document.body.removeChild(link);
            },1000)
          })
          .catch(error => {
            console.error('文件下载失败', error);
          });
    }
  }
}

</script>

<style scoped>
*{
  border:0;
}
.page-header{
  margin:0;
  padding: 0;
  background-image: linear-gradient( 135deg, #1874CDFF 10%, #97ABFF 100%);
}
#img:hover{
  cursor:pointer;
}
.flex{
  display: flex;
  gap:20px;
  align-items: center;
  color: #f0f0f5;
}
.cn{
  font-size: 20px;
}
.en{
  font-size: 14px;
}
.el-menu-item:hover {
  background-color: transparent !important;
}



</style>

