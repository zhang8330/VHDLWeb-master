<template>
  <div class="common-layout">
  <el-container class="container">
    <el-header><Headers /></el-header>
    <div style="max-width: 600px">
      <el-alert
          v-if="description"
          title="Description"
          type="warning"
          style="float: left"
          :description=description
      />
    </div>
    <el-container>
      <el-aside style="width: 28%;"><process @child-msg="handleChildMsg" :description="description"/></el-aside>
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
      description:"",
    }
  },
  components: {Headers,Process},
  computed:{

  },
  methods:{
    handleChildMsg(message){
      this.description = message;
    }
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
