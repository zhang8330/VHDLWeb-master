<template>
  <div class="common-layout">
  <el-container class="container">
    <el-header><Headers /></el-header>
    <el-container>
<!--      <el-drawer v-model="getDrawer" title="I am the title" :with-header="false">-->
        <el-aside style="width: 28%;"><process/></el-aside>
<!--      </el-drawer>-->
      <el-main style="width: 72%;height: 100%;"><router-view/></el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script >
import Headers from './headers'
import Process from "@/components/process.vue";
export default {
  data(){
    return {
      drawer:false,
    }
  },
  components: {Headers,Process},
  computed:{
    // getDrawer(){
    //   return this.$store.state.app.drawer;
    // }
  }
}

</script>

<style scoped>

.container{
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  /*background-color: #ecebe6;*/
}
::v-deep .el-main{
  padding: 0;
}

.common-layout{
  padding: 0;
  margin: 0;
  border: 0;
}

::v-deep .el-header {
  padding: 0;
}

</style>
