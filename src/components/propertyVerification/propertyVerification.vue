<template>
  <div>
    <Codemirror
        ref="cm"
        :options="cmOptions"
        :value = "code"
        @input="inputChange"
        style="width:200px;font-size:14px;margin-left: 400px;"
    >
    </Codemirror>
    <el-button
        type="primary"
        @click = "verify"
        style="margin-left:450px;margin-top:15px;">
      click to verify
    </el-button>
  </div>
</template>

<script>
import {propertyVerification} from "@/api/verify";
import Codemirror from "codemirror-editor-vue3";

export default {
  name: "propertyVerification",
  components:{Codemirror},
  data(){
    return {
      whetherNeed:false,
      whetherGenerate:false,
      code:'',
      cmOptions: {
        mode: 'text/x-vhdl',
        line: true,
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 4,
      }
    }
  },
  methods:{
    verify(){
      propertyVerification().then(res=>{
        console.log("验证成功",res)
        this.code = res.data.message
        ElMessage.success("verify successfully")
      }).catch(error=>{
        console.log("验证失败",error)
        ElMessage.warning("verification failed")
      })
    },
    inputChange(content) {
      this.code = content;
      this.$nextTick(() => {
        console.log("code:" + this.code);
        console.log("content:" + content)
      });
    },
  }
}
</script>

<style scoped>
div{
  width: 200px;
}
</style>