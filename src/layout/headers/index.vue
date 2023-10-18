<template>
  <div aria-label="A complete example of page header" class="page-header">
      <div class="flex items-center">
        <div id="img" @click="this.$router.push('/upload/main')" style="width: 90px; height: 62px">
          <el-image :src="require('@/assets/logo.png')"  style="width: 90px; height: 62px" ></el-image>
        </div>
        <div id="project-title" style="cursor:default;">
          <p class="cn">基&nbsp;&nbsp;于&nbsp;&nbsp;软&nbsp;&nbsp;件&nbsp;&nbsp;IP&nbsp;&nbsp;的&nbsp;&nbsp;需&nbsp;&nbsp;求&nbsp;&nbsp;描&nbsp;&nbsp;述&nbsp;&nbsp;语&nbsp;&nbsp;言&nbsp;&nbsp;仿&nbsp;&nbsp;真&nbsp;&nbsp;工&nbsp;&nbsp;具</p>
          <p class="en">Simulation tool of requirement description language based on software IP</p>
        </div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            text-color="#000"
            on-select="handleSelect"
            style="background-color: transparent"
            router
        >
          <!--    <el-menu-item index="0" @click="this.$router.push('/upload/sub')">-->
          <!--      <el-image :src="require('@/assets/logo.png')" style="width: 90px; height: 62px" ></el-image>-->
          <!--    </el-menu-item>-->
          <!--    <el-menu-item>-->
          <!--      基于软件IP的需求描述语言仿真工具 Simulation tool of requirement description language based on software IP-->
          <!--    </el-menu-item>-->
          <!--    <el-sub-menu index="1">-->
          <!--      <template #title>Upload Specification</template>-->
          <!--      <el-menu-item index="/upload/main">Upload Main Controller Specification</el-menu-item>-->
          <!--      <el-menu-item index="/upload/sub">Upload Sub Controller Specification</el-menu-item>-->
          <!--      <el-menu-item index="/upload/atomic">Upload Atomic System Code </el-menu-item>-->
          <!--    </el-sub-menu>-->
          <el-sub-menu index="0" style="background-color: transparent;">
            <template #title >
              Device
            </template>
            <el-menu-item index="/upload/sub" class="sub-menu-item">Add new devices</el-menu-item>
            <el-menu-item index="/upload/sub" class="sub-menu-item">Show all the devices</el-menu-item>
            <el-menu-item index="/upload/sub" class="sub-menu-item">Delete devices</el-menu-item>
          </el-sub-menu>
<!--          <el-sub-menu index="1">-->
<!--            <template #title>-->
<!--              Physical data-->
<!--            </template>-->
<!--            <el-menu-item index="/physical/JudgeAndCompleteAndGenerate" class="sub-menu-item">Determine whether the physical data storage needs to be completed</el-menu-item>-->
<!--            <el-menu-item index="/physical/JudgeAndCompleteAndGenerate" class="sub-menu-item">Complete the physical data storage</el-menu-item>-->
<!--            <el-menu-item index="/physical/JudgeAndCompleteAndGenerate" class="sub-menu-item">Generate the physical data storage IP core</el-menu-item>-->
<!--          </el-sub-menu>-->
          <el-sub-menu index="2">
            <template #title>Controller</template>
            <el-menu-item index="/controllerVhdl" class="sub-menu-item">Generate controller vhdl code</el-menu-item>
            <el-menu-item index="/controllerVhdl" class="sub-menu-item">Complete the controller vhdl code</el-menu-item>
            <el-menu-item index="/controllerVhdl" class="sub-menu-item">Generate controller IP core</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3" @click="this.$router.push('/getSimulationStructure')"  style="background-color: transparent !important;">Simulation</el-menu-item>
<!--          <el-sub-menu index="3">-->
<!--            <template #title>-->
<!--              <span class="subSpan" style="color:#ffffff;background-color: transparent">Simulation</span>-->
<!--            </template>-->
<!--            <el-menu-item index="/upload/sub" class="sub-menu-item">Get the simulation structure</el-menu-item>-->
<!--            <el-menu-item index="/upload/sub" class="sub-menu-item">Show the model</el-menu-item>-->
<!--            <el-menu-item index="/upload/sub" class="sub-menu-item">Show the data</el-menu-item>-->
<!--          </el-sub-menu>-->
          <!--    <el-menu-item index="/assemble" style="border: 0px">Assemble Total System</el-menu-item>-->
          <el-menu-item index="4" @click="this.$router.push('/download')" style="background-color: transparent !important;">Download</el-menu-item>
          <el-menu-item index="5" @click="this.$router.push('/assembleSystem')" style="background-color: transparent !important;">Assemble System</el-menu-item>
          <el-sub-menu index="6">
            <template #title>Verify</template>
            <el-menu-item index="/propertyVerification" class="sub-menu-item">Property verification of interface conformance</el-menu-item>
          </el-sub-menu>

          <!--    <el-menu-item index="/help" >Help</el-menu-item>-->
          <!--    <el-menu-item index="6" style="border: 0px">Login</el-menu-item>-->
        </el-menu>
      </div>

  </div>

</template>

<script >

export default {
  data() {
    return{
      activeIndex : "/"
    }
  },
  methods: {
    handleSelect(index){
      this.activeIndex = index
      this.$router.push(index)
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
.el-sub-menu .el-menu-item:hover{
  background-color: rgba(204, 204, 204, 0.3) !important;
}
.el-menu-item{
  color: #ffffff;
}
</style>
<style>

.el-sub-menu__title{
  color: white !important;
}
.el-sub-menu__title:hover{
  background-color: transparent !important;
}
</style>
