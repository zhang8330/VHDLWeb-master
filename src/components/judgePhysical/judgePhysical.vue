<template>

  <h1 class="hint" v-show="whetherNeed && !whetherGenerate">Step *5.2: <br>Complete the physical data store.</h1>
  <h1 class="hint" v-show="whetherGenerate && whetherNeed">Step *5.3: <br>Generate the physical data storage IP core.</h1>
  <h1 class="hint" v-show="!whetherNeed && !whetherGenerate">Step *5.1: <br>Determine whether the physical data store needs to be completed.</h1>
  <div v-if="ipshow">
    <Codemirror
        ref="cm"
        :options="cmOptions"
        :value = "code"
        @input="inputChange"
    >
    </Codemirror>
    <el-button
        type="primary"
        @click = "judge">
      click to judge
    </el-button>
    <el-button
        type="warning"
        @click = "complete"
        v-show="whetherNeed">
      complete data
    </el-button>
    <el-button
        type="warning"
        @click = "generate"
        v-show="whetherGenerate"
        v-if="isloading"
        loading>
      click to generate
    </el-button>
    <el-button
        type="warning"
        @click = "generate"
        v-show="whetherGenerate"
        v-else>
      click to generate
    </el-button>
  </div>
</template>


<script>
import {judgePhysical} from "@/api/judge";
import {completePhysical} from "@/api/complete";
import Codemirror from "codemirror-editor-vue3";
import {generatePhysical} from "@/api/generate";

export default {
  name: "judgePhysical",
  components:{Codemirror},
  data(){
    return {
      whetherNeed:false,
      whetherGenerate:false,
      ipshow:true,
      code:'',
      key:'',
      isloading:false,
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
    judge(){
      judgePhysical().then(res=>{
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
      completePhysical(data).then(res=>{
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
      this.isloading = true;
      generatePhysical().then(res=>{
        ElMessage.success("Generated successfully");
        console.log("生成成功",res);
        this.isloading = false;
      }).catch(error=>{
        ElMessage.warning("Build failure");
        console.log("生成失败",error);
        this.isloading = false;
      })
    }
  }
}
</script>

<style scoped>
.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>