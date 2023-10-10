<template>
  <div v-if="bdipshow">
    <Codemirror
        ref="cm"
        :options="cmOptions"
        :value = "code"
        @input="inputChange"
    >
    </Codemirror>
    <!--    <el-button style="" @click="completeComputer">更新</el-button>-->
    <el-button
        type="primary"
        @click = "judge">
      click to judge
    </el-button>
    <el-button
        type="warning"
        @click = "complete"
        v-show="whetherNeed">
      complete BDomain
    </el-button>
    <el-button
        type="warning"
        @click = "generate"
        v-show="whetherGenerate">
      click to generate BDIP nuclei
    </el-button>
  </div>
</template>

<script>
import {judgeWhetherToComplete} from "@/api/judge";
import {completeBDomain} from "@/api/complete";
import Codemirror from "codemirror-editor-vue3";
import {generateBdomain} from "@/api/generate";

export default {
  name: "judgeWhetherToComplete",
  components:{Codemirror},
  data(){
    return {
      whetherNeed:false,
      whetherGenerate:false,
      bdipshow:true,
      code:'',
      key:'',
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
    //判断是否需要补全
    judge(){
      judgeWhetherToComplete().then(res=>{
        if(res.data.message === "No need to complete"){
          ElMessage.success("No need to complete")
        }else{
          ElMessage.warning("need to complete")
          this.key = Object.keys(res.data.needcomplete)[0]
          this.code = res.data.needcomplete[this.key]
          this.whetherNeed = true
        }
      }).catch(error => {
        console.error('判断失败', error);
      })
    },//补全
    complete(){
      const data = {
        filename:this.key,
        txt:this.code
      };
      console.log(data)
      completeBDomain(data).then(res=>{
        console.log(res)
        ElMessage.success("complete success!");
        this.whetherGenerate = true
      }).catch(error=>{
        ElMessage.warning("complete failed!");
        console.log('补全失败', error);
      })
    },
    inputChange(content) {
      this.code = content;
      this.$nextTick(() => {
        console.log("code:" + this.code);
        console.log("content:" + content)
      });
    },
    //生成
    generate(){
      generateBdomain().then(res=>{
        ElMessage.success(res.data);
      }).catch(error=>{
        ElMessage.warning("生成失败",error);
      })
    }
  }
}
</script>

<style scoped>

</style>