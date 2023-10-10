<template>
  <div class="container">
    <h1 class="hint">Part 3: <br>Determine whether the BDomain needs to be completed.</h1>

  <judgeWhetherToComplete/>
  </div>
</template>

<script>
import JudgeWhetherToComplete from "@/components/judgeWhetherToComplete/judgeWhetherToComplete.vue";
import Codemirror from "codemirror-editor-vue3"
import {complete_computer} from "@/api/upload";
export default {
  name: "index",
  components: {JudgeWhetherToComplete},
  methods:{
    // completeComputer(){
    //   this.nowFile.txt = this.code;
    //   var _that = this;
    //   this.files.forEach(function(element,index,array){
    //     if(element.txt == _that.code){
    //       _that.nowFile.filename = element.filename;
    //     }
    //   })
    //   console.log("补全：")
    //   console.log(this.nowFile)
    //   complete_computer(this.nowFile).then(response => {
    //     var mes = response.data.message;
    //     ElMessage.success(mes)
    //   })
    // }
  }
}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}
</style>