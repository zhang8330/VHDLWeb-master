<template>
  <div id="container" v-loading="loading">
    <div id="con_left">
      <div class="arrow-box">
        <div class="left-text" v-for="data1 in this.devices[this.index]['port_in']">
          {{'➖' + data1}}
        </div>
      </div>
    </div>
    <div id="con_right">
      <div class="arrow-box">
        <div class="right-text" v-for="data2 in this.devices[this.index]['port_out']">
          {{data2 + '➖'}}
        </div>
      </div>
    </div>
  </div>
  <div id="buttonBox">
    <p>
      <span>name:{{ this.devices[index].name }}</span>
      <span>({{this.length === 0 ? 0:this.index + 1}}/{{this.length}})</span>
    </p>
    <el-button type="primary" class="elb" @click="last">last</el-button>
    <el-button type="primary" class="elb" @click="next">next</el-button>
  </div>

    <div class="button-container">
      <el-button type="warning" size="large" @click="generate">Generate Code</el-button>
    </div>

    <div class="button-container">
      <back-btn class="left-button" to="/generate/main">Back</back-btn>
      <next-step-btn class="right-button" to="/download">Next Step</next-step-btn>
    </div>

</template>

<script>
import {generateatom} from "@/api/atom";
import {ref} from "vue";
import {showDevices} from "@/api/show";
const loading = ref(true)
export default {
  name: "generateAtom",
  data(){
    return {
      index:0,
      length:0,
      devices:[{}],
      loading:false
    }
  },
  methods:{
    last(){
      if(this.index + 1 > 1) {
        this.index--;
      }
    },
    next(){
      if(this.index + 1 < this.length) {
        this.index++;
      }
    },
    generate(){
      ElMessage.info("Building, please wait a moment");
      this.loading=true;
      generateatom().then(res => {
        if(res.data.isright === true) {
          this.devices = res.data.atomsystems;
          this.length = this.devices.length;
          this.loading=false;
          ElMessage.success("Generate Atomsystem Project Successful!");
          console.log("生成成功", res)
        }else if (res.data.isright === false){
          this.loading=false;
          const alertMsg = "Generate Atomsystem Project Fail!\nFaulty Atomsystems：" + res.data.failatomsystems.join("，");
          alert(alertMsg);
          this.$router.push("/upload/main");
        }
      }).catch(error=>{
        this.loading=false;
        ElMessage.warning("Generation failure!");
        console.log("生成失败",error)
      })
    }
  }
}
</script>

<style scoped>
#buttonBox{
  position:absolute;
  top:300px;
  left:30px;
  width:200px;
  height:100px;
}
.button-container{
  margin-top:40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.left-button{
  margin-right: 10px;
}

.right-button{
  margin-left: 10px;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
*{
  font-size: 16px;
}
div{
  margin:0;
  padding:0;
}
#container{
  display: flex;
  width:680px;
  height:280px;
  margin:5px auto;
  background-color: #cbd4de;
}
#con_left{
  display: flex;
  width:50%;
  height:100%;
  justify-content: flex-start;
  align-items: center;
}
#con_right{
  display:flex;
  width:50%;
  height:100%;
  justify-content: flex-end;
  align-items: center;
}
.elb{
  margin:5px;
  text-align: center;
}
.left-text {
  text-align: left;
  margin-left:-10px;
}
.right-text {
  text-align: right;
  margin-right: -10px;

}
</style>