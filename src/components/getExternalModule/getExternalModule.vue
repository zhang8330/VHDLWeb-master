<template>
  <el-tree :data="data"  @node-click="getDeviceName"/>
</template>

<script>
import {getExternalModule} from "@/api/get";

export default {
  props:["devicename"],
  name: "getExternalModule",
  data() {
    return {
      data: [],
      devicename:"",
      path:""
    }
  },
  methods:{
    getDeviceName(data){
      if(data.children == undefined){
        this.devicename = data["label"];
        this.$emit("data-update",this.path, this.devicename);
      }
    },

    getName() {
      this.$emit("data-update",this.path, this.devicename);
    }
  },
  watch:{

  },
  mounted() {
      getExternalModule().then(res=>{
        this.data.push(res.data);
        ElMessage.success("success!");
      }).catch(error=>{
        console.log(error);
        ElMessage.warning("failed!");
      })
  },
  beforeUnmount() {
    // 移除全局点击事件监听
  }
}
</script>

<style scoped>

</style>