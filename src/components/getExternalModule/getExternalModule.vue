<template>
  <el-tree :data="data" />
</template>

<script>
import {getExternalModule} from "@/api/get";

export default {
  name: "getExternalModule",
  data() {
    return {
      data: []
    }
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
  methods:{

  }
}
</script>

<style scoped>

</style>