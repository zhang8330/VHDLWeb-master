<template>
  <el-aside style="border-right:1px solid #cfd9e3;margin-top: 2px;background-color: #97ABFF">
    <el-scrollbar>
      <el-menu :default-openeds="['']">
        <el-sub-menu index="1">
          <template #title>
            Step
          </template>
          <el-menu-item-group title="Step 1">
            <el-menu-item index="1-1">Upload the library of device models</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Step 2">
            <el-menu-item index="1-2">Upload the requirements specification document</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Step 3">
            <el-menu-item index="1-3-1">Prototypes of atomic problems</el-menu-item>
            <el-menu-item index="1-3-2">3.1 Generate prototype code for atomic problems</el-menu-item>
            <el-menu-item index="1-3-3">3.2 Complete the computing component information</el-menu-item>
            <el-menu-item index="1-3-4">3.3 Generate prototypes of atomic problems</el-menu-item>
            <el-menu-item index="1-3-5">3.4 Generate prototypes of data storage</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Step 4">
            <el-menu-item index="1-4-1">Prototypes of composite controllers</el-menu-item>
            <el-menu-item index="1-4-2">4.1 Generate the composite controller vhdl code</el-menu-item>
            <el-menu-item index="1-4-3">4.2 Complete the composite controller vhdl code</el-menu-item>
            <el-menu-item index="1-4-4">4.3 Generate prototypes of composite controllers</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Step 5">
            <el-menu-item index="1-4-1">Simulate</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
      <el-menu :default-openeds="['2']">
        <el-sub-menu index="2">
          <template #title>
            Function
          </template>
          <el-menu-item-group title="DeviceLibrary">
            <el-menu-item index="1-1" @click="this.$router.push('/upload/devLib');">Upload</el-menu-item>
            <el-menu-item index="1-2" @click="this.$router.push('/upload/devLib');">Show</el-menu-item>
            <el-menu-item index="1-3" @click="this.$router.push('/upload/devLib');">Delete</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="DownLoad">
            <el-menu-item index="2-1" @click="downloadVhdl">Download VHDL Code</el-menu-item>
            <el-menu-item index="2-2" @click="downloadAtomProject">Download Atom Project</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Validate">
            <el-menu-item index="3-1" @click="interfaceValidation">Validate Interface Consistency</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Simulation Structure">
            <el-menu-item index="4-1" @click="this.$router.push('/getSimulationStructure')">Get Simulation Structure</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Physical Store">
            <el-menu-item index="5-1" @click="this.$router.push('/physical/JudgeAndCompleteAndGenerate')">Analyze Physical Storage</el-menu-item>
            <el-menu-item index="5-1" @click="this.$router.push('/physical/JudgeAndCompleteAndGenerate')">Complete Physical Storage</el-menu-item>
            <el-menu-item index="5-1" @click="this.$router.push('/physical/JudgeAndCompleteAndGenerate')">Generate Physical Data Storage IP Core</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import {downloadAllAtomProject, downloadAtomSystemVHDLCode} from "@/api/download";
import {interfaceConsistencyValidation} from "@/api/oroperty";
export default {
  props:["description"],
  data(){
    return {
      description:""
    }
  },
  methods:{
    downloadVhdl() {
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
    },
    downloadAtomProject(){
      downloadAllAtomProject().then( response => {
        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', "AtomSystemProject.zip"); // 设置要保存的文件名
        document.body.appendChild(link);
        setTimeout(function(){
          link.click();
          document.body.removeChild(link);
        },1000)
        ElMessage.success('原子组件文件下载成功');
      }).catch(error => {
            ElMessage.warning('原子组件文件下载失败');
            console.error('原子组件文件下载失败', error);
      });
    },
    interfaceValidation(){
      interfaceConsistencyValidation().then(res=>{
        this.description = res.data;
        this.$emit('child-msg', this.description);
        ElMessage.success("Successful validation!!");
      }).catch(error=>{
        console.log(error);
        ElMessage.warning("Validation failure!!");
      })
    }
  }
}
</script>

<style scoped>
/* 基本样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 侧边栏样式 */
.el-aside {
  width:200px;
  background-color: #97ABFF;
  border-right: 1px solid #cfd9e3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.el-aside:hover{
  width:100%;
  transition: width 1.5s, transform 1.5s;
}
/* 滚动条样式 */
.el-scrollbar {
  background-color: #f0f2f5;
}

/* 菜单项样式 */
.el-menu {
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 0.95em;
}

el-menu-item {
  border-radius: 4px;
  margin: 8px 0;
  background-color: #e1e1e1;
  padding: 12px 20px;
  transition: background-color 0.3s, transform 0.3s;
}

/* 悬停效果 */
.el-menu-item:hover {
  background-color: #d3d3d3;
  transform: translateX(5px); /* 添加平移效果 */
}

/* 图标样式 */
.el-icon {
  color: #4a4a4a;
}

/* 子菜单标题 */
.el-sub-menu__title {
  font-weight: bold;
  color: #333;
  font-size: 1.15em;
}

/* 分组标题 */
.el-menu-item-group__title {
  color: #555;
  font-size: 0.9em;
  padding-left: 15px;
}

/* 特定类别的额外样式 */
.custom-class {
  /* 可添加更多自定义样式 */
}

</style>
